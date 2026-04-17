# Claude Code Development Suite

**WordPress Plugin and Block Development Tools**

---

## Quick Start Guide

**Commands:** Use `@command.md <DESCRIPTION>` to trigger specialized workflows

**Agents:** Specialized AI assistants for WordPress development tasks

---

## 📋 Claude Commands (.claude/commands/)

### 🏗️ ARCHITECTURE & DESIGN

#### `@ask.md <TECHNICAL_QUESTION>`

**Strategic architectural consultation and technical guidance**

- **Specialist Agents:** Systems Designer • Technology Strategist • Scalability Consultant • Risk Analyst
- **Use for:** Architecture decisions, technology choices, system design patterns, scalability planning

---

### 💻 DEVELOPMENT

#### `@code.md <FEATURE_DESCRIPTION>`

**Feature implementation and code generation**

- **Specialist Agents:** Architect Agent • Implementation Engineer • Integration Specialist • Code Reviewer
- **Use for:** Building new features, implementing functionality, writing clean production code

#### `@debug.md <ERROR_DESCRIPTION>`

**Bug analysis and problem solving**

- **Specialist Agents:** Error Analyzer • Code Inspector • Environment Checker • Fix Strategist
- **Use for:** Troubleshooting errors, root cause analysis, debugging complex issues

#### `@refactor.md <REFACTOR_SCOPE>`

**Code improvement and restructuring**

- **Specialist Agents:** Structure Analyst • Code Surgeon • Design Pattern Expert • Quality Validator
- **Use for:** Code cleanup, technical debt reduction, design pattern implementation

---

### 🔍 QUALITY ASSURANCE

#### `@test.md <COMPONENT_OR_FEATURE>`

**Testing strategy and test generation**

- **Specialist Agents:** Test Architect • Unit Test Specialist • Integration Test Engineer • Quality Validator
- **Use for:** Creating test suites, test coverage analysis, quality validation

#### `@review.md <CODE_SCOPE>`

**Code quality and security review**

- **Specialist Agents:** Quality Auditor • Security Analyst • Performance Reviewer • Architecture Assessor
- **Use for:** Code reviews, security audits, quality assessment, architecture validation

#### `@optimize.md <PERFORMANCE_TARGET>`

**Performance analysis and optimization**

- **Specialist Agents:** Profiler Analyst • Algorithm Engineer • Resource Manager • Scalability Architect
- **Use for:** Performance tuning, bottleneck identification, resource optimization

---

### 🚀 OPERATIONS

#### `@deploy-check.md <DEPLOYMENT_TARGET>`

**Deployment readiness and validation**

- **Specialist Agents:** Quality Assurance Agent • Security Auditor • Operations Engineer • Risk Assessor
- **Use for:** Pre-deployment checks, production readiness, deployment planning

---

### 🔌 WORDPRESS DEVELOPMENT

#### `/wp-plugin <DESCRIPTION>`

**WordPress plugin development following all WordPress standards**

- **Enforces:** WordPress Coding Standards, Security, Accessibility, i18n, Performance, Testing
- **Use for:** Creating WordPress plugins with complete compliance and best practices

#### `@html-to-blocks.md <HTML_SOURCE>`

**Convert HTML markup to WordPress Gutenberg blocks**

- **Specialist Agents:** HTML Analyzer • Block Architect • Block Developer • Quality Validator
- **Use for:** Converting static HTML to dynamic blocks, migrating legacy content, transforming HTML templates
- **Features:** Semantic preservation, design fidelity, responsive conversion, accessibility compliance

---

## 🤖 Development Agents

### Claude Agents (.claude/agents/)

#### `gutenberg-block-architect`

**Elite WordPress Gutenberg Block development**

- **Expertise:** Block API, Core Components, UX Design, Accessibility, Performance, Security
- **Use for:** Creating/modifying Gutenberg blocks with WordPress standards and Core Components only

#### `html-to-blocks-agent`

**HTML to WordPress Gutenberg Blocks conversion specialist**

- **Expertise:** HTML/CSS Analysis, Block Architecture, Semantic Mapping, Responsive Design, Accessibility
- **Use for:** Converting HTML markup to blocks, migrating legacy content, transforming templates to block patterns
- **Features:** Design fidelity, semantic preservation, WordPress-native solutions

#### `wordpress-docs-researcher`

**WordPress Documentation Research and PCP failure resolution**

- **Expertise:** WordPress Handbooks, Plugin Check Plugin, Documentation sources, Coding Standards
- **Use for:** Finding documentation for PCP failures, researching WordPress APIs, understanding best practices

---

### Copilot Agents (.copilot/agents/)

#### `Contributor-Auto`

**Automated branch creation, commits, and PR workflow**

**Capabilities:**
- Creates branches and applies patches automatically
- Runs tests before creating PRs
- Uses GitHub CLI to open PRs

**Use for:** Automated PR creation workflows

#### `Contributor-Chat`

**Interactive issue and PR preparation assistant**

**Capabilities:**
- Prepares PR content and branch suggestions
- Creates patches for manual review

**Use for:** Interactive PR planning and preparation

---

## 📚 Resources

For detailed setup instructions, see:
- `.claude/commands/` - Command definitions
- `.copilot/setup-and-usage.md` - Agent setup guide

**Complete WordPress development workflow from architecture to deployment**

---

## Command Categories Summary

| Category | Commands | Purpose |
|----------|----------|---------|
| 🏗️ **Architecture & Design** | `@ask.md` | Strategic planning and technical guidance |
| 💻 **Development** | `@code.md`, `@debug.md`, `@refactor.md`, `@html-to-blocks.md` | Feature implementation, debugging, code improvement, HTML conversion |
| 🔍 **Quality Assurance** | `@test.md`, `@review.md`, `@optimize.md` | Testing, code review, performance optimization |
| 🚀 **Operations** | `@deploy-check.md` | Deployment readiness validation |
| 🔌 **WordPress** | `/wp-plugin`, `@html-to-blocks.md` | WordPress plugin development, HTML to blocks conversion |

---

## Workflow Examples

### Complete Development Workflow

```bash
# 1. Architecture consultation
@ask.md How to design a microservices architecture for an e-commerce platform

# 2. Implement new feature
@code.md Implement user authentication system with login and registration

# 3. Code review
@review.md user authentication module

# 4. Generate tests
@test.md user authentication functionality

# 5. Performance optimization
@optimize.md login API response time

# 6. Deployment check
@deploy-check.md production environment
```

### Bug Fix Workflow

```bash
# 1. Debug analysis
@debug.md User login returns intermittent 500 errors

# 2. Implement fix
@code.md Fix login service concurrency issues

# 3. Test verification
@test.md login concurrent scenarios

# 4. Deployment preparation
@deploy-check.md hotfix branch
```

### WordPress Block Development

```bash
# 1. Create new Gutenberg block
# Use gutenberg-block-architect agent for WordPress-specific development

# 2. Implement block features
@code.md Add custom controls and styling options

# 3. Review and optimize
@review.md block implementation
@optimize.md block rendering performance

# 4. Test accessibility
@test.md block accessibility features
```

### HTML to Blocks Conversion Workflow

```bash
# 1. Convert HTML markup to blocks
@html-to-blocks.md <section class="hero">...</section>

# 2. Review generated block code
@review.md converted hero block

# 3. Test block functionality
@test.md hero block editor and frontend rendering

# 4. Optimize block performance
@optimize.md hero block bundle size and loading

# 5. Check deployment readiness
@deploy-check.md hero block for production
```

