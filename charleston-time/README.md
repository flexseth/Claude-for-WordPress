# Charleston Time Block

A WordPress Gutenberg block that displays the current time in Charleston, South Carolina (Eastern Time Zone).

![Charleston Time Block Screenshot](screenshot.png)

## Description

This dynamic block shows real-time updates of the current time in Charleston, SC, formatted as `10:35AM` or `3:25PM`. The time updates every minute in both the editor and on the front-end, providing a live clock experience.

> **📖 For detailed information about design decisions and development process, see [RATIONALE.md](RATIONALE.md)**

## Features

- **Real-time Updates**: Time refreshes every minute
- **Charleston, SC Timezone**: Uses America/New_York timezone (EST/EDT)
- **Custom Format**: Displays in 12-hour format (e.g., `10:35AM`, `3:25PM`)
- **Dynamic Rendering**: JavaScript-based rendering on both editor and front-end
- **Beautiful Design**: Purple gradient background with clean typography
- **Responsive**: Works on all device sizes
- **WordPress Standards**: Follows WordPress Coding Standards and best practices

## Installation

### Manual Installation

1. Copy the `charleston-time` directory to your WordPress plugins folder:
   ```bash
   cp -r charleston-time /path/to/wordpress/wp-content/plugins/
   ```

2. Navigate to your WordPress admin panel
3. Go to **Plugins** → **Installed Plugins**
4. Find **"Charleston Time"** and click **Activate**

### From Zip File

1. Build the plugin zip:
   ```bash
   npm run plugin-zip
   ```

2. Upload the generated `.zip` file through WordPress admin:
   - Go to **Plugins** → **Add New** → **Upload Plugin**
   - Choose the zip file and click **Install Now**
   - Activate the plugin

## Usage

### Adding the Block

1. Create or edit a post/page
2. Click the **+** button to add a new block
3. Search for **"Charleston Time"** or look for the clock icon
4. Insert the block

The time will immediately display and update every minute.

### Block Settings

- **Alignment**: Supports alignment options (left, center, right, wide, full)
- **Custom Classes**: Can add custom CSS classes via Advanced settings

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm
- WordPress development environment

### Setup

1. Navigate to the plugin directory:
   ```bash
   cd charleston-time
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Commands

```bash
# Start development mode (watch for changes)
npm start

# Build for production
npm run build

# Format code
npm run format

# Lint CSS
npm run lint:css

# Lint JavaScript
npm run lint:js

# Create plugin zip file
npm run plugin-zip

# Update WordPress packages
npm run packages-update
```

## File Structure

```
charleston-time/
├── src/                          # Source files
│   └── charleston-time/
│       ├── block.json            # Block configuration
│       ├── edit.js               # Editor component
│       ├── editor.scss           # Editor-only styles
│       ├── render.php            # Server-side rendering template
│       ├── style.scss            # Front-end & editor styles
│       └── view.js               # Front-end JavaScript
├── build/                        # Compiled files (auto-generated)
├── charleston-time.php           # Main plugin file
├── readme.txt                    # WordPress.org readme
├── package.json                  # Node dependencies & scripts
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

## How It Works

### Block Architecture

This is a **dynamic block** that uses JavaScript for rendering instead of PHP. Here's how it works:

#### 1. Block Registration (`charleston-time.php`)

The main plugin file registers the block using WordPress 6.7+ block manifest system:

```php
wp_register_block_types_from_metadata_collection(
    __DIR__ . '/build',
    __DIR__ . '/build/blocks-manifest.php'
);
```

This automatically:
- Registers the block type from `block.json`
- Enqueues editor scripts and styles
- Enqueues front-end scripts and styles
- Sets up the render callback

#### 2. Block Configuration (`block.json`)

```json
{
  "name": "flex-perception/charleston-time",
  "title": "Charleston Time",
  "category": "widgets",
  "icon": "clock",
  "render": "file:./render.php",
  "viewScript": "file:./view.js"
}
```

- **render**: PHP template for initial HTML structure
- **viewScript**: JavaScript that runs on the front-end

#### 3. Editor Component (`edit.js`)

The editor uses React hooks to create a live-updating time display:

```javascript
export default function Edit() {
    const [time, setTime] = useState(getCharlestonTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCharlestonTime());
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div {...useBlockProps()}>
            <div className="charleston-time-display">
                {time}
            </div>
        </div>
    );
}
```

**Key Features:**
- **useState**: Manages the time state
- **useEffect**: Sets up interval to update every minute (60000ms)
- **Cleanup**: Clears interval when component unmounts
- **useBlockProps**: Adds WordPress block wrapper attributes

#### 4. Time Calculation Function

Both `edit.js` and `view.js` use the same time calculation logic:

```javascript
function getCharlestonTime() {
    const now = new Date();
    const charlestonTime = new Date(
        now.toLocaleString('en-US', { timeZone: 'America/New_York' })
    );

    let hours = charlestonTime.getHours();
    const minutes = charlestonTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutesStr}${ampm}`;
}
```

**How it works:**
1. Gets current time
2. Converts to Charleston timezone (America/New_York)
3. Converts from 24-hour to 12-hour format
4. Determines AM/PM
5. Pads minutes with leading zero if needed
6. Returns formatted string: `10:35AM`

#### 5. Server-Side Rendering (`render.php`)

Outputs the initial HTML structure:

```php
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="charleston-time-display">
        <?php esc_html_e('Loading...', 'charleston-time'); ?>
    </div>
