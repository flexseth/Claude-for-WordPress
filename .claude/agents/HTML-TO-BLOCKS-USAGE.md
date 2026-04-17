# HTML to Blocks Agent - Usage Guide

## Overview

The **HTML to Blocks Agent** is a specialized AI agent designed to convert HTML markup into WordPress Gutenberg blocks. This agent analyzes HTML structure, CSS styles, and functionality, then creates semantically equivalent WordPress blocks using the `@wordpress/create-block` package and WordPress Core Components.

## Quick Start

### Using the Command

Convert HTML to blocks using the `@html-to-blocks.md` command:

```bash
@html-to-blocks.md <HTML_SOURCE>
```

Where `<HTML_SOURCE>` can be:
- Inline HTML code
- Path to an HTML file
- URL to an HTML page

### Examples

#### Example 1: Simple Hero Section

```bash
@html-to-blocks.md <section class="hero">
  <h1>Welcome to Our Site</h1>
  <p>Discover amazing products</p>
  <a href="#products" class="btn">Get Started</a>
</section>
```

#### Example 2: From File

```bash
@html-to-blocks.md path/to/landing-page.html
```

#### Example 3: Feature Grid

```bash
@html-to-blocks.md <div class="features">
  <div class="feature">
    <img src="icon1.svg" alt="Fast" />
    <h3>Lightning Fast</h3>
    <p>Our service is incredibly fast</p>
  </div>
</div>
```

## What the Agent Does

### 1. HTML Analysis
- Parses HTML structure and hierarchy
- Extracts CSS styles and layout patterns
- Identifies interactive elements and JavaScript
- Maps content vs. structural elements
- Documents accessibility features

### 2. Block Architecture Design
- Designs block attributes from HTML content
- Plans block controls (sidebar/toolbar)
- Determines parent/child relationships
- Creates block variations
- Defines block patterns for reusable layouts

### 3. Block Implementation
- Creates `block.json` configuration
- Builds Edit function with WordPress Core Components
- Builds Save function matching HTML structure
- Converts CSS to WordPress-compatible styles
- Implements responsive design
- Adds internationalization support

### 4. Quality Validation
- Verifies design fidelity
- Tests accessibility
- Validates WordPress Coding Standards
- Tests in different themes/browsers
- Ensures Plugin Check Plugin compliance
- Verifies responsive behavior

## Output

The agent produces:

1. **Conversion Analysis Report** - Overview of HTML and proposed block architecture
2. **Block Implementation Files** - Complete block with all necessary files
3. **Block Documentation** - Usage guide and customization instructions
4. **Testing Report** - Validation results
5. **Migration Guide** - Steps to convert existing HTML to blocks

## Features

### Semantic Preservation
- Maintains HTML element semantics
- Uses appropriate ARIA attributes
- Preserves accessibility features

### Design Fidelity
- Matches original HTML design
- Adapts to WordPress block standards
- Maintains responsive behavior

### WordPress-Native Solutions
- Uses WordPress Core Components exclusively
- Follows WordPress Coding Standards
- Ensures Plugin Check Plugin compliance

### Flexible Architecture
- Supports block variations
- Creates block patterns
- Enables template parts

### Performance Optimization
- Efficient JavaScript bundles
- CSS loaded only when needed
- Optimized for Core Web Vitals

## Conversion Strategies

### Strategy 1: Simple Element Conversion
For basic HTML elements (headings, paragraphs, images):
- Uses RichText, MediaUpload components
- Maps HTML attributes to block attributes
- Preserves semantic structure

### Strategy 2: Complex Layout Conversion
For layouts with multiple sections:
- Creates parent/child block relationships
- Uses InnerBlocks for flexible content
- Defines block templates
- Implements block variations

### Strategy 3: Interactive Element Conversion
For forms, buttons, interactive components:
- Extracts functionality to block controls
- Uses WordPress APIs for interactivity
- Implements proper security
- Provides editor preview

### Strategy 4: Full Page Conversion
For complete HTML pages:
- Breaks down into logical sections
- Creates block patterns for templates
- Provides migration guide
- Documents customization options

## HTML to Block Mapping

