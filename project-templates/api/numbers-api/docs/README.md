# Numbers API Block - Documentation

This directory contains the generated API documentation for the Numbers API WordPress block.

## Generating Documentation

To generate the JSDoc documentation:

```bash
npm run docs
```

This will create HTML documentation in the `docs/api/` directory.

## Cleaning Documentation

To remove generated documentation:

```bash
npm run docs:clean
```

## Viewing Documentation

After generating, open `docs/api/index.html` in your web browser to view the complete API documentation.

## Documentation Contents

The generated documentation includes:

- **Module Documentation**: Detailed information about each JavaScript module
- **Function Documentation**: Complete JSDoc comments for all functions
- **Parameter Types**: TypeScript-style type annotations
- **Examples**: Usage examples for key functions
- **Cross-references**: Links between related components

## JSDoc Configuration

Documentation is configured via `jsdoc.json` in the root directory, using:

- **Template**: Docdash theme for clean, responsive documentation
- **Plugins**: jsdoc-babel for modern JavaScript/JSX support
- **Source**: All JavaScript files in the `src/` directory
