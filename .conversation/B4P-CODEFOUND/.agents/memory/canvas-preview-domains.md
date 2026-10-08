---
name: Canvas preview domains
description: How to recover the live mockup sandbox URL when managed env lookup is unavailable.
---

The live mockup sandbox can still be addressed through the workspace's development domain when the managed environment-variable helper refuses a runtime lookup. Use the current shell environment only to recover the domain for preview URLs; never persist the domain as a secret or hard-code it in application code.

**Why:** Canvas iframe placeholders need a routable preview URL, but the helper may reject platform-managed environment variables even though the running workflow exposes them.

**How to apply:** Read the sandbox artifact preview path, recover the current development domain from the workflow environment when needed, and use that domain only for canvas iframe updates.