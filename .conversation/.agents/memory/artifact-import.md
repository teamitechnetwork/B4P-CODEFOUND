---
name: Importing existing Replit artifacts
description: Existing web artifacts need registration and dependency reconciliation when brought into a generated workspace.
---

When importing an existing Replit monorepo into a generated workspace, register any pre-existing web artifact through the artifact lifecycle before relying on its preview workflow, then reinstall from the workspace lockfile after restoring the source package.

**Why:** Artifact bootstrapping can create fresh dependency links from the scaffold manifest, so copying an existing package back over it may leave newly restored development dependencies unresolved even when the source repository builds elsewhere.

**How to apply:** Preserve the imported source separately while registering the artifact, restore the source, run a workspace-aware lockfile reconciliation if needed, then restart and verify the managed workflow.