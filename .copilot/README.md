# Copilot Agents — local usage

This folder contains agent descriptions and helper scripts to enable local Copilot-driven contribution workflows.

Files added
- `.copilot/agents/Contributor-Chat.md` — Agent file for interactive Copilot Chat usage (prepares patches and PR templates).
- `.copilot/agents/Contributor-Auto.md` — Agent file describing the automated agent that can create branches and PRs.
- `scripts/copilot-agent-create-pr.sh` — Helper script that applies a patch, creates a branch, pushes, and opens a PR using `gh`.

Prerequisites
-------------
- git (local repo)
- GitHub CLI `gh` (https://cli.github.com/) — used to create PRs and interact with GH.
- jq (optional) — useful for scripting JSON responses.
- If this repo uses PHP, install Composer as needed (the agent documentation references Composer detection). If you don't use PHP, you can ignore Composer.
- Composer is needed for WPCS (WordPress Coding Standards). It would be ideal to have this.

GitHub authentication
---------------------
Authenticate `gh` locally with a token that has at least the `repo` and `workflow` scopes. You can authenticate with `gh auth login` or set `GITHUB_TOKEN` for CI. `gh auth status` verifies your login.

Usage examples
--------------
Dry-run (preview only):

```bash
./scripts/copilot-agent-create-pr.sh --branch copilot/example --title "chore: add agent docs" --patch /tmp/changes.patch --body-file /tmp/pr-body.md --dry-run
```

Create and push a PR:

```bash
./scripts/copilot-agent-create-pr.sh --branch copilot/example --title "chore: add agent docs" --patch /tmp/changes.patch --body-file /tmp/pr-body.md --assignee your-username
```

Notes
-----
- The helper script tries `git apply` first, then `git am` for mbox-style patches. It commits with the PR title when applying a patch.
- The `Contributor-Chat` agent is intentionally non-destructive — it prepares patches and PRs but waits for you to apply or run the helper script.
- The `Contributor-Auto` agent describes an automated flow; if you want me to create the initial PR in this repository now, say so and I will proceed (this requires permission to push/create PRs).
