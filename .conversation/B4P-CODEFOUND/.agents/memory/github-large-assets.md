---
name: Large GitHub assets
description: Use Git pushes rather than REST blob creation for large binary files.
---

For large binary assets, use a normal Git push instead of GitHub's REST Git Blob endpoint. The REST API rejected a 52.5 MB PDF as too large to process.

**Why:** The API upload limit prevents a large report from being committed through the GitHub App connector, while a Git push can preserve the file in the repository.

**How to apply:** For large report files, commit the asset with the code and push through Git. If GitHub rejects the push with an authentication error, check the source-control OAuth status and reconnect before trying again.
