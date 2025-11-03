# Changelog

All notable changes to the Google Charts Block plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-21

### Fixed
- Fixed editor crash when block is saved and reloaded
- Fixed Google Charts library loading to prevent duplicate script tags
- Fixed state management using proper React hooks (useState instead of useRef)
- Fixed placeholder visibility to use correct state variable
- Improved chart instance reuse for better performance

### Changed
- Chart width now uses 100% by default for better responsiveness
- Script loading moved to document.head for better practice
- Separated script loading and chart drawing into distinct useEffect hooks
- Added error handling with try/catch for chart rendering

### Stability
- Block now reliably renders in editor after page save/reload
- Chart persists correctly across editor sessions
- No duplicate Google Charts API calls

## [0.1.0] - 2024-10-21

### Added
- Initial release of Google Charts Block
- Pie chart visualization using Google Charts API
- Block editor integration with InspectorControls
- Customizable chart title
- Dynamic data input system (add, edit, remove data points)
- Four color scheme options:
  - Default (blue-based palette)
  - Pastel (soft colors)
  - Vibrant (bold colors)
  - Earth (natural tones)
- Responsive chart width control (50-100%)
- Adjustable chart height control (200-800px)
- SVG chart export functionality
- Dynamic server-side rendering via PHP render callback
- Front-end JavaScript for chart rendering and interactivity
- Responsive design with automatic chart redraw on window resize
- Full internationalization (i18n) support
- Accessibility compliance
- WordPress Coding Standards compliance
- Default sample data for quick start

### Technical Details
- Dynamic block using `render.php`
- Google Charts library loaded asynchronously
- Block attributes stored in `block.json`
- Uses WordPress Core components (InspectorControls, PanelBody, TextControl, etc.)
- Functional React components
- SCSS for styling (separate editor and front-end styles)
- Follows WordPress block editor best practices

### Security
- Proper sanitization of all user inputs
- Escaping of all outputs
- Nonce verification for AJAX requests (future feature)
- No custom database tables (uses WordPress post meta)

### Browser Support
- All modern browsers with ES6+ support
- Graceful degradation with `<noscript>` fallback

[1.0.0]: https://github.com/flexperception/google-charts-block/releases/tag/1.0.0
[0.1.0]: https://github.com/flexperception/google-charts-block/releases/tag/0.1.0