### Common Elements

| HTML | WordPress Approach | Component |
|------|-------------------|-----------|
| `<h1>`-`<h6>` | RichText with tagName | `<RichText tagName="h2" />` |
| `<p>` | RichText or InnerBlocks | `<RichText tagName="p" />` |
| `<img>` | MediaUpload + attribute | `<MediaUpload />` |
| `<a>` | URLInput + RichText | `<URLInput />` |
| `<button>` | RichText + URLInput | `<RichText tagName="button" />` |
| `<div>` with content | InnerBlocks | `<InnerBlocks />` |

### Common Attributes

| HTML Attribute | Block Attribute | Control |
|----------------|-----------------|---------|
| `class` | className (string) | TextControl |
| `id` | anchor (string) | TextControl |
| `href` | url (string) | URLInput |
| `src` | media (object/number) | MediaUpload |
| `alt` | alt (string) | TextControl |

## WordPress Standards Compliance

All converted blocks meet:

✅ **Code Quality**
- WordPress Coding Standards (PHPCS, JSCS, CSSCS)
- ESLint with WordPress configuration
- Well-commented code

✅ **Security**
- Input sanitization
- Output escaping
- Nonces for forms
- Capability checks

✅ **Accessibility**
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA attributes
- Keyboard navigation

✅ **Performance**
- Minimal bundle size
- Efficient CSS loading
- Optimized images
- No unnecessary re-renders

✅ **Internationalization**
- Translation-ready strings
- Proper text domain
- RTL support
- Date/time localization

✅ **Theme Compatibility**
- Works with block themes
- Compatible with classic themes
- Respects theme.json
- No theme style conflicts

## Chain Workflows

Combine with other commands:

```bash
# 1. Convert HTML
@html-to-blocks.md <section>...</section>

# 2. Review code
@review.md converted-block

# 3. Test functionality
@test.md block functionality

# 4. Optimize performance
@optimize.md block bundle size

# 5. Check deployment
@deploy-check.md block
```

## Tips for Best Results

1. **Provide Complete HTML** - Include all CSS and JavaScript context
2. **Specify Requirements** - Mention specific WordPress features needed
3. **Note Interactions** - Explain dynamic behavior
4. **Share Design Intent** - Describe what HTML accomplishes
5. **Mention Constraints** - Note theme/plugin compatibility needs

## Common Use Cases

| HTML Type | Approach |
|-----------|----------|
| Landing page sections | Individual blocks + patterns |
| Email templates | Dynamic blocks with PHP |
| Widgets | Single blocks with controls |
| Card layouts | Parent block with inner blocks |
| Sliders/Carousels | Block with repeater + swiper.js |
| Forms | Dynamic blocks with server processing |
| Tables | RichText or custom table block |

## File Locations

- **Agent**: `.claude/agents/html-to-blocks-agent.md`
- **Command**: `.claude/commands/html-to-blocks.md`

## Related Documentation

- [AGENTS.md](../AGENTS.md) - AI agent pipeline documentation
- [COMMANDS-AND-AGENTS-GUIDE.md](../COMMANDS-AND-AGENTS-GUIDE.md) - Full command reference
- [CLAUDE.md](../CLAUDE.md) - Claude Code project configuration
- [Gutenberg Block Architect](./.claude/agents/gutenberg-block-architect.md) - Main block development agent

## Support

For issues or questions about the HTML to Blocks agent:
1. Review this documentation
2. Check the [COMMANDS-AND-AGENTS-GUIDE.md](../COMMANDS-AND-AGENTS-GUIDE.md)
3. See workflow examples in the guide
4. Test with simple HTML first before complex conversions

## Next Steps

After converting HTML to blocks:
1. **Test thoroughly** - All browsers, themes, devices
2. **Create documentation** - User guide and developer docs
3. **Build patterns** - Reusable block patterns
4. **Add variations** - Different layout options
5. **Consider transforms** - From/to core blocks
6. **Prepare migration** - Bulk conversion tools if needed
7. **Submit for review** - Use `@review.md` command

---

**Ready to convert your HTML to blocks?** Start with a simple section and work your way up to more complex layouts!
