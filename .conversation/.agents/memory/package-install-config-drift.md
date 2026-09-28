---
name: Package install config drift
description: Workspace package installs may change unrelated Replit configuration.
---

Package installation can append an unrelated Nix channel entry to `.replit`; inspect the working tree after installs and remove only that generated drift through the validated config flow.

**Why:** A dependency install changed project configuration even though the task only needed artifact dependencies.

**How to apply:** After any package install, check `.replit` and keep only intentional configuration changes.