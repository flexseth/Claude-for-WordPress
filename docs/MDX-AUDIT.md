# MDX Audit: Resource Definitions in `docs/`

## Goal
Store resource/component definitions as maintainable `.mdx` files without adding unnecessary tooling overhead.

## Recommendation
Use a **two-mode approach**:

1. **Authoring mode (now):** Keep `.mdx` files in-repo as source definitions with no mandatory build step.
2. **Rendering mode (later):** Add MDX tooling only when this repo needs to render/preview docs as a site.

## Best practices for `.mdx` definitions

- Use `.mdx` only when you need JSX composition; otherwise use `.md`.
- Keep each definition focused (one file per component/resource).
- Prefer stable links and explicit headings for future indexing/search.
- Avoid executable logic in MDX beyond presentational composition.
- Keep frontmatter consistent (`title`, `slug`, optional `tags`).

## Should we add install directions now?

**Yes, but keep them optional and clearly scoped.**

Because MDX is transpiled, teams that want local preview/build will need setup docs. However, this repository can safely store MDX source files without requiring all contributors to install an MDX toolchain immediately.

## Practical options

### Option A (recommended now): Source-only MDX
- Keep `.mdx` files under `docs/`.
- No required dependencies at repo root.
- Add rendering setup later when needed.

### Option B: Add a docs renderer now
- Add a dedicated docs toolchain (for example Docusaurus/Nextra/Storybook docs mode).
- Document install (`npm install`) and run commands (`dev`, `build`).
- Use CI docs build checks.

## Suggested next step
Start with Option A and add a renderer only after there is a concrete preview/publishing requirement.
