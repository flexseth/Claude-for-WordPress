# USAGE.md - Claude Code for WordPress

This document outlines how to effectively use this Claude Code workspace to build WordPress plugins and blocks.

## Getting Started

### Prerequisites
- Node.js and npm installed
- WordPress development environment (local or remote)
- Git for version control
- Basic understanding of WordPress plugin/block development

### First Steps
1. Read `SITEBUILDER.md` for project overview
2. Review `CLAUDE.md` for AI assistant standards and guidelines
3. Familiarize yourself with the project templates in `project-templates/`

## Using the /wp-plugin Command

The primary way to create new WordPress projects in this workspace is through the `/wp-plugin` slash command.

### Basic Usage
Simply type:
```
/wp-plugin
```

Claude will guide you through the project discovery process, asking questions about:
- Plugin name, description, and metadata
- Plugin type (plugin, block, or both)
- Block-specific settings (if applicable)
- Template type (settings page, shortcode, custom post type, etc.)

### What the Command Does
1. Gathers all necessary project requirements through interactive prompts
2. Scaffolds the appropriate file structure
3. Creates properly formatted plugin headers and readme.txt
4. Sets up WordPress Coding Standards compliance
5. Initializes with proper licensing (GPLv2 or later)

## Project Workflow

### 1. Planning Phase
Before any coding begins, Claude will:
- Create a project plan with milestones and tasks
- Use the TodoWrite tool to track progress
- Ask clarifying questions if requirements are unclear

**Key Files Created:**
- Plugin bootstrap files, folder structure
- `readme.txt` - WordPress.org readme
- `PLAN.md` - Project roadmap and architecture
- GitHub Issues - Task tracking (when applicable)

### 2. Development Phase
Claude follows these standards:
- Use the `create-block` package for block scaffolding - refer to `SCAFFOLDING.md`
- **Code Quality**: WordPress Coding Standards (PHP, JS, CSS) (see QA agent)
- **Modern Practices**: ES6+, PHP 7.4+, functional components (see development agent)
- **WordPress Core**: Uses WordPress components exclusively (see development agent)
- **Documentation**: Creates `.md` files for features (see docs agent)
- **Testing**: Writes unit, integration, and E2E tests (see testing agent)

### 3. Documentation Phase
As features are built, Claude will:
- Record prompts and responses in `INSTRUCTIONS.md`
- Update `CHANGELOG.md` with changes
- Create feature documentation as needed
- Update version numbers when significant changes occur

## File Structure

Standard plugin structure follows `@wordpress/create-block`:

```
your-plugin/
├── src/                    # Source code
├── assets/                 # Images, icons, styles
├── config/                 # Configuration files
├── docs/                   # Documentation (larger projects)
├── tests/                  # Test files
├── plugin-name.php         # Main plugin file
├── readme.txt              # WordPress.org readme
├── CHANGELOG.md            # Version history
├── LICENSE                 # GPLv2 or later
└── package.json            # Dependencies
```

## Key Standards and Practices

### WordPress Compliance
- Passes Plugin Check Plugin requirements
- Follows WordPress.org submission guidelines
- Implements security best practices (nonces, sanitization, escaping)
- Internationalization (i18n) ready
- Accessibility (a11y) compliant

### Technical Requirements
- Uses WordPress Core components only
- No custom database tables (uses post meta, options API, taxonomies, CPTs)
- Conditional script/style loading
- REST API support
- Compatible with popular themes and page builders

### Security & Performance
- All inputs sanitized and validated
- All outputs escaped
- Transients for caching
- Optimized queries with $wpdb
- Lazy loading for images
- GDPR compliant

## Branching Strategy

When requesting new features:
1. Claude may suggest creating a GitHub branch
2. Feature work happens in isolated branches
3. Use PRs for code review before merging
4. Main branch stays production-ready

## Version Control Best Practices

### Commits
- Claude creates commits only when explicitly requested
- Commit messages follow conventional format
- Each commit includes attribution to Claude

### Pull Requests
Use the command:
```
create a pull request
```

Claude will:
1. Analyze all changes since branch diverged
2. Create comprehensive PR summary
3. Include test plan checklist
4. Return the PR URL

## Memory and Context Management

### MEMORIES.md
Claude saves important context to `MEMORIES.md`:
- Project-specific decisions
- Custom requirements
- Repeated patterns or preferences
- Important documentation links

