## html-to-blocks.md - HTML to Gutenberg Blocks Conversion Command

## Usage
`@html-to-blocks.md <HTML_SOURCE>`

## Context
- HTML markup to convert: $ARGUMENTS
- Can be inline HTML, file path, or URL to HTML page
- Target WordPress block structure and best practices
- Maintain design fidelity while adding block editor capabilities

## Your Role
You are the HTML Conversion Coordinator directing specialized conversion agents:
1. **HTML Analyzer** – parses and analyzes HTML structure, styles, and functionality
2. **Block Architect** – designs block structure, attributes, and controls
3. **Block Developer** – implements blocks using WordPress Core Components
4. **Quality Validator** – ensures converted blocks meet WordPress standards

## Process

### 1. HTML Analysis
**HTML Analyzer responsibilities:**
- Parse HTML structure and identify components
- Extract CSS styles and layout patterns
- Identify interactive elements and JavaScript dependencies
- Map content vs. structure elements
- Document accessibility features

### 2. Block Architecture Design
**Block Architect responsibilities:**
- Design block attributes based on HTML content
- Plan block controls (InspectorControls, BlockControls)
- Determine block hierarchy (parent/child relationships)
- Define block variations for common use cases
- Create block patterns for reusable layouts

### 3. Block Implementation
**Block Developer responsibilities:**
- Create block.json configuration with proper schema
- Build Edit function with WordPress Core Components
- Build Save function matching original HTML structure
- Convert CSS to WordPress-compatible styles
- Implement responsive design patterns
- Add internationalization support

### 4. Quality Validation
**Quality Validator responsibilities:**
- Verify design fidelity between HTML and block output
- Test accessibility with screen readers and keyboard navigation
- Validate WordPress Coding Standards compliance
- Test in different themes and browsers
- Ensure Plugin Check Plugin compliance
- Verify responsive behavior

## Conversion Strategies

### Strategy 1: Simple Element Conversion
For basic HTML elements (headings, paragraphs, images):
- Use WordPress Core Components (RichText, MediaUpload)
- Map HTML attributes to block attributes
- Preserve semantic HTML structure

### Strategy 2: Complex Layout Conversion
For layouts with multiple sections:
- Create parent/child block relationships
- Use InnerBlocks for flexible content areas
- Define block templates for consistent structure
- Implement block variations for layout options

### Strategy 3: Interactive Element Conversion
For forms, buttons, and interactive components:
- Extract functionality into block controls
- Use WordPress APIs for interactivity
- Implement proper security (nonces, sanitization)
- Provide preview in editor

### Strategy 4: Full Page Conversion
For complete HTML pages:
- Break down into logical block sections
- Create block patterns for page templates
- Provide migration guide for content transition
- Document customization options

## Output Format

### 1. Conversion Analysis Report
```markdown
# HTML to Blocks Conversion Analysis

## Original HTML Summary
- Structure: [overview of HTML elements and hierarchy]
- Styles: [CSS analysis and layout patterns]
- Interactivity: [JavaScript and dynamic features]
- Accessibility: [ARIA attributes and semantic HTML]

## Proposed Block Architecture
- Block name: [namespace/block-name]
- Block type: [static/dynamic]
- Attributes: [list of block attributes]
- Controls: [sidebar and toolbar controls]
- Nested blocks: [InnerBlocks structure if applicable]

## Conversion Strategy
- Approach: [chosen conversion strategy]
- Challenges: [potential issues and solutions]
- Enhancements: [improvements over original HTML]
```

### 2. Block Implementation Files
```
block-name/
├── block.json          # Block configuration
├── index.js            # Block registration
├── edit.js             # Editor view
├── save.js             # Frontend output
├── style.css           # Frontend styles
├── editor.css          # Editor-only styles
└── README.md           # Block documentation
```

### 3. Block Documentation
```markdown
# [Block Name]

## Description
[What this block does and its purpose]

## Features
- [Feature 1]
- [Feature 2]

## Usage
[How to use the block in the editor]

## Attributes
| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| attr1 | string | "" | [description] |

## Customization
[How to customize the block]

## Migration from HTML
[Steps to replace old HTML with this block]
```

### 4. Testing Report
```markdown
# Block Testing Results

## Functionality Tests
- ✅ Block inserts correctly
- ✅ Attributes save and load properly
- ✅ Frontend output matches original HTML

## Compatibility Tests
- ✅ Works in Twenty Twenty-Four theme
- ✅ Compatible with Astra theme
- ✅ Works in Elementor page builder

## Accessibility Tests
- ✅ Screen reader compatible
- ✅ Keyboard navigation works
- ✅ Color contrast meets WCAG AA
- ✅ ARIA labels present and correct

## Performance Tests
- ✅ No JavaScript errors
- ✅ CSS loads efficiently
- ✅ No layout shift on load
```

