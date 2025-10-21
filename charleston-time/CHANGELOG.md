# Changelog

All notable changes to the Charleston Time block will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-21

### Added
- RATIONALE.md: Comprehensive documentation of development process, design decisions, and technical rationale
- HTML mockup file for visual preview
- Screenshot (screenshot.png) added to README
- COMP.html: Full rendered page HTML for reference

### Changed
- Version bump to 1.0.0 (stable release)
- Updated all documentation to reference RATIONALE.md
- README now displays screenshot at top

### Documentation
- Complete development rationale and decision-making process
- Technical challenges and solutions
- WordPress standards compliance details
- Future enhancement ideas
- Visual representation with screenshot

## [0.1.1] - 2025-10-21

### Changed
- Updated refresh interval from every second (1000ms) to every minute (60000ms)
- Improved performance by reducing update frequency
- Updated documentation to reflect new refresh rate

### Fixed
- More appropriate update interval for a time display showing hours and minutes

## [0.1.0] - 2025-10-21

### Added
- Initial release of Charleston Time block
- Dynamic block scaffolding using `@wordpress/create-block` package
- JavaScript-based time rendering (not PHP) for real-time updates
- Charleston, South Carolina timezone support (America/New_York - EST/EDT)
- Custom time format display: `10:35AM` or `3:25PM` (12-hour format with zero-padded minutes)
- Real-time clock updates every second in both editor and frontend
- React-based editor component using `useState` and `useEffect` hooks
- Frontend JavaScript view script for client-side rendering
- Custom styling with purple gradient background (`#667eea` to `#764ba2`)
- Responsive design with centered text and proper padding
- Block supports: alignment and custom className
- Clock icon for block inserter
- Proper WordPress block wrapper attributes
- Internationalization support with text domain
- `.gitignore` file excluding `node_modules/` and `build/` directories
- Comprehensive `README.md` with:
  - Installation instructions
  - Development setup guide
  - Complete code documentation and architecture explanation
  - Customization examples (timezone, format, styling)
  - Troubleshooting section
  - WordPress Coding Standards compliance details
- Production build configuration
- WordPress 6.7+ block manifest registration
- Modern block.json API (apiVersion 3)

### Features
- **Editor Experience**: Live-updating time display in block editor
- **Frontend Experience**: Real-time clock on published pages/posts
- **Consistent Styling**: Identical appearance in editor and frontend
- **Performance**: Efficient interval management with proper cleanup
- **Security**: Proper output escaping and WordPress standards compliance
- **Accessibility**: Semantic HTML structure and proper ARIA support via WordPress Core

### Technical Details
- Uses `@wordpress/element` for React hooks
- Uses `@wordpress/block-editor` for `useBlockProps`
- Uses `@wordpress/i18n` for internationalization
- SCSS/CSS modules for styling
- Webpack build process via `@wordpress/scripts`
- Dynamic rendering with PHP template + JavaScript view script
- Browser timezone API for accurate time conversion

### Development
- npm scripts for build, development, linting, and formatting
- Webpack dev server support with `npm start`
- Production build with `npm run build`
- Plugin zip creation with `npm run plugin-zip`

### Standards Compliance
- WordPress Coding Standards (PHP, JavaScript, CSS)
- WordPress Block Editor best practices
- React functional component patterns
- Proper WordPress hooks and filters
- GPLv2 or later license
- Security: Input sanitization and output escaping
- Performance: Conditional script loading, minified builds

### Documentation
- Inline code comments following WordPress standards
- JSDoc-style function documentation
- README.md with full technical explanation
- CHANGELOG.md (this file)

[0.1.0]: https://github.com/flex-perception/charleston-time/releases/tag/v0.1.0
