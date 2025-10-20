## Claude for WordPress
Create plugins with this suite of tools from Claude Code.

## Prompt me for the following information:
This will help to build the plugin bootstrap and `readme.txt` file.

### Plugin type
> prompt for plugin header

- Plugin name (default: WPClaude)
- Plugin description (default: Short description) - must be less than 150 characters
- Plugin version (default: 0.1.0)
- Plugin slug: A URL-friendly version of the plugin name (lowercase, no spaces, hyphens instead of spaces)
- Plugin author (default: Flex Perception)
- Plugin license (default: GPLv2 or later)
- Plugin license URI (default: https://www.gnu.org/licenses/gpl-2.0.html)
- Plugin text domain (default: same as plugin slug)
- Plugin author URI (default: https://flexperception.com)
- Plugin contributor names and URIs (default: flexseth)
- Author name: (default: Seth Miller)


> Select plugin type
- Plugin or block type (choose one: plugin, block, both) (default: both)

If the selection is "block" or "both" - create the prompts for `create-block` below.

## Custom Gutenberg Block
> User selected "block" or "both" for plugin type
Scaffold a block using [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/).

- [Static or dynamic rendering?](https://developer.wordpress.org/block-editor/getting-started/fundamentals/static-dynamic-rendering/) (choose one: static, dynamic) (default: dynamic)
- Block category (choose one: common, formatting, layout, widgets, embed, theme, reusable) (default: common)
- Block icon (default: admin-plugins)
- Block keywords (comma separated) (default: wpclaude, custom block)
- Block description (default: A custom block created with Claude)
- Block supports - comma separated list of supports (choose from: align, anchor, className, customClassName, html, inserter, multiple, reusable, spacing, typography) (default: align, className, html, inserter, multiple)

## Creating a plugin
> User selected "plugin" for plugin type
Creating a plugin will scaffold a standard WordPress plugin structure.
- Template: (choose one: settings page, shortcode, widget, custom post type, custom taxonomy, REST API endpoint, block hooks, IAPI, block bindings, inner blocks, supports, API, integration, other) (default: settings page)

## Block supports

## Must haves - project guidelines
Think first, then create the project plan. We will track project progress using GitHub Issues.
The project roadmap should lay out timeframes to completion, based on how many tokens it takes Claude to research features. 
This suite will create the project management and architecture for building plugins, blocks, etc.

- Scaffold the block using the `@wordpress/create-block` package
- Create all components based on WordPress Core components
- Do not install or use third party libraries unless absolutely necessary
- Use functional components instead of class components for React and PHP
- Follow WordPress coding standards (PHP, JS, CSS)
- Use ESNext and modern JavaScript practices
- Use the most recent APIs for block development - `block.json`
- Intuitively document features as `.md` files
- Write unit tests, integration and end-to-end tests as you go
- Update CHANGELOG with each feature addition or bug fix
- Use GitHub for version control
- Use GitHub Issues for task management
- Use semantic versioning

## plugin scaffolding
[Building a plugin](https://developer.wordpress.org/plugins/intro/)
[Building a block plugin](https://developer.wordpress.org/block-editor/getting-started/tutorial/)

This is the project starting point. Follow ALL practices above.

More information below.


## Requirements
- Use WordPress Core components
- Use WordPress Coding Standards (PHP, JS, CSS)
- Ensure theme compatibility (Twenty Twenty-Three, Twenty Twenty-Four), Astra, GeneratePress, OceanWP, Neve, Kadence
- Build using modern block editor (Gutenberg) practices
- Ensure best practices for plugin security
- Provide notice if there are caching concerns
- Use best practices for webpack and ESNext
- Allow access to command palette for features
- Make shortcodes available
- Create settings screens for plugins, panels for blocks
- Blocks should look the same in editor and front-end
- Ensure internationalization (i18n) support
- Ensure accessibility (a11y) compliance
- Ensure responsiveness on mobile devices
- Ensure compatibility with PHP 7.4 and above
- Ensure compatibility with MySQL 5.7 and above
- Add hooks (actions and filters) for extensibility
- Use nonces for security
- Sanitize and validate all user inputs
- Escape all outputs
- Should pass the Plugin Check Plugin
- Use functional JS (React)
- Follow WordPress database interaction best practices (using $wpdb)
- Do not create custom database tables
- Use transients for caching
- Ensure GDPR compliance
- Provide support for REST API
- Ensure compatibility with popular page builders (Elementor, Beaver Builder, Divi Builder)
- Only load JavaScript when necessary
- Only load CSS when necessary
- Use lazy loading for images
- Optimize for performance (minimize HTTP requests, use efficient queries)
- Ensure SEO best practices
- Provide hooks for custom functionality

## Future features
- Create themes
- Write custom code snippets
- Debug code