</div>
```

- Shows "Loading..." initially
- JavaScript (`view.js`) takes over and updates the content

#### 6. Front-end JavaScript (`view.js`)

Runs on the front-end to update the time display:

```javascript
function updateCharlestonTime() {
    const displays = document.querySelectorAll('.charleston-time-display');
    const currentTime = getCharlestonTime();

    displays.forEach((display) => {
        display.textContent = currentTime;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCharlestonTime();
    setInterval(updateCharlestonTime, 60000); // Update every minute
});
```

**Process:**
1. Waits for DOM to load
2. Immediately updates time
3. Sets interval to update every 60000ms (1 minute)
4. Updates all instances of the block on the page

#### 7. Styling (`style.scss`)

Applies to both editor and front-end:

```scss
.wp-block-flex-perception-charleston-time {
    .charleston-time-display {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
}
```

## WordPress Coding Standards

This block follows WordPress best practices:

### PHP Standards
- ✓ Proper text domain for internationalization
- ✓ Output escaping with `esc_html_e()`
- ✓ Proper use of `get_block_wrapper_attributes()`
- ✓ Direct access prevention with `ABSPATH` check

### JavaScript Standards
- ✓ Uses WordPress packages (`@wordpress/element`, `@wordpress/block-editor`)
- ✓ Functional components (no class components)
- ✓ ES6+ syntax
- ✓ Proper React hooks usage
- ✓ WordPress coding style (spaces, braces, etc.)

### Security
- ✓ No user input (no XSS vulnerability)
- ✓ Proper output escaping
- ✓ Uses WordPress core functions

### Performance
- ✓ Only loads JavaScript when block is present
- ✓ Efficient DOM queries
- ✓ Proper cleanup of intervals
- ✓ Minified production build

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Timezone Support:** Requires browser with `Intl.DateTimeFormat` and timezone support (all modern browsers).

## Customization

### Changing the Timezone

Edit `src/charleston-time/edit.js` and `src/charleston-time/view.js`:

```javascript
// Change this line:
{ timeZone: 'America/New_York' }

// To your desired timezone, e.g.:
{ timeZone: 'America/Los_Angeles' }  // Pacific
{ timeZone: 'America/Chicago' }      // Central
{ timeZone: 'Europe/London' }        // UK
```

### Changing the Format

Modify the `getCharlestonTime()` function in both files:

```javascript
// Current format: 10:35AM
return `${hours}:${minutesStr}${ampm}`;

// 24-hour format: 22:35
return `${charlestonTime.getHours()}:${minutesStr}`;

// With seconds: 10:35:42AM
const seconds = charlestonTime.getSeconds();
const secondsStr = seconds < 10 ? '0' + seconds : seconds;
return `${hours}:${minutesStr}:${secondsStr}${ampm}`;
```

### Styling

Edit `src/charleston-time/style.scss` to customize appearance:

```scss
.charleston-time-display {
    font-size: 3em;              // Larger text
    background: #000;             // Black background
    color: #0f0;                  // Green text (matrix style)
    font-family: monospace;       // Monospace font
    border-radius: 0;             // Square corners
}
```

After making changes, rebuild:

```bash
npm run build
```

## Troubleshooting

### Time not updating
- Check browser console for JavaScript errors
- Ensure `view.js` is loading on the front-end
- Clear WordPress cache

### Wrong timezone
- Verify timezone string in `getCharlestonTime()` function
- Check browser timezone support

### Styling issues
- Clear browser cache
- Check for CSS conflicts with theme
- Inspect element to verify classes are applied

### Block not appearing in editor
- Check that plugin is activated
- Clear WordPress transients
- Check browser console for errors

## Contributing

This block was created as part of the Claude Code for WordPress project.

### Development Workflow

1. Make changes in `src/` directory
2. Run `npm start` for live development
3. Test in WordPress editor and front-end
4. Run `npm run build` for production
5. Commit changes (build directory is gitignored)

## License

GPLv2 or later

## Credits

- **Created with**: [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- **Built by**: Claude Code for WordPress
- **Namespace**: flex-perception

## Support

For issues or questions about this block, please refer to the WordPress Block Editor documentation:
- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Block API Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/)

## Changelog

### 1.0.0 - 2025-10-21
- **Stable Release** 🎉
- Added comprehensive RATIONALE.md documentation
- Complete development rationale and design decisions
- Added screenshot to README
- Production-ready with full documentation
- All WordPress coding standards met

### 0.1.1 - 2025-10-21
- Changed update frequency from every second to every minute
- Improved performance with 60x reduction in updates
- Updated all documentation

### 0.1.0 - 2025-10-21
- Initial release
- Real-time Charleston, SC time display
- Dynamic block with JavaScript rendering
- Custom purple gradient styling
- Updates every minute in editor and front-end

For complete changelog details, see [CHANGELOG.md](CHANGELOG.md)
