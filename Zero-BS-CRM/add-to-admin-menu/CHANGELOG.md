# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-12

### Added
- Initial release of Zero BS CRM - Add to Admin Menu plugin
- Admin bar menu items for "Add New Contact" under the "New" menu
- Admin bar menu items for "Add New Company" under the "New" menu
- Automatic dependency checking for Zero BS CRM activation
- User capability checks (`admin_zerobs_customers` and `manage_options`)
- Full internationalization (i18n) support with `zbscrm-admin-bar-links` text domain
- Filter hook `zbscrm_admin_bar_add_contact_url` for customizing contact URL
- Filter hook `zbscrm_admin_bar_add_company_url` for customizing company URL
- Action hook `zbscrm_admin_bar_before_add_items` fires before adding menu items
- Action hook `zbscrm_admin_bar_after_add_items` fires after adding menu items
- Admin notice when Zero BS CRM is not active
- Comprehensive documentation (README.md)
- Security features: capability checks, URL escaping, output escaping
- GDPR compliance (no personal data collection)
- WordPress Coding Standards compliance
- PHP 7.4+ compatibility
- WordPress 5.8+ compatibility

### Security
- All URLs escaped using `esc_url()`
- All output escaped using `esc_html()` and `esc_attr()`
- Capability checks before displaying admin bar items
- Direct file access prevention using `ABSPATH` checks
- Follows WordPress security best practices

### Performance
- Zero JavaScript files loaded
- Zero CSS files loaded
- Minimal PHP footprint with procedural/functional code
- No database queries performed
- Conditional loading based on Zero BS CRM activation

---

## [Unreleased]

### Planned Features
- Settings page for customizing admin bar item labels
- Option to add more Zero BS CRM shortcuts (Quotes, Invoices, Transactions)
- Admin bar submenu organization options
- Multisite compatibility enhancements
- Additional language translations

---

## Version History

- **1.0.0** (2025-10-12) - Initial release

---

## Upgrade Notice

### 1.0.0
Initial release. No upgrade required.

---

## Versioning Guidelines

This plugin follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version (X.0.0) - Incompatible API changes
- **MINOR** version (0.X.0) - New functionality in a backwards compatible manner
- **PATCH** version (0.0.X) - Backwards compatible bug fixes

---

## Support

For bug reports and feature requests, please use:
- [GitHub Issues](https://github.com/yourusername/zbscrm-admin-bar-links/issues)
