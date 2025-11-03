# Changelog

All notable changes to the Numbers API block will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-10-21

### Added
- Comprehensive JSDoc documentation for all JavaScript files
- JSDoc configuration with Docdash template
- npm scripts for generating and cleaning documentation (`npm run docs`, `npm run docs:clean`)
- JSDoc dependencies: jsdoc, jsdoc-babel, docdash

### Changed
- Enhanced all function and module documentation with detailed JSDoc comments
- Updated package.json metadata (version, description, author)

### Security
- Implemented secure server-side proxy for API requests
- Added WordPress REST API endpoint `/wp-json/numbers-api/v1/fact`
- Replaced insecure client-side HTTP requests with server-side `wp_remote_get()`
- Added request caching with WordPress Transients API (1-hour cache)
- Full parameter validation and sanitization on REST endpoint
- Eliminated mixed content warnings by routing all external API calls through server

### Technical
- Added @wordpress/api-fetch for secure editor API calls
- Server-side HTTP connection isolated from client
- All client-server communication uses HTTPS
- Proper error handling for API failures

## [1.0.0] - 2025-10-21

### Added
- Initial release of Numbers API block
- Integration with numbersapi.com API
- Block editor support with InspectorControls
- Multiple number type options (random, specific)
- Four fact type categories (trivia, math, date, year)
- Dynamic server-side rendering with render.php
- Client-side API fetching for frontend display
- Full internationalization support
- WordPress Coding Standards compliance
- Comprehensive documentation

### Features
- Real-time number fact fetching from Numbers API
- Customizable block settings in sidebar
- Loading states for better UX
- Error handling for failed API requests
- Consistent styling between editor and frontend

### Technical
- Uses WordPress block.json API version 3
- Leverages WordPress blocks-manifest.php for efficient registration
- Follows functional component patterns in React
- ESNext and modern JavaScript practices
- WordPress Core components for all UI elements
