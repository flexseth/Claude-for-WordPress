# Claude for WordPress

> **AI-powered WordPress plugin and block development using Claude Code**

A comprehensive development suite that leverages Claude Code agents to scaffold, build, test, and document production-ready WordPress plugins and Gutenberg blocks — fully compliant with WordPress coding standards, security best practices, and WordPress.org submission guidelines.

![Agent Development Workflow](./AI%20driven%20software%20development%20pipeline.png)

---

## What This Is

**Claude for WordPress** is a Claude Code workspace configuration that turns Claude into a specialist WordPress developer. It provides:

- **Specialized AI agents** that you can invoke via natural language prompts or commands
- **Flexible invocation** - use slash commands (`/wp-plugin`), `@` commands (`@html-to-blocks.md`), or simply ask Claude directly
- **Project templates** for every common WordPress plugin type
- **Automated compliance** with WordPress Coding Standards, Plugin Check Plugin, accessibility, and i18n requirements
- **An AI-driven pipeline** with self-correction feedback loops for high-quality output

### Opinionated

The gutenberg agent in this software package explicitly states to use functional programming. 

Tailor the coding specifications to meet your needs.

---

## Quick Start

### Prerequisites

- [Claude Code](https://docs.claude.com/en/docs/claude-code/) installed
- Node.js and npm
- A local WordPress development environment
- Git

### Create a New Plugin or Block

Open this repository in Claude Code and use any of these methods:

**Method 1: Slash command**
```bash
/wp-plugin
```

**Method 2: @ command**
```bash
@html-to-blocks.md <section>...</section>
```

**Method 3: Natural language (no command needed)**
```
Use the HTML to Blocks agent to convert this hero section HTML to a Gutenberg block
```

Claude will guide you through the process and handle the implementation.

---

## Key Features

### 🔌 Plugin & Block Scaffolding

- Scaffolds plugins using standard WordPress plugin structure
- Scaffolds blocks using [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- Supports **static** and **dynamic** block rendering
- Generates properly formatted plugin headers, `readme.txt`, `block.json`, and `CHANGELOG.md`

### 🤖 AI Agent Pipeline

An orchestrated pipeline of specialized agents handles the full development lifecycle:

| Agent | Role |
|-------|------|
| **Orchestration Agent** | Coordinates all agents and manages feedback loops |
| **Requirements Analyst** | Gathers and refines project requirements |
| **Architect Agent** | Designs component structure and technical specifications |
| **Code Generation Agent** | Writes PHP, JavaScript, and CSS following WordPress standards |
| **Code Review Agent** | Validates code quality, security, and standards compliance |
| **Test Automation Agent** | Generates unit, integration, and E2E tests |
| **Deployment Agent** | Manages versioning, builds, and release packaging |

See [AGENTS.md](./AGENTS.md) for the full pipeline description and feedback loop architecture.

### 🛠️ Claude Commands

| Command | Purpose |
|---------|---------|
| `@ask.md` | Architecture consultation and technical guidance |
| `@code.md` | Feature implementation and code generation |
| `@debug.md` | Bug analysis and problem solving |
| `@refactor.md` | Code improvement and restructuring |
| `@test.md` | Testing strategy and test generation |
| `@review.md` | Code quality and security review |
| `@optimize.md` | Performance analysis and optimization |
| `@deploy-check.md` | Pre-deployment readiness validation |
| `@html-to-blocks.md` | Convert HTML markup to WordPress Gutenberg blocks |
| `/wp-plugin` | Full WordPress plugin/block development workflow |

**Note:** Commands can be invoked using `@command.md` syntax, or you can simply ask Claude in natural language:
- "Use the HTML to Blocks agent to convert this HTML"
- "Convert this HTML section to a Gutenberg block"
- "Use the html-to-blocks-agent to transform this landing page"

See [COMMANDS-AND-AGENTS-GUIDE.md](./COMMANDS-AND-AGENTS-GUIDE.md) for detailed usage.

### ✅ Built-In Quality Standards

Every generated plugin or block automatically follows:

- WordPress Coding Standards (WPCS) — PHP, JS, and CSS
- Plugin Check Plugin (PCP) requirements
- Security best practices: nonces, sanitization, escaping, validation
- Accessibility (WCAG / a11y) compliance
- Internationalization (i18n) readiness
- Responsive and mobile-friendly output
- REST API support
- GDPR compliance
- Compatibility with PHP 7.4+, MySQL 5.7+
- Theme compatibility: Twenty Twenty-Three, Twenty Twenty-Four, Astra, GeneratePress, Neve, Kadence, and more
- Page builder compatibility: Elementor, Beaver Builder, Divi

---

## Plugin Templates

When creating a standard plugin, choose from the following templates:

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

---

## Repository Structure

```
Claude-for-WordPress/
├── .claude/
│   ├── agents/             # Claude agent definitions
│   │   ├── gutenberg-block-architect.md
│   │   ├── html-to-blocks-agent.md
│   │   └── docs-agent.md
│   ├── commands/           # Claude slash command definitions
│   │   ├── code.md
│   │   ├── debug.md
│   │   ├── deploy-check.md
│   │   ├── html-to-blocks.md
│   │   ├── optimize.md
│   │   ├── refactor.md
│   │   ├── review.md
│   │   ├── test.md
│   │   └── wp-plugin.md
│   └── settings.local.json
├── .copilot/
│   ├── agents/
│   │   ├── Contributor-Auto.md   # Automated PR workflow agent
│   │   └── Contributor-Chat.md   # Interactive PR planning agent
│   └── setup-and-usage.md
├── docs/                   # Consolidated documentation resources
├── project-templates/      # Starter project templates
├── AGENTS.md               # AI agent pipeline documentation
├── CLAUDE.md               # Claude Code project configuration
├── COMMANDS-AND-AGENTS-GUIDE.md  # Full command and agent reference
├── SCAFFOLDING.md          # Scaffolding prompts and options
├── SITEBUILDER.md          # Project overview
├── USAGE.md                # Detailed usage instructions
└── README.md               # This file
```

---

## Documentation

| File | Description |
|------|-------------|
| [USAGE.md](./USAGE.md) | Detailed workflow and usage instructions |
| [AGENTS.md](./AGENTS.md) | AI agent pipeline and feedback loop architecture |
| [SCAFFOLDING.md](./SCAFFOLDING.md) | Plugin/block scaffolding options and prompts |
| [COMMANDS-AND-AGENTS-GUIDE.md](./COMMANDS-AND-AGENTS-GUIDE.md) | Full command reference and workflow examples |
| [SITEBUILDER.md](./SITEBUILDER.md) | High-level project overview |
| [CLAUDE.md](./CLAUDE.md) | Claude Code assistant standards and configuration |
| [docs/README.md](./docs/README.md) | Consolidated docs/resources entry point |
| [docs/MDX-AUDIT.md](./docs/MDX-AUDIT.md) | MDX best-practice audit and setup guidance |

---

## Common Workflows

```bash
# Create a new plugin or block
/wp-plugin

# Implement a new feature
@code.md Add a custom post type for team members with bio and photo fields

# Debug an issue
@debug.md Login redirects to wrong page after plugin activation

# Review code quality
@review.md src/my-plugin.php

# Generate tests
@test.md Settings page form validation

# Check deployment readiness
@deploy-check.md production
```

Full workflow examples: [COMMANDS-AND-AGENTS-GUIDE.md](./COMMANDS-AND-AGENTS-GUIDE.md)
Common Claude Code workflows: https://docs.claude.com/en/docs/claude-code/common-workflows

---

## Resources

- [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/)
- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code/)
- [Plugin Check Plugin](https://wordpress.org/plugins/plugin-check/)

---

## License

GPLv2 or later — see [https://www.gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/gpl-2.0.html)
