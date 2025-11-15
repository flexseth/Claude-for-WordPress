#!/usr/bin/env bash
set -euo pipefail

# Helper script to apply a patch, create a branch, push, and open a PR using `gh`.
# Supports dry-run so you can review before pushing.

usage() {
  cat <<EOF
Usage: $0 --branch BRANCH --title "TITLE" [--body-file FILE] [--patch FILE] [--assignee USER] [--base BASE] [--dry-run]

Options:
  --branch BRANCH      Branch name to create (required)
  --title TITLE        PR title (required)
  --body-file FILE     File containing PR body (optional). Defaults to empty.
  --patch FILE         Patch file (git format-patch / diff) to apply (optional).
  --assignee USER      GitHub username to assign the PR to (optional).
  --base BASE          Base branch (default: main)
  --dry-run            Do not push or create PR, just show actions

Examples:
  $0 --branch copilot/chore-readme --title "Add README examples" --patch /tmp/changes.patch --body-file pr-body.md

EOF
}

BRANCH=""
TITLE=""
BODY_FILE=""
PATCH_FILE=""
ASSIGNEE=""
BASE="main"
DRY_RUN=0

while [[ $# -gt 0 ]]; do
  case $1 in
    --branch) BRANCH="$2"; shift 2;;
    --title) TITLE="$2"; shift 2;;
    --body-file) BODY_FILE="$2"; shift 2;;
    --patch) PATCH_FILE="$2"; shift 2;;
    --assignee) ASSIGNEE="$2"; shift 2;;
    --base) BASE="$2"; shift 2;;
    --dry-run) DRY_RUN=1; shift;;
    -h|--help) usage; exit 0;;
    *) echo "Unknown arg: $1"; usage; exit 2;;
  esac
done

if [[ -z "$BRANCH" || -z "$TITLE" ]]; then
  echo "--branch and --title are required" >&2
  usage
  exit 2
fi

command -v gh >/dev/null 2>&1 || { echo "gh (GitHub CLI) is required. Install from https://cli.github.com/" >&2; exit 2; }
command -v git >/dev/null 2>&1 || { echo "git is required" >&2; exit 2; }

if [[ $DRY_RUN -eq 1 ]]; then
  echo "DRY RUN: will not push or create PR"
fi

ROOT=$(git rev-parse --show-toplevel 2>/dev/null || true)
if [[ -z "$ROOT" ]]; then
  echo "Not in a git repository" >&2
  exit 2
fi

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Repo root: $ROOT"
echo "Current branch: $CURRENT_BRANCH"

if git show-ref --verify --quiet refs/heads/$BRANCH; then
  echo "Branch $BRANCH already exists locally; creating from current HEAD" 
fi

# Create branch
echo "Creating branch $BRANCH"
git checkout -b "$BRANCH"

if [[ -n "$PATCH_FILE" ]]; then
  echo "Applying patch $PATCH_FILE"
  if [[ $DRY_RUN -eq 1 ]]; then
    echo "--- Patch (preview) ---"
    sed -n '1,200p' "$PATCH_FILE" || true
  else
    if git apply --index "$PATCH_FILE"; then
      echo "Patch applied"
      git add -A
      git commit -m "$TITLE"
    else
      echo "Failed to apply patch with git apply; trying git am (mbox)" >&2
      if git am "$PATCH_FILE"; then
        echo "Applied with git am"
      else
        echo "Failed to apply patch" >&2
        exit 3
      fi
    fi
  fi
fi

if [[ $DRY_RUN -eq 1 ]]; then
  echo "DRY RUN complete: branch created locally ($BRANCH). No push was done."
  echo "To push and open the PR run without --dry-run"
  exit 0
fi

echo "Pushing branch $BRANCH"
git push -u origin "$BRANCH"

PR_BODY=""
if [[ -n "$BODY_FILE" && -f "$BODY_FILE" ]]; then
  PR_BODY=$(cat "$BODY_FILE")
fi

CMD=(gh pr create --base "$BASE" --head "$BRANCH" --title "$TITLE")
if [[ -n "$PR_BODY" ]]; then
  CMD+=(--body "$PR_BODY")
fi

if [[ -n "$ASSIGNEE" ]]; then
  CMD+=(--assignee "$ASSIGNEE")
fi

echo "Creating PR: ${CMD[*]}"
"${CMD[@]}"

echo "PR created. Returning to initial branch $CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"
