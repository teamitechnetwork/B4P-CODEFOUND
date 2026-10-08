---
name: GitHub CLI write authentication
description: Shell Git push authentication may differ from the connected GitHub App.
---

In this workspace, fetching from the project's HTTPS GitHub remote succeeded, but a later `git push` was rejected with “Invalid username or token.” Having the GitHub App installed or reconnected did not authorize the shell write.

**Why:** Shell Git authentication and the workspace GitHub App connection may use different credentials, so successful read access does not prove push access.

**How to apply:** For a future explicitly authorized push, check the current integration-backed write path and verify local and remote refs before reporting completion. Never request or expose credentials.
