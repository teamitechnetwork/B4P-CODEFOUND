# B4P CODEFOUND

B4P CODEFOUND is a modern website for Business for Peace Community Development Foundation, an African-led nonprofit and social enterprise focused on peacebuilding, community development, women’s empowerment, and collective action.

The public website lives in `artifacts/b4p-codefound`. The repository is a pnpm monorepo so the existing Replit API and supporting packages remain available without being part of the static Vercel deployment.

## Start locally

Use Node.js 20 or newer and pnpm 10:

```bash
pnpm install --frozen-lockfile
pnpm --filter @workspace/b4p-codefound run dev
```

The Vite site defaults to port `5173` and `/` when run outside Replit. Replit still supplies its own `PORT` and `BASE_PATH` values automatically.

## Verify a production build

Run the checks that match the public website:

```bash
pnpm --filter @workspace/b4p-codefound run typecheck
pnpm run build:web
```

The static output is generated at `artifacts/b4p-codefound/dist/public`. Build output, dependencies, environment files, and Vercel’s local metadata are ignored by Git.

## Push to Git

From the repository root:

```bash
git init
git add .
git commit -m "Prepare B4P CODEFOUND website"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with the GitHub, GitLab, or Bitbucket repository you created. Do not commit `.env` files, credentials, or generated `dist` output.

## Deploy on Vercel

1. Import the Git repository into Vercel.
2. Keep the **Root Directory** set to the repository root.
3. Leave the framework as **Vite**. The checked-in `vercel.json` supplies the install command, build command, output directory, and SPA fallback.
4. Deploy without environment variables for the static B4P website.

Vercel runs `pnpm install --frozen-lockfile`, then `pnpm run build:web`, and serves `artifacts/b4p-codefound/dist/public`. The SPA rewrite makes direct visits and refreshes work for routes such as `/programs/liberia` and `/become-a-volunteer`.

## Repository commands

```bash
pnpm run typecheck       # typecheck shared libraries and workspace packages
pnpm run build:web       # build only the B4P CODEFOUND website
pnpm run build           # typecheck and build the full monorepo
```

The existing Replit workflows and API server configuration are intentionally unchanged.