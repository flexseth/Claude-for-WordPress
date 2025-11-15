# Copilot agents — setup and usage

This repository now includes local Copilot agent documentation and a helper for creating branches and PRs from a developer machine. This file documents what was added, how to run the included smoke test, and step-by-step commands to amend commits and open a PR as requested.

What I added
- `.copilot/agents/Contributor-Chat.md` — interactive Copilot Chat agent description (prepares patches/PR templates).
- `.copilot/agents/Contributor-Auto.md` — automated agent description (applies patches, runs tests, opens PRs when requested).
- `.copilot/README.md` — high-level README describing prerequisites and usage.
- `scripts/copilot-agent-create-pr.sh` — helper script to apply a patch, create a branch, push, and open a PR using `gh` (supports `--dry-run`).
- `scripts/test/run_dry_run_test.sh` — smoke test that runs the helper in a temporary repo and verifies dry-run output.

Repository state used for examples
- Branch with changes: `copilot/add-contributor-agents`
- Default/base branch: `main`

Prerequisites
- git (local)
- GitHub CLI `gh` (https://cli.github.com/). Authenticate with `gh auth login` or ensure `gh auth status` is OK.
- Optional: `jq` for scripting JSON responses.
- If your project uses PHP, install `composer` (the agent will try to detect and run tests if relevant).

Quick checks
- Confirm you're on the feature branch (example):
  ```bash
  git checkout copilot/add-contributor-agents
  git status
  ```
- Check `gh` auth status:
  ```bash
  gh auth status
  ```

Run the smoke test (dry-run)
1. Make the helper and test executable (if not already):
   ```bash
   chmod +x scripts/copilot-agent-create-pr.sh scripts/test/run_dry_run_test.sh
   ```
2. Run the test script (it creates a temporary repo and runs the helper with `--dry-run`):
   ```bash
   ./scripts/test/run_dry_run_test.sh
   ```
   Expected output includes the lines:
   - "DRY RUN: will not push or create PR"
   - "DRY RUN detected — test passed"

How to apply the changes locally then open a PR (example values)
These commands follow the variables you requested. Replace values where needed.

- Copilot commit email: `copilot@users.noreply.github.com` (safe noreply placeholder)
- Branch: `copilot/add-contributor-agents`
- PR title: `First commit from Copilot`
- PR body (short): `Hello World` plus a brief description
- Base branch: `main`

1) Amend the last commit to attribute it to Copilot and set the commit message:
```bash
git commit --amend --author="Copilot <copilot@users.noreply.github.com>" \
  -m "First commit from Copilot" \
  -m $'Hello World\n\nThis PR adds Copilot Contributor-Chat and Contributor-Auto agent docs, a helper script (scripts/copilot-agent-create-pr.sh) with dry-run support, and a smoke test (scripts/test/run_dry_run_test.sh). See .copilot/README.md for usage and setup.\n\nPlease review the changes. Do NOT auto-merge; I will review before merging.'
```

2) Force-push the branch (required because commit history was rewritten):
```bash
git push --force-with-lease origin copilot/add-contributor-agents
```

3) Create the PR (base = `main`) # we can't get copilot assigned for now
```bash
gh pr create --base main --head copilot/add-contributor-agents \
  --title "First commit from Copilot" \
  --body $'Hello World\n\nThis PR adds Copilot Contributor-Chat and Contributor-Auto agent docs, a helper script (scripts/copilot-agent-create-pr.sh) with dry-run support, and a smoke test (scripts/test/run_dry_run_test.sh). See .copilot/README.md for usage and setup.\n\nDo not auto-merge; I will review.'
```

Notes about Copilot email
- I did not find any historical commit authored by a Copilot account in this repository. The common safe placeholder for bot-like GitHub accounts is `copilot@users.noreply.github.com` or the GitHub bot form `41898282+github-copilot[bot]@users.noreply.github.com`.
- To discover exact Copilot-like emails in other repos or commits, you can run:
  ```bash
  git log --all --pretty=format:'%aN <%aE>' | sort -u | grep -i copilot || true
  git log --all --pretty=format:'%cN <%cE>' | sort -u | grep -i copilot || true
  ```
- You can also inspect known Copilot/GitHub bot accounts via the GitHub API (public fields only):
  ```bash
  gh api users/github-copilot --jq '.'
  ```

Why the earlier PR creation attempt failed
- When I attempted to push/open a PR earlier, the working directory did not have a `.git` repository in the environment where the commands ran; the attempted push failed with "fatal: not a git repository". Running the smoke test in a temporary repo succeeded.

Safety and policies
- The provided helper script and agents do not auto-merge PRs. They can create branches and open PRs when you explicitly run the helper.
- Always review generated patches and CI/test results before merging.

Next steps (choose one)
- I can run the amend/push/create PR steps here if you confirm the remote (I will not auto-merge). Reply with the remote URL or confirm `origin` exists.
- You can run the three commands in the "How to apply" section locally and then tell me the PR URL so I can continue with follow-ups (add tests, badges, or further automation).
- I can add a GitHub Actions workflow to optionally run parts of this flow in CI — say if you want scheduled automated PR drafts; tell me and I'll add ` .github/workflows/copilot-agent.yaml`.

If you want me to proceed creating the PR now, reply with either:
- "Proceed and init git with remote <repo-url>" — I will initialize git (if needed), add/commit, push, and open the PR, or
- "Retry (origin present)" — I will retry push + PR creation assuming `origin` is configured, or
- "I'll run locally" — I will wait for you to run the commands and share the PR link.
