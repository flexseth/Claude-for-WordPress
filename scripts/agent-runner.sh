#!/usr/bin/env bash
set -euo pipefail

# Simple agent runner: creates a short file, commits to a new branch, and opens a draft PR.
# Designed to run inside GitHub Actions. Defaults to dry-run when --dry-run provided.

usage() {
  cat <<EOF
Usage: $0 [--issue-number N] [--dry-run]

Options:
  --issue-number N   Optional issue number this run is responding to
  --dry-run          If provided, do not push or create a PR; just show actions

Example:
  $0 --issue-number 12 --dry-run
EOF
}

ISSUE_NUMBER=""
DRY_RUN=1

while [[ $# -gt 0 ]]; do
  case "$1" in
    --issue-number) ISSUE_NUMBER="$2"; shift 2;;
    --dry-run) DRY_RUN=1; shift;;
    --dry-run=false) DRY_RUN=0; shift;;
    -h|--help) usage; exit 0;;
    *) echo "Unknown arg: $1"; usage; exit 2;;
  esac
done

TIMESTAMP=$(date -u +%Y%m%dT%H%M%SZ)
BRANCH="agent/run-${TIMESTAMP}"
FILE_PATH="agent-run/${TIMESTAMP}.md"

echo "Running agent-runner (dry-run=$DRY_RUN)"
echo "Issue: $ISSUE_NUMBER"
echo "Branch: $BRANCH"

mkdir -p agent-run
cat > "$FILE_PATH" <<EOF
# Agent run - $TIMESTAMP

Responding to issue: ${ISSUE_NUMBER:-none}

This file was created by the Copilot Coding Agent (DIY runner).
EOF

git config user.name "Copilot Agent"
git config user.email "copilot@users.noreply.github.com"

git checkout -b "$BRANCH"
git add "$FILE_PATH"
git commit -m "chore(agent): run for issue ${ISSUE_NUMBER:-none}"

if [[ $DRY_RUN -eq 1 ]]; then
  echo "DRY RUN: would push branch $BRANCH and create a PR with file $FILE_PATH"
  git --no-pager show --name-only --pretty=format:"%h %s" HEAD
  exit 0
fi

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "GITHUB_TOKEN is required to push and create PRs" >&2
  exit 2
fi

# Push using token auth
REMOTE_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git remote set-url origin "$REMOTE_URL"
git push -u origin "$BRANCH"

if command -v gh >/dev/null 2>&1; then
  GH_AUTH=1
else
  GH_AUTH=0
fi

PR_TITLE="chore(agent): automated run ${TIMESTAMP}"
PR_BODY="Automated agent run for issue ${ISSUE_NUMBER:-none}. This is a draft PR created by the Copilot Coding Agent (DIY runner)."

if [[ $GH_AUTH -eq 1 ]]; then
  # Make gh use the token from environment
  export GH_TOKEN="$GITHUB_TOKEN"
  gh pr create --base main --head "$BRANCH" --title "$PR_TITLE" --body "$PR_BODY" --draft
else
  # Fallback to REST API
  API_URL="https://api.github.com/repos/${GITHUB_REPOSITORY}/pulls"
  PAYLOAD=$(jq -n --arg head "$BRANCH" --arg base "main" --arg title "$PR_TITLE" --arg body "$PR_BODY" '{head:$head,base:$base,title:$title,body:$body,draft:true}')
  curl -s -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" "$API_URL" -d "$PAYLOAD" | jq -r '.html_url'
fi

echo "Agent run complete"
