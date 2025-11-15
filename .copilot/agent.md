## This file shall create Copilot agents to help with repository contributions.
This purpose of this Markdown file is to guide Copilot for creating the various commit agents as listed below. These agents will help me contribute to open source repositories by creating issues, pull requests, and code changes as needed.

These are all powered by Copilot.

# Contributor Agents for Copilot

## `Contributor-Chat` Agent

This agent is designed to be used in Copilot Chat. It will help you create issues, PRs, and code changes as needed.

## `Contributor-Auto` Agent

This agent will automatically create branches and PRs in the repository directly. It will also look for code changes as documentation is made, create commit branches and PRs as needed.


Which integration do you prefer?
> see answers below

A GitHub Action (server-side) that runs on-demand or on a schedule and creates issues/PRs automatically (requires a GitHub token as a repo secret).
> not this option.


A local developer workflow using the Copilot CLI or gh (you run it locally to generate content and then it opens issues/PRs). - 
> YES.

> One option: When I let Copilot know I am ready to add issues and PRs, I will put this into Copilot Chat. These instructions should intelligently commit files and open PRs for me. It should additionally suggest an assignee (a reviewer or service account) for the PR so I can review the changes before merging.

> There should be documentation.

> Create a `Contributor-Chat`. Make that agent file so I can switch to it in Copilot Chat. 

> With the contributor agent, I can verbosely tell Copilot to create issues, PRs, and code changes as needed - right from Copilot Chat.


Have me use an automated coding agent to create the branch + PR in the repo directly (I can do this if you want me to create the PR here). 
> YES.

> For this option, I'd like my code to be thought of as an auditor. Look for tests and create test badges, if the PR or branch passes given tests the project contains. 

> I'd like to do this also. Look for code changes as documentation is made, create commit branches and PRs as needed.

> This agent will be called `Contributor-Auto` Agent.


Do you want automatic branch creation and code changes in PRs, or only generated text (issue/PR bodies) that a human will review?

> Automate code changes in PRs, issues as needed. Suggest an assignee (reviewer or service account) when appropriate.
> Do not automatically merge PRs. I will review and merge.


Do you already have a GitHub token or service account that I should expect to use? If yes, which scopes (repo, workflow)?
> Yes. repo, workflow

Preferred trigger: manual (workflow_dispatch), scheduled, or triggered by commits?
> Trigger by commits.

Anything else I should know?
> I believe Composer is necessary for this to work.
> Yes, please ensure Composer is set up correctly.

## Documentation
You can ask Copilot to create a pull request from many places, including GitHub Issues, the agents panel, Copilot Chat, the GitHub CLI, and agentic coding tools and IDEs with Model Context Protocol (MCP) support.
https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr

[Assigning issues to Copilot with Git](https://cli.github.com/manual/gh_issue_edit)