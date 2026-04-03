# Changelog

All notable changes to Claude for WordPress will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Documentation
- Rewrote README.md from a minimal stub into a comprehensive project overview
- Added project tagline, description, and embedded AI pipeline workflow diagram
- Added Quick Start section with prerequisites and entry-point command
- Added agent pipeline summary table covering all 7 core agents and their roles
- Added Claude commands reference table covering all 8 available commands
- Added built-in quality standards checklist (WPCS, PCP, a11y, i18n, security, GDPR, etc.)
- Added plugin templates list with all 14 available template types
- Added annotated repository structure diagram
- Added documentation index table linking all major markdown files
- Added common workflow examples with concrete command usage
- Added external resources section and license reference

## [1.0.0] - 2026-03-30

### Added
- Initial release of the Claude for WordPress development suite
- `CLAUDE.md` — Claude Code project configuration with prompt standards, agent references, and coding requirements
- `SITEBUILDER.md` — High-level project overview and scaffolding process documentation
- `AGENTS.md` — Full AI agent pipeline documentation including 8 core agents and 3 feedback loops (Self-Correction, Testing & Validation, Real-World Performance)
- `USAGE.md` — Detailed usage instructions covering full development lifecycle
- `SCAFFOLDING.md` — Interactive scaffolding prompts and options for plugins and blocks
- `COMMANDS-AND-AGENTS-GUIDE.md` — Complete command and agent reference with workflow examples
- `COMMANDS-AND-AGENTS-INFOGRAPHIC.svg` — Visual command and agent reference infographic
- `MEMORIES.md` — Persistent context storage file for AI session memory
- `TODO.md` — Tracked backlog of planned features and improvements
- `GUIDELINES.md` — Project coding and contribution guidelines
- `CANONICAL-PLUGINS.md` — Reference list of canonical WordPress plugin patterns
- `DEMO.md` — Demo and example usage documentation
- `STATIC-PROJECT.md` — Guide for static block rendering projects
- `DYNAMIC-PROJECT.md` — Guide for dynamic block rendering projects
- `CREATE-PROJECT.md` — Project creation reference
- `AI driven software development pipeline.png` — Visual diagram of the multi-agent development pipeline
- `.claude/commands/` — Full suite of Claude slash command definitions:
  - `wp-plugin.md` — WordPress plugin and block development workflow
  - `code.md` — Feature implementation and code generation
  - `debug.md` — Bug analysis and problem solving
  - `refactor.md` — Code improvement and restructuring
  - `test.md` — Testing strategy and test generation
  - `review.md` — Code quality and security review
  - `optimize.md` — Performance analysis and optimization
  - `deploy-check.md` — Pre-deployment readiness validation
- `.claude/ask.md` — Architecture consultation command
- `.claude/settings.local.json` — Claude Code local settings
- `.copilot/agents/Contributor-Auto.md` — Automated branch, commit, and PR workflow agent
- `.copilot/agents/Contributor-Chat.md` — Interactive PR planning and preparation agent
- `.copilot/setup-and-usage.md` — Copilot agent setup and usage guide
- `.copilot/README.md` and `.copilot/agent.md` — Copilot integration documentation
- `.github/workflows/copilot-coding-agent.yml` — GitHub Actions workflow for Copilot coding agent
- `scripts/agent-runner.sh` — Shell script for running agents
- `scripts/copilot-agent-create-pr.sh` — Shell script for automated PR creation
- `scripts/test/run_dry_run_test.sh` — Dry-run test script
- `sym-link.md` — Symbolic link setup documentation
- `readme-sample.txt` — Sample WordPress.org readme.txt for reference
- `project-templates/` — Starter project templates:
  - `add-blocks/` — Template for adding custom blocks
  - `html-tag-processor/` — HTML Tag Processor block template
  - `shortcode/` — Shortcode plugin template
  - `api/numbers-api/` — Numbers API integration block (full scaffolded plugin)
  - `api/google-charts/google-charts-block/` — Google Charts block (full scaffolded plugin)
- `Zero-BS-CRM/add-to-admin-menu/` — Example plugin: adds menu items to Zero BS CRM admin bar
- `charleston-time/` — Example plugin: dynamic Gutenberg block displaying Charleston, SC local time
- `claude-poc-block/` — Proof-of-concept Gutenberg block plugin
