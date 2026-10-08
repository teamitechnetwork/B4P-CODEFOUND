---
name: Vite stale module checks
description: Browser checks can retain deleted module requests until the web workflow is restarted.
---

After removing or relocating a Vite component, restart the web workflow before browser verification; otherwise a tester may report a stale 404 for the old module even when a clean load is healthy.

**Why:** Hot reload and persistent browser sessions can preserve imports from the previous module graph, producing misleading resource-load failures.

**How to apply:** Restart the affected workflow after file deletion or route relocation, then run the browser check in a fresh page or tester context.