# Project Memories

## Resources
- Claude Code Memory docs: https://docs.claude.com/en/docs/claude-code/memory

## Memory Tips
- Include frequently used commands (build, test, lint) to avoid repeated searches
- Document code style preferences and naming conventions
- Add important architectural patterns specific to your project
- CLAUDE.md memories can be used for both instructions shared with your team and for your individual preferences

## Git / Version Control Standards

### ⚠️ Never Commit Local Settings
- `settings.local.json` — contains local machine-specific or personal configuration. **Never commit.**
- Any file matching `*.local.json` should be treated as local-only.
- `.env`, `.env.local`, `.env.*.local` — environment variable files. **Never commit.**
- These are all covered by the root `.gitignore`.

If you ever find a local settings file tracked by git, remove it immediately:
```bash
git rm --cached settings.local.json
```
Then confirm it is listed in `.gitignore`.
