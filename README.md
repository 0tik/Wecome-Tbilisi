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

## Custom domain — welcometbilisi.ge

`public/CNAME` contains `welcometbilisi.ge`, so every build/deploy tells GitHub
Pages to serve the site on that domain. DNS records to set at the registrar:

| Type  | Host | Value               |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | `0tik.github.io`    |

Then in the repo: *Settings → Pages → Custom domain* → enter `welcometbilisi.ge`,
wait for the DNS check, and tick **Enforce HTTPS**.
