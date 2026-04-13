- **USE OOP**???


## Canonical Plugins
These are plugins that are looking to be examples of best practices for WordPress plugin development. They follow modern coding standards, ensure compatibility with popular themes and page builders, and prioritize security, performance, and user experience.

More time and steps are taken to ensure these plugins are well-architected and maintainable, they are well planned out in phases before development begins, and they include comprehensive documentation and testing.

## Extra considerations for canonical plugins
- Scaffold the plugin structure using the best practices outlined in the [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/intro/)
- Must follow WordPress Core standards and do things "the WordPress way"

## Testing
- Write unit tests, integration tests, and end-to-end tests as you go
- Ensure the plugin passes the [Plugin Check Plugin](https://wordpress.org/plugins/plugin-check/)
- Test compatibility with popular themes (Twenty Twenty-Three, Twenty Twenty-Four, Astra, GeneratePress, OceanWP, Neve, Kadence)
- Test compatibility with popular page builders (Elementor, Beaver Builder, Divi Builder)
- Test responsiveness on mobile devices
- Test accessibility (a11y) compliance
- Test internationalization (i18n) support
- Test performance optimizations (minimize HTTP requests, use efficient queries)