---
name: Planner review test scope
description: Testing guidance for pages that repeat the same observance links in a saved-planner panel and the main directory.
---

When a page renders the same observance in both a review panel and the source directory, accessibility assertions for the saved item should scope queries to the panel’s labeled region.

**Why:** The duplicate links are intentional UI affordances, but global role queries become ambiguous and can mistake the directory copy for the planner copy.

**How to apply:** Give the review region an accessible name and use a scoped query when testing its dates, links, and per-item actions.