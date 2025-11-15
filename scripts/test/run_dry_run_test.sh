#!/usr/bin/env bash
set -euo pipefail

# Smoke test: run copilot-agent-create-pr.sh in a temporary git repo with --dry-run

SCRIPT_PATH="$(dirname "$0")/../copilot-agent-create-pr.sh"
if [[ ! -f "$SCRIPT_PATH" ]]; then
  echo "Helper script not found at $SCRIPT_PATH" >&2
  exit 2
fi

TMPDIR=$(mktemp -d)
cleanup() { rm -rf "$TMPDIR"; }
trap cleanup EXIT

cd "$TMPDIR"
git init -q
cp "$SCRIPT_PATH" ./copilot-agent-create-pr.sh
chmod +x copilot-agent-create-pr.sh

echo "initial" > README.md
git add README.md
git commit -m "init" -q

echo "dummy change" > changes.patch

set +e
./copilot-agent-create-pr.sh --branch test/copilot-dry --title "test: dry run" --patch changes.patch --body-file /dev/null --dry-run 2>&1 | tee /tmp/copilot-dry-output.txt
RC=$?
set -e

if grep -q "DRY RUN" /tmp/copilot-dry-output.txt; then
  echo "DRY RUN detected — test passed"
  exit 0
else
  echo "DRY RUN not detected — test failed" >&2
  tail -n +1 /tmp/copilot-dry-output.txt >&2
  exit ${RC:-1}
fi
