# Contributor-Chat Agent

Purpose
-------
This agent is designed to be used inside Copilot Chat. It helps prepare issues, PRs, and code changes interactively so you (the repo maintainer) can review and open them. It will not push or create PRs unless you explicitly ask the local helper to do so.

How to use
----------
- Open Copilot Chat and switch to this agent (`Contributor-Chat`).
- Use prompts like: "Create an issue describing missing documentation for the sitebuilder and propose a small code change to add README examples." or
  "Create a feature PR that adds a CLI helper to open GH issues; include tests and a README update." 
- The agent will produce:
  - A branch name suggestion
  - A patch (git diff or file contents)
  - A PR title and body template
  - Suggested tests and checklist

Outputs / Contract
------------------
- Inputs: natural-language intent / prompt, optional file paths, optional test instructions
- Outputs: suggested branch name, patch content (unapplied), PR title/body, labels, assignees
- Error modes: missing context (agent will ask clarifying questions), ambiguous file paths

Recommended follow-up (manual steps)
-----------------------------------
1. Review the proposed patch in the chat.
2. Save the patch to a file or ask the local helper script to apply and create a PR (see `.copilot/README.md`).
3. Review the created PR and merge when ready.

Notes
-----
- This agent will not automatically push or create PRs without your explicit instruction to run the local helper script. Use `Contributor-Auto` for more automatic behavior.
