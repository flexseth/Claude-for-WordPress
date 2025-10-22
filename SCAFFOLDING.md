### Plugin type
Project discovery

> prompt for plugin header

- Plugin name (default: Sitebuilder Assets)
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

Syntax
npx @wordpress/create-block@latest <block-name> [options]

Block specific [plugin guidelines](https://developer.wordpress.org/plugins/wordpress-org/block-specific-plugin-guidelines/)

- [Static or dynamic rendering?](https://developer.wordpress.org/block-editor/getting-started/fundamentals/static-dynamic-rendering/) (choose one: static, dynamic) (default: dynamic)
- Block category (choose one: common, formatting, layout, widgets, embed, theme, reusable) (default: common)
- Block icon (default: admin-plugins)
- Block keywords (comma separated) (default: wpclaude, custom block)
- Block description (default: A custom block created with Claude)
- Block supports - comma separated list of supports (choose from: align, anchor, className, customClassName, html, inserter, multiple, reusable, spacing, typography) (default: align, className, html, inserter, multiple)
- Requires plugins (comma separated) (default: none)

## Creating a plugin
> User selected "plugin" for plugin type
Creating a plugin will scaffold a standard WordPress plugin structure.
- Template: (choose one: settings page, shortcode, widget, custom post type, custom taxonomy, REST API endpoint, data store, block hooks, IAPI, HTML Tag Processor, block bindings, inner blocks, supports, API, integration, other) (default: settings page)

## Determining the variant
Based on the user's selections above, determine the appropriate scaffolding variant:
- If "block" or "both" is selected, use the `create-block` package.
- If "plugin" is selected, scaffold a standard WordPress plugin structure.

## Scaffolded files
Using the WordPress `create-block` [package](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) and variants, scaffold the plugin based on prompts.

The command should follow the structure below:

```npx @wordpress/create-block <block-name> --title="<Block Title>" --description="<Block Description>" --category="<Block Category>" --icon="<Block Icon>" --keywords="<Block Keywords>" --supports="<Block Supports>" --requires="<Requires Plugins>"```  

## post-install
After scaffolding, refer to the post-installation steps in USAGE.md for further instructions on adding features, fixing issues, updating documentation, and running tests.

Symbolic link the newly created plugin directory to /Users/seth/Studio/demo/wp-content/plugins