### INSTRUCTIONS.md
Records the conversation history:
- All prompts given
- Summary of action steps taken
- Responses and outcomes

## Common Commands and Workflows

### Create a New Plugin
```
/wp-plugin
```
Follow the interactive prompts.

### Create a Gutenberg Block
When prompted during `/wp-plugin`, select "block" or "both", then specify:
- Static vs dynamic rendering
- Block category
- Block supports (align, anchor, className, etc.)
- Required plugins

### Add a Feature
```
Add [feature description] to [plugin name]
```
Claude will:
1. Create a todo list for the feature
2. Plan the implementation
3. Code following all standards
4. Update documentation
5. Write tests

### Fix Issues
```
Fix [issue description]
```
Claude will research, plan, and implement the fix.

### Update Documentation
```
Update the readme/documentation for [feature]
```

### Run Tests
```
Run tests and fix any failures
```

## Plugin Templates Available

When selecting "plugin" type, choose from:
- Settings page
- Shortcode
- Widget
- Custom post type
- Custom taxonomy
- REST API endpoint
- Data store
- Block hooks
- HTML Tag Processor
- Block bindings
- Inner blocks
- Supports
- API integration
- Other (custom)

## Block Development Specifics

### Static vs Dynamic Blocks
- **Static**: Content saved to database, rendered from saved HTML. See ./STATIC-PROJECT.md
- **Dynamic**: Rendered via PHP callback on each page load. See ./DYNAMIC-PROJECT.md

### Block Supports
Choose from:
- align - Alignment toolbar
- anchor - HTML anchor support
- className - Custom CSS classes
- html - Edit as HTML option
- inserter - Show in block inserter
- multiple - Allow multiple instances
- spacing - Margin/padding controls
- typography - Text formatting controls

## Quality Assurance

Claude ensures:
- Code passes WordPress Coding Standards (PHPCS)
- No errors in browser console
- Blocks look identical in editor and frontend
- Mobile responsive
- Compatible with major themes
- Accessible (WCAG compliant)
- Secure (no vulnerabilities)
- Performant (optimized queries)

## Getting Help

### Within Claude Code
```
/help
```

### Provide Feedback
Report issues at: https://github.com/anthropics/claude-code/issues

### Clarify Requirements
If Claude asks questions, provide clear answers. The more specific you are, the better the output.

## Best Practices for Working with Claude

### Be Specific
Instead of: "Create a plugin"
Better: "Create a plugin that adds a custom post type for team members with featured images and bio fields"

### Confirm Plans
Review the plan Claude creates before proceeding. Ask questions if anything is unclear.

### Iterative Development
Build features incrementally. Test each feature before moving to the next.

### Use Version Control
Commit working code frequently. Create branches for experimental features.

### Review Generated Code
While Claude follows best practices, always review code before deploying to production.

## Advanced Features

### Custom Slash Commands
Create custom commands in `.claude/commands/` for repetitive tasks.

### MCP Servers
Claude Code supports Model Context Protocol servers for extended functionality.

### Hooks and Extensions
Configure hooks in settings to run shell commands in response to events.

## Troubleshooting

### Claude Asks Too Many Questions
Provide more detail in your initial request. Reference existing patterns or examples.

### Code Doesn't Meet Standards
Claude should auto-correct. If not, specify: "Ensure this follows WordPress Coding Standards"

### Missing Features
Check `TODO.md` for planned features. Request additions as needed.

### Build Errors
```
Run the build and fix any errors
```
Claude will diagnose and fix issues.

## Project Maintenance

### Regular Updates
- Update WordPress compatibility versions
- Update dependencies
- Run security audits
- Optimize performance

### Version Bumps
When ready to release:
1. Update CHANGELOG.md
2. Update version in plugin header
3. Update version in readme.txt
4. Create git tag
5. Build release package

## Resources

- [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/)
- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code/)

## Summary

This workspace is designed to streamline WordPress plugin and block development with AI assistance. By following the guidelines in this document and using the `/wp-plugin` command, you can rapidly scaffold, develop, test, and document production-ready WordPress projects that meet all WordPress.org standards and best practices.

Start with a clear goal, let Claude guide the discovery process, review the plan, and iterate on implementation. Happy building!