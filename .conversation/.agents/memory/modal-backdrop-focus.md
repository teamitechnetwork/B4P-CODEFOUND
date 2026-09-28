---
name: Modal backdrop focus
description: Why modal backdrops must not compete with the dialog's accessible close control.
---

Keep click-to-dismiss modal backdrops outside the keyboard and accessibility tree when the dialog already provides an accessible close button. Trap focus among controls inside the dialog and make background regions inert while it is open.

**Why:** A focusable backdrop with the same accessible name as the internal close button made reverse Tab traversal ambiguous and allowed focus to escape to the document body, even though forward wrapping and Escape restoration worked.

**How to apply:** For full-screen dialogs, give the internal control the close label, set the backdrop to `tabIndex={-1}` and `aria-hidden="true"`, and test both Tab directions at the first and last real dialog controls.