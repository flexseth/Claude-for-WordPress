# intro
Create plugins with this suite of tools from Claude Code.

Read `SITEBUILDER.md` for project overview.

See also: `SCAFFOLDING.md` for scaffolding details, and `USAGE.md` for usage instructions.

# prompt standards
- `INSTRUCTIONS.md` - RECORD - Chat requests: Record all prompts, summary of action steps, and responses
- `MEMORIES.md` - REMEMBER - save context window as memories
- `PLAN.md` - PLAN FIRST - before coding, create a project plan with milestones and tasks.
- `COMMANDS` - Use [slash commands](https://docs.claude.com/en/docs/claude-code/commands/) to trigger actions. See [agent skills](.claude/agents/skills)
- REPLACEMENT - Store prompt values as variables for reuse. Access with `[variable-name]`.
- CODE - `src` folder for source code, as `gutenberg-block-architect.md` as the agent, write commands like `/project:code.md`. 
- ASSETS - `assets` folder for images, icons, styles, etc.
- CONFIG - `config` folder for configuration files.
- DOCUMENT - `docs` folder for larger projects, otherwise use Markdown files.
- TEST - `tests` folder for unit, integration, and end-to-end tests.
- BRANCHES - does a prompt request a feature? Consider creating a GitHub branch for it.
- ASK QUESTIONS - if unclear about requirements, ask for clarification.
- REVIEW - use code review tools like GitHub PRs to ensure quality. Copilot can help with this.
- VERSIONING - if significant changes have been pushed, change log, update plugin header and readme version.

# agents
- `gutenberg-block-architect.md` - main agent for building Gutenberg blocks and plugins.
- Contributor-Auto.md - automates branch creation, commits, and PR creation. See `.copilot/agents/Contributor-Auto.md` for details.
- Contributor-Chat.md - chat assistance with code-related questions and tasks. See `.copilot/agents/Contributor-Chat.md` for details.
- `.copilot/agents/` - store additional agents here.
- `.copilot/setup-and-usage.md` - setup and usage instructions for agents.

# commands
Custom commands: You can define your own commands in .md files to automate specific tasks, such as feature implementation, bug analysis, or code refactoring.

Organization: These files can be stored in a project-specific directory like .claude/commands/ or a user-specific directory like ~/.claude/commands/.

Usage: You would use a command like /project:code or /user:code to trigger the functionality defined in the corresponding code.md file.

CLAUDE.md: The primary project configuration file, CLAUDE.md, can also contain instructions for code-related tasks, as well as common bash commands and style guidelines.

Custom Claude Code commands for this project:

- `@plan.md` - create project plan with milestones and tasks.
- `@code.md` - generate code based on project plan and requirements.
- `@test.md` - create tests for the code.
- `@document.md` - generate documentation for the project.

# About Claude Code for WordPress
- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code/)

## Project discovery
Look at documentation and save to memories in `MEMORIES.md`.

Then, prompt for user input:
> Gather requirements for the plugin to be created.

Look at `Scaffolding.md` for details on the prompts to ask.

The plugin will be created based on responses and the WordPress `create-block` package.

## Planning
Look over all of the files in this folder, and gain a top-level understanding of the various prompts, standards, and requirements. Save that to `MEMORIES.md` - we will need these for later.

Documentation: Memorize all documentation links from WordPress.org and GitHub repos that are relevant to plugin and block development.

- Scaffold plugin files based on type (block, plugin, or both)
- Include license file (GPLv2 or later)
- Reference necessary WordPress Core components
- Update the plugin bootstrap (.php) and [`readme.txt`](https://developer.wordpress.org/plugins/wordpress-org/how-your-readme-txt-works/) file based on user input


## Must haves - project guidelines
Think first, then create the project plan. We will track project progress using GitHub Issues.
The project roadmap should lay out timeframes to completion, based on how many tokens it takes Claude to research features. 
This suite will create the project management and architecture for building plugins, blocks, etc.

- Scaffold the block using the `@wordpress/create-block` package[LINK]
- Create all components based on WordPress Core components[LINK]
- Utilize[ built in scripts and JS libraries from WordPress Core](https://developer.wordpress.org/reference/functions/wp_enqueue_script/#default-scripts-and-js-libraries-included-and-registered-by-wordpress)
- Use a functional paradigm for PHP and JavaScript programming, **never use OOP**
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

## Documentation
See the Gutenberg Architect agent for resources and links.

### Summary of Deliverables ("Must Haves")
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
- Do not create custom database tables - instead post meta (Custom Fields), options API, custom taxonomies, or custom post types
- Use $wpdb for custom queries
- Use transients for caching
- Ensure GDPR compliance
- Provide support for REST API
- Ensure compatibility with popular page builders (Elementor, Beaver Builder, Divi Builder)
- Only load JavaScript when necessary
- Only load CSS when necessary
- Make lazy loading available for images
- Optimize for performance (minimize HTTP requests, use efficient queries)
- Provide hooks for custom functionality
- Ensure SEO best practices

## Future features
- Create themes
- Write custom code snippets
- Debug code