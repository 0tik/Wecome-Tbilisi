# WELCOME TBILISI

Bilingual (KA/EN) one-page site for the WELCOME TBILISI international event —
23-24-25 October 2026, Tbilisi City Assembly building.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

All texts live in `src/content.ts` (Georgian + English). Images and fonts are in `public/`.

## Deploy

The build output in `dist/` is fully static and uses relative paths, so it works
from any host and any subfolder — GitHub Pages, Netlify, Vercel, or plain hosting.

**GitHub Pages:** push this repo to GitHub, then in the repo go to
*Settings → Pages → Source: GitHub Actions*. The included workflow
(`.github/workflows/deploy.yml`) builds and publishes automatically on every push.

**Any other host:** upload the contents of `dist/` after running `npm run build`.
