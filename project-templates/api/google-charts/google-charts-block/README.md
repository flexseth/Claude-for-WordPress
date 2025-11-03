# Google Charts Block

A WordPress block plugin that allows you to create and display beautiful, interactive pie charts powered by the Google Charts API.

## Description

Google Charts Block provides an easy way to visualize data in your WordPress posts and pages using professional-looking pie charts. Perfect for business dashboards, survey results, sales reports, and any content that benefits from data visualization.

## Features

- **Easy to Use**: Intuitive block editor interface
- **Customizable Data**: Add, edit, and remove data points directly from block settings
- **Multiple Color Schemes**: Choose from Default, Pastel, Vibrant, and Earth palettes
- **Responsive Design**: Charts automatically adjust to different screen sizes
- **Adjustable Sizing**: Control chart width (50-100%) and height (200-800px)
- **Export Functionality**: Download charts as SVG files
- **Dynamic Rendering**: Server-side rendering for optimal performance
- **Accessible**: Follows WordPress accessibility standards
- **Translation Ready**: Fully internationalized

## Installation

### Via WordPress Admin

1. Log in to your WordPress admin panel
2. Navigate to Plugins > Add New
3. Search for "Google Charts Block"
4. Click "Install Now" and then "Activate"

### Manual Installation

1. Download the plugin
2. Upload the `google-charts-block` folder to `/wp-content/plugins/`
3. Activate the plugin through the 'Plugins' menu in WordPress

### Development Setup

```bash
# Install dependencies
npm install

# Start development mode
npm start

# Build for production
npm run build
```

## Usage

1. Create or edit a post/page
2. Add the Google Charts Block from the block inserter
3. Configure your chart:
   - Set a chart title
   - Add/edit data points (label and value pairs)
   - Choose a color scheme
   - Adjust dimensions
   - Toggle export functionality
4. Publish your content

## Block Attributes

- `chartTitle` (string): The chart title
- `chartData` (array): Array of data objects with `label` and `value` properties
- `colorScheme` (string): Color palette (default, pastel, vibrant, earth)
- `chartWidth` (number): Width as percentage (50-100)
- `chartHeight` (number): Height in pixels (200-800)
- `enableExport` (boolean): Enable/disable chart export button

## Requirements

- WordPress 6.7 or higher
- PHP 7.4 or higher
- Block editor (Gutenberg)

## Browser Support

The plugin works in all modern browsers that support:
- ES6 JavaScript
- SVG rendering
- Google Charts API

## Development

### File Structure

```
google-charts-block/
├── src/
│   └── google-charts-block/
│       ├── block.json          # Block metadata and attributes
│       ├── index.js            # Block registration
│       ├── edit.js             # Editor component
│       ├── save.js             # Save function (returns null for dynamic block)
│       ├── render.php          # Server-side render callback
│       ├── view.js             # Front-end JavaScript
│       ├── style.scss          # Front-end and editor styles
│       └── editor.scss         # Editor-only styles
├── google-charts-block.php     # Main plugin file
├── readme.txt                  # WordPress.org plugin readme
└── README.md                   # This file
```

### Scripts

- `npm start` - Start development with hot reload
- `npm run build` - Build production files
- `npm run format` - Format code
- `npm run lint:css` - Lint CSS/SCSS files
- `npm run lint:js` - Lint JavaScript files
- `npm run plugin-zip` - Create a plugin ZIP file
- `npm run packages-update` - Update WordPress packages

## Standards Compliance

This plugin follows:
- WordPress Coding Standards (PHP, JavaScript, CSS)
- WordPress Block Editor best practices
- Accessibility guidelines (WCAG 2.1)
- Security best practices (sanitization, escaping, nonces)

## Changelog

### 1.0.0
- **Fixed**: Editor crash when block is saved and reloaded
- **Fixed**: Google Charts library loading to prevent duplicate script tags
- **Fixed**: State management using proper React hooks (useState instead of useRef)
- **Fixed**: Placeholder visibility issue
- **Improved**: Chart instance reuse for better performance
- **Changed**: Chart width now uses 100% by default for better responsiveness
- **Changed**: Script loading moved to document.head for better practice
- **Stability**: Block now reliably renders in editor after page save/reload
- **Stability**: Chart persists correctly across editor sessions

### 0.1.0
- Initial release
- Pie chart visualization
- Customizable data input
- Multiple color schemes
- Responsive sizing
- SVG export functionality
- Dynamic server-side rendering

## Contributing

Contributions are welcome! Please follow WordPress coding standards and include tests for new features.

## Support

For issues, questions, or feature requests, please visit the plugin support forum.

## License

This plugin is licensed under the GPL v2 or later.

```
Copyright (C) 2024 Flex Perception

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
```

## Credits

- Built with [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- Powered by [Google Charts](https://developers.google.com/chart)
- Developed by [Flex Perception](https://flexperception.com)

## Resources

- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Google Charts Documentation](https://developers.google.com/chart/interactive/docs)
- [WordPress Plugin Development](https://developer.wordpress.org/plugins/)
