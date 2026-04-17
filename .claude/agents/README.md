# Claude Agents

This directory contains specialized AI agents for WordPress development tasks.

## Available Agents

### 1. Gutenberg Block Architect (`gutenberg-block-architect.md`)

**Purpose:** Elite WordPress Gutenberg block development

**Expertise:**
- Block API and block.json schema
- WordPress Core Components mastery
- UX design excellence
- Accessibility (WCAG) compliance
- Performance optimization
- Security best practices

**Use when:**
- Creating new Gutenberg blocks
- Modifying existing blocks
- Implementing UI/UX improvements
- Ensuring accessibility compliance
- Optimizing block performance
- Refactoring blocks to use Core Components

**Model:** Claude Opus  
**Color:** Green

---

### 2. HTML to Blocks Agent (`html-to-blocks-agent.md`)

**Purpose:** Convert HTML markup to WordPress Gutenberg blocks

**Expertise:**
- HTML/CSS analysis and parsing
- Block architecture design
- Semantic mapping from HTML to blocks
- Responsive design conversion
- Accessibility preservation
- WordPress Core Components implementation

**Use when:**
- Converting static HTML to dynamic blocks
- Migrating legacy HTML content
- Transforming HTML templates to block patterns
- Creating blocks from HTML mockups
- Converting complex layouts to blocks
- Building blocks that preserve existing HTML structure

**Model:** Claude Sonnet  
**Color:** Purple

**See also:** [HTML-TO-BLOCKS-USAGE.md](./HTML-TO-BLOCKS-USAGE.md) for detailed usage guide

---

### 3. WordPress Docs Researcher (`docs-agent.md`)

**Purpose:** Find WordPress documentation and resolve Plugin Check Plugin failures

**Expertise:**
- WordPress documentation landscape
- Plugin Check Plugin (PCP) mastery
- Cross-referencing errors to documentation
- WordPress Handbook navigation
- Coding standards documentation

**Use when:**
- Interpreting PCP reports
- Finding documentation for WordPress APIs
- Understanding coding standards
- Researching best practices
- Locating Block Editor component docs
- Investigating security/performance/accessibility guidelines

**Model:** Claude Sonnet  
**Color:** Blue

---

## How to Use Agents

### Method 1: Via Commands

Some agents are invoked through slash commands:

```bash
/wp-plugin          # WordPress plugin development
@html-to-blocks.md  # HTML to blocks conversion
```

### Method 2: Direct Agent Invocation

Reference agents directly in your requests:

```
"Use the gutenberg-block-architect agent to create a testimonials block"
"Use the html-to-blocks-agent to convert this landing page HTML"
"Use the wordpress-docs-researcher to find PCP failure documentation"
```

### Method 3: Task Tool

Use the task tool to invoke agents in separate contexts:

```javascript
task({
  name: "convert-html",
  agent_type: "general-purpose",
  description: "Convert HTML section",
  prompt: "Use the html-to-blocks-agent to convert the hero section HTML to a Gutenberg block"
})
```

## Agent Coordination

Agents work together through the **Orchestration & Coordination Agent** which:

1. Routes tasks to appropriate specialized agents
2. Manages dependencies between agents
3. Handles feedback loops for quality improvement
4. Ensures communication between agents
5. Maintains project coherence

See [AGENTS.md](../../AGENTS.md) for the full AI agent pipeline architecture.

## Creating Custom Agents

To create a new agent:

1. Create a `.md` file in this directory
2. Follow the agent template structure:

```markdown
---
name: agent-name
description: Agent description with use cases and examples
model: sonnet|opus|haiku
color: blue|green|purple|red|yellow
---

[Agent instructions and expertise]
```

3. Reference the agent in:
   - `CLAUDE.md` - Add to agents list
   - `COMMANDS-AND-AGENTS-GUIDE.md` - Document capabilities
   - `AGENTS.md` - Add to specialized agents section (if applicable)
   - `README.md` - Add to repository structure

## Skills

Agents can utilize skills defined in the `skills/` directory:

- `CANONICAL-PLUGINS.md` - WordPress plugin development patterns
- `CREATE-PROJECT.md` - Project creation and scaffolding
- `README.md` - Skills overview

Skills provide reusable capabilities that multiple agents can leverage.

## Best Practices

1. **Choose the Right Agent**: Use specialized agents for their expertise areas
2. **Provide Context**: Give agents complete information about the task
3. **Trust the Process**: Allow agents to complete their workflows
4. **Review Output**: Always review agent-generated code and documentation
5. **Chain Agents**: Use multiple agents in sequence for complex tasks
6. **Leverage Feedback Loops**: Let agents iterate on their output

## Documentation

- [AGENTS.md](../../AGENTS.md) - Full AI agent pipeline architecture
- [COMMANDS-AND-AGENTS-GUIDE.md](../../COMMANDS-AND-AGENTS-GUIDE.md) - Command and agent reference
- [CLAUDE.md](../../CLAUDE.md) - Claude Code project configuration
- [HTML-TO-BLOCKS-USAGE.md](./HTML-TO-BLOCKS-USAGE.md) - HTML to blocks agent guide

## Support

For issues with agents:
1. Review agent-specific documentation
2. Check [COMMANDS-AND-AGENTS-GUIDE.md](../../COMMANDS-AND-AGENTS-GUIDE.md)
3. See workflow examples in the guide
4. Test with simple tasks before complex ones

---

**Last Updated:** 2026-04-17  
**Total Agents:** 3 specialized WordPress development agents
