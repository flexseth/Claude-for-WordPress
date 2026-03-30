# Claude Code Development Command Suite
(CCDS for short) is a collection of specialized Claude commands designed to facilitate comprehensive software development workflows. Each command orchestrates multiple expert agents to handle specific aspects of development, from architecture consultation to code implementation, debugging, testing, and deployment readiness.

## Setup Instructions

Create a `.claude/commands` folder in your project root directory, then save the following commands as corresponding `.md` files.

Each command uses the format: `@command.md <TASK_DESCRIPTION>`

The commands cover various aspects of software development, including architecture consultation, code implementation, debugging, refactoring, testing, code review, performance optimization, and deployment checks.

---

## `wp-plugin` - WordPress Plugin Development Command Suite


## Usage Examples

### Complete Development Workflow
```bash
# 1. Architecture consultation
@ask.md How to design a microservices architecture for an e-commerce platform handling 10M+ users

# 2. Implement new feature
@code.md Implement user authentication system with login, registration, and password reset

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

### Architecture Consultation Workflow
```bash
# 1. Architecture guidance
@ask.md Should we use event sourcing or traditional CRUD for our order management system

# 2. System design consultation
@ask.md How to handle data consistency across microservices in a distributed transaction

# 3. Technology strategy
@ask.md Comparing GraphQL vs REST API for our mobile-first application

# 4. Implementation planning
@code.md Implement API gateway pattern with rate limiting and circuit breaker
```

### Refactoring Workflow
```bash
# 1. Refactoring analysis
@refactor.md user service module with high complexity

# 2. Code review
@review.md refactored user service

# 3. Performance validation
@optimize.md refactored service performance

# 4. Test supplementation
@test.md refactored user service
```

---

## Command Categories

### 🏗️ **Architecture & Design**
- `@ask.md` - Strategic architectural consultation and technical guidance

### 💻 **Development**
- `@code.md` - Feature implementation and code generation
- `@debug.md` - Bug analysis and problem solving
- `@refactor.md` - Code improvement and restructuring

### 🔍 **Quality Assurance**
- `@test.md` - Testing strategy and test generation
- `@review.md` - Code quality and security review
- `@optimize.md` - Performance analysis and optimization

### 🚀 **Operations**
- `@deploy-check.md` - Deployment readiness and validation

---

## Setup Steps

✅ 1. **Create commands directory:** 
   ```bash
   mkdir -p .claude/commands
   ```

✅ 2. **Save each command** as a separate `.md` file in the `.claude/commands` directory

3. **Use commands** with natural language descriptions:
   ```bash
   @ask.md How should I architect a real-time chat system?
   @code.md Implement JWT authentication middleware
   @test.md user registration with email verification -->
   @debug.md Database connection pool exhaustion errors
   ```

4. **Chain commands** for complete workflows following the examples above

This command suite provides a comprehensive development workflow covering architecture, implementation, testing, optimization, and deployment phases with consistent multi-agent coordination and structured output formats.