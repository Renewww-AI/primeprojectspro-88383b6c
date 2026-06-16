# Deployment Guide (Hostinger)

This is a Vite + React SPA. Hostinger must serve the **compiled build output**, not the source project.

## 1. Push to GitHub

Commit and push the project to your GitHub repository as-is. Do **not** commit the `dist/` folder.

## 2. Build settings on Hostinger

If using Hostinger's Git/auto-deploy integration, configure:

- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Publish / output directory:** `dist`

That's it — Hostinger will run the build and serve `dist/` at the domain root.

## 3. Manual upload (alternative)

If you build locally and upload via FTP/File Manager:

1. Run `npm install` then `npm run build` locally.
2. Upload **only the contents of `dist/`** (not the project root) into `public_html/` on Hostinger.
3. Make sure `.htaccess` (generated into `dist/` from `public/.htaccess`) is uploaded — it enables SPA routing on Apache.

## 4. Verifying the deployment

Open the live site and view source on `index.html`. You should see something like:

```html
<script type="module" crossorigin src="/assets/index-XXXXXX.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-XXXXXX.css">
```

You should **never** see `/src/main.tsx` in the live HTML. If you do, Hostinger is serving the raw source — re-check that the publish directory is `dist/` (or that you only uploaded the contents of `dist/`).

## 5. SPA routing / refresh on deep routes

- `public/.htaccess` rewrites all non-file requests to `/index.html` so React Router can handle routes like `/services/kitchen-remodeling` and `/blog` on refresh.
- `scripts/prepare-spa-fallback.mjs` runs automatically after `vite build` (via the `postbuild` script) and copies `dist/index.html` → `dist/404.html` as an extra fallback.

## 6. Vite base path

The site is served from the domain root, so `vite.config.ts` keeps `base: "/"` by default. Do **not** set `VITE_BASE_PATH` or `GITHUB_PAGES` when deploying to Hostinger.
