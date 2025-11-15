# Contributor-Auto Agent

Purpose
-------
This agent automates branch creation, commits, and PR creation when you instruct it to do so from Copilot Chat or a local helper. It is intended for power workflows where Copilot acts as an authoring/auditing assistant that can propose and open PRs for review.

Behavior
--------
- Triggered manually from Copilot Chat or by invoking the local helper script.
- When asked to implement a change, the agent will:
  1. Propose a branch name and diff/patch.
  2. Apply the patch in a new branch locally (or simulate in dry-run).
  3. Run tests if present and report pass/fail.
  4. If tests pass (or you allow), push the branch and open a PR using the GitHub CLI (`gh pr create`).

Safety and policy
-----------------
- The agent will not auto-merge PRs.
- The agent will try to run repository tests before creating a PR. If no tests are found, it will warn and proceed only with your approval.

Assignee and auditing
---------------------
- Manually assign on GitHub.com.

Requirements
------------
- Local tools: `git`, `gh` (GitHub CLI), `jq` (optional), and the `copilot` CLI if you use Copilot CLI flows.
- Environment: a GitHub token exported or authenticated via `gh auth login` with `repo` and `workflow` scopes.
- Composer: if your repository uses PHP/Composer, ensure `composer` is installed. (See `.copilot/README.md` for setup tips.)

Notes for maintainers
---------------------
- Use the helper script in `scripts/` to run the common flows (dry-run available).
- The agent will try to detect tests (common test commands: `npm test`, `composer test`, `pytest`, `go test`) and run them when creating PRs.
