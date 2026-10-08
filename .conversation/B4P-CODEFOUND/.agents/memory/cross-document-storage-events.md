---
name: Cross-document storage events
description: Reliable test and handling patterns for account-free browser storage synchronization.
---

Cross-document synchronization tests should model the writer's document separately and deliver its serialized value through `StorageEvent.newValue`; malformed payloads should leave the receiving state unchanged.

**Why:** Test environments do not always reproduce the browser's shared-storage event delivery, and rereading the receiver's storage can hide whether the event payload was actually applied.

**How to apply:** Keep the receiving document's state independent in the test, dispatch save and removal events from a second document context, and assert unrelated keys and invalid JSON do not change the rendered list.