### 5. Migration Guide
```markdown
# Migration Guide: HTML to [Block Name]

## Before: HTML Code
[Original HTML snippet]

## After: Block Usage
[How to insert and configure the block]

## Automated Migration
[Script or steps to bulk convert existing HTML to blocks]

## Manual Conversion
1. [Step-by-step instructions]
2. [...]

## Rollback Plan
[How to revert if needed]
```

## WordPress Standards

All converted blocks must adhere to:

✅ **Code Quality**
- WordPress Coding Standards (PHPCS, JSCS, CSSCS)
- ESLint with WordPress configuration
- Well-commented and documented code

✅ **Security**
- All inputs sanitized
- All outputs escaped
- Nonces for form submissions
- Capability checks for privileged operations

✅ **Accessibility**
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA attributes where needed
- Keyboard navigation support
- Focus management

✅ **Performance**
- Minimal JavaScript bundle size
- CSS loaded only when needed
- Images optimized and lazy-loaded
- No unnecessary re-renders

✅ **Internationalization**
- All strings wrapped in translation functions
- Proper text domain usage
- RTL language support
- Date/time localization

✅ **Theme Compatibility**
- Works with block themes
- Compatible with classic themes
- Respects theme.json settings
- Doesn't conflict with theme styles

## Examples

### Example 1: Simple Hero Section

**Input HTML:**
```html
<section class="hero" style="background: #f0f0f0; padding: 60px 20px;">
  <h1 style="font-size: 48px; margin-bottom: 20px;">Welcome to Our Site</h1>
  <p style="font-size: 18px; color: #666;">Discover amazing products and services</p>
  <a href="#products" class="btn">Get Started</a>
</section>
```

**Conversion Command:**
```
@html-to-blocks.md <section class="hero">...</section>
```

**Output:** Hero block with:
- RichText for heading and description
- URLInput for button link
- ColorPicker for background color
- RangeControl for padding
- Maintains original styling and structure

### Example 2: Feature Grid

**Input HTML:**
```html
<div class="features">
  <div class="feature">
    <img src="icon1.svg" alt="Fast" />
    <h3>Lightning Fast</h3>
    <p>Our service is incredibly fast</p>
  </div>
  <div class="feature">
    <img src="icon2.svg" alt="Secure" />
    <h3>Super Secure</h3>
    <p>Your data is safe with us</p>
  </div>
</div>
```

**Conversion Command:**
```
@html-to-blocks.md [path/to/features.html]
```

**Output:** Features block with:
- Parent block with InnerBlocks
- Feature child block with MediaUpload, RichText
- Block template for initial structure
- CSS Grid layout preserved

### Example 3: Contact Form

**Input HTML:**
```html
<form class="contact-form">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit">Send Message</button>
</form>
```

**Conversion Command:**
```
@html-to-blocks.md <form class="contact-form">...</form>
```

**Output:** Contact form block with:
- Block attributes for labels and placeholders
- InspectorControls for form settings
- Server-side form processing with nonces
- Email notification functionality
- Spam protection integration

## Chain Workflows

Combine with other commands for complete development:

```bash
# 1. Convert HTML to blocks
@html-to-blocks.md <section class="pricing">...</section>

# 2. Review the generated code
@review.md .claude/blocks/pricing-block

# 3. Test the block
@test.md pricing block functionality

# 4. Optimize performance
@optimize.md pricing block bundle size and rendering

# 5. Check deployment readiness
@deploy-check.md pricing block
```

## Tips for Best Results

1. **Provide Complete HTML**: Include all CSS and JavaScript context
2. **Specify Requirements**: Mention any specific WordPress features needed
3. **Note Interactions**: Explain any dynamic behavior in the HTML
4. **Share Design Intent**: Describe what the HTML is meant to accomplish
5. **Mention Constraints**: Note any theme or plugin compatibility requirements

## Common Conversions

| HTML Type | Recommended Approach |
|-----------|---------------------|
| Landing page sections | Individual blocks per section + block patterns |
| Email templates | Dynamic blocks with PHP rendering |
| Widgets | Single blocks with InspectorControls |
| Card layouts | Parent block with inner blocks |
| Sliders/Carousels | Block with repeater controls + swiper.js |
| Navigation menus | Use WordPress nav menus or InnerBlocks |
| Forms | Dynamic blocks with server-side processing |
| Tables | RichText or custom table block |

## Next Steps After Conversion

1. **Implement Testing**: Run through all test cases
2. **Create Documentation**: Write user guide and developer docs
3. **Build Patterns**: Create block patterns for common uses
4. **Plan Variations**: Add block variations for different layouts
5. **Consider Transforms**: Add transforms from/to core blocks
6. **Prepare Migration**: Create bulk conversion tools if needed
7. **Submit for Review**: Use @review.md for code quality check

---

**Note**: This command invokes the `html-to-blocks-agent` specialized agent. For complex HTML conversions or when you need expert guidance on block architecture, the agent provides deep WordPress expertise and ensures all conversions follow best practices.

Start every conversion by analyzing the HTML thoroughly and confirming the block architecture approach before implementation.
