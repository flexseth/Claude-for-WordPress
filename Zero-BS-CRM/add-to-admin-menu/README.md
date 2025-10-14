# Zero BS CRM - Add to Admin Menu

A lightweight WordPress plugin that adds quick access links for "Add New Contact" and "Add New Company" to the WordPress admin bar for Zero BS CRM (Jetpack CRM).

## Description

This plugin enhances the WordPress admin experience when using Zero BS CRM (Jetpack CRM) by adding convenient shortcuts in the admin toolbar. Instead of navigating through multiple menu levels, users can quickly access the "Add New Contact" and "Add New Company" pages directly from the top admin bar.

### Features

- ✅ Adds "Contact" link under the admin bar "New" menu
- ✅ Adds "Company" link under the admin bar "New" menu
- ✅ Automatic dependency checking (shows warning if Zero BS CRM is not active)
- ✅ Respects Zero BS CRM user capabilities
- ✅ Fully translatable with i18n support
- ✅ Provides action hooks and filters for extensibility
- ✅ No settings required - works out of the box
- ✅ Lightweight and performant (no CSS or JavaScript)
- ✅ Follows WordPress Coding Standards
- ✅ GDPR compliant

## Requirements

- **WordPress**: 5.8 or higher
- **PHP**: 7.4 or higher
- **Zero BS CRM** (Jetpack CRM): Any version
- **MySQL**: 5.7 or higher

## Installation

### From this repository

1. Download the plugin files
2. Upload the `add-to-admin-menu` folder to `/wp-content/plugins/`
3. Activate the plugin through the 'Plugins' menu in WordPress
4. The admin bar links will appear automatically (requires Zero BS CRM to be active)

### Manual Installation

1. Clone this repository or download the ZIP file
2. Extract to your WordPress `/wp-content/plugins/` directory
3. Activate through the WordPress admin panel

## Usage

Once activated, the plugin automatically adds two new items to the WordPress admin bar:

1. **New → Contact** - Links to the "Add New Contact" page in Zero BS CRM
2. **New → Company** - Links to the "Add New Company" page in Zero BS CRM

No configuration needed! The links will only appear if:
- Zero BS CRM is installed and activated
- The current user has the appropriate capabilities (`admin_zerobs_customers` or `manage_options`)

## User Capabilities

The plugin checks for the following capabilities before displaying the admin bar links:

- `admin_zerobs_customers` (Zero BS CRM's custom capability)
- `manage_options` (fallback for administrators)

Only users with these capabilities will see the admin bar menu items.

## Hooks & Filters

### Filters

#### `zbscrm_admin_bar_add_contact_url`

Customize the URL for adding a new contact.

```php
add_filter( 'zbscrm_admin_bar_add_contact_url', function( $url ) {
    return 'https://example.com/custom-contact-url';
} );
```

#### `zbscrm_admin_bar_add_company_url`

Customize the URL for adding a new company.

```php
add_filter( 'zbscrm_admin_bar_add_company_url', function( $url ) {
    return 'https://example.com/custom-company-url';
} );
```

### Actions

#### `zbscrm_admin_bar_before_add_items`

Fires before admin bar items are added.

```php
add_action( 'zbscrm_admin_bar_before_add_items', function( $wp_admin_bar ) {
    // Your custom code here
} );
```

#### `zbscrm_admin_bar_after_add_items`

Fires after admin bar items are added.

```php
add_action( 'zbscrm_admin_bar_after_add_items', function( $wp_admin_bar ) {
    // Your custom code here
} );
```

## Compatibility

### Themes
- Twenty Twenty-Three ✅
- Twenty Twenty-Four ✅
- Astra ✅
- GeneratePress ✅
- OceanWP ✅
- Neve ✅
- Kadence ✅

### Page Builders
- Elementor ✅
- Beaver Builder ✅
- Divi Builder ✅

### Caching Plugins
- WP Super Cache ✅
- W3 Total Cache ✅
- WP Rocket ✅

## Internationalization (i18n)

The plugin is fully translatable. Translation files should be placed in the `/languages` directory.

**Text Domain**: `zbscrm-admin-bar-links`

### Available Translations

Currently available in:
- English (default)

Want to contribute a translation? See [Contributing](#contributing).

## Security

This plugin follows WordPress security best practices:

- ✅ **Capability checks**: Only authorized users can see the menu items
- ✅ **URL escaping**: All URLs are escaped using `esc_url()`
- ✅ **Output escaping**: All output is properly escaped
- ✅ **Nonce verification**: Not applicable (no forms or data processing)
- ✅ **Input sanitization**: Not applicable (no user input)
- ✅ **Direct file access prevention**: Files check for `ABSPATH`
- ✅ **GDPR compliant**: No personal data collected or stored

## Performance

- **Zero JavaScript**: No JS files loaded
- **Zero CSS**: No stylesheets loaded
- **Minimal PHP**: Lightweight functional code
- **No database queries**: Uses only WordPress core functions
- **Conditional loading**: Only loads when admin bar is present

## Troubleshooting

### The admin bar links don't appear

**Possible causes:**
1. Zero BS CRM is not installed or activated
2. You don't have the required user capabilities
3. The admin bar is hidden in your user profile settings

**Solution:**
1. Ensure Zero BS CRM (Jetpack CRM) is active
2. Log in as an administrator
3. Check that "Show Toolbar when viewing site" is enabled in your user profile

### The links go to the wrong page

**Solution:**
The default URLs work with standard Zero BS CRM installations. If you're using a customized version, you can use the `zbscrm_admin_bar_add_contact_url` and `zbscrm_admin_bar_add_company_url` filters to adjust the URLs.

### Dependency warning appears

**Cause:** Zero BS CRM is not installed or activated.

**Solution:** Install and activate [Zero BS CRM (Jetpack CRM)](https://wordpress.org/plugins/zero-bs-crm/).

## Frequently Asked Questions

### Does this work with Jetpack CRM?

Yes! Zero BS CRM was rebranded as Jetpack CRM. This plugin works with both the legacy "Zero BS CRM" and the current "Jetpack CRM".

### Does this plugin modify Zero BS CRM?

No, this plugin only adds shortcuts to the WordPress admin bar. It doesn't modify any Zero BS CRM functionality.

### Can I customize the menu item labels?

Yes, but you'll need to use WordPress translation filters or modify the plugin code. The text is translatable using the `zbscrm-admin-bar-links` text domain.

### Does this work on the front end?

Yes, if the admin bar is visible on the front end (for logged-in users), the links will appear there as well.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow WordPress Coding Standards (PHP, JS, CSS)
4. Write unit tests for new functionality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Reporting Issues

Please use [GitHub Issues](https://github.com/yourusername/zbscrm-admin-bar-links/issues) for bug reports and feature requests.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

## License

This plugin is licensed under the GPL v2 or later.

```
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
```

You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

## Credits

- **Author**: Your Name
- **Plugin URI**: https://github.com/yourusername/zbscrm-admin-bar-links
- **Zero BS CRM**: Created by [Automattic](https://jetpackcrm.com/)

## Support

For support questions, please use:
- [GitHub Issues](https://github.com/yourusername/zbscrm-admin-bar-links/issues)
- [WordPress Support Forums](https://wordpress.org/support/)

---

**Made with ❤️ for the Zero BS CRM community**
