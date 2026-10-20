# TrueBranch Accounting website

A small static site built with [Astro](https://astro.build). It builds to plain HTML/CSS in `dist/`. There is no database or backend.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where to change things

| What | Where |
| --- | --- |
| Email, phone, city, response time, form key, social links, draft mode | `src/site.config.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Colors, fonts, spacing, shadows | top of `src/styles/global.css` |
| Logos (wordmark, emblem, branch) | `src/assets/brand/*.svg`, used through `src/components/Brand.astro` |
| Original brand files (Web RGB PNGs, Branch.svg) | `public/assets/brand/` |
| Favicon, phone icons, link-preview image | `public/`, regenerated from the brand SVGs with `node scripts/make-images.mjs` |
| Hero "month at a glance" sample card | `src/components/Snapshot.astro` |
| "Shoebox to sorted" demo (example transactions) | `src/components/ShoeboxSort.astro` |
| "Does this sound like you?" self-check | `src/components/SelfCheck.astro` |
| Photos of Franccesca | put files in `public/assets/photos/`, then set `src`/`alt` in `src/pages/about/index.astro` and `src/pages/index.astro` |
| Page wording | `src/pages/*.astro` (each section is labelled with a comment) |

Search the project for `PLACEHOLDER` and `TBD` to find everything that still needs real content.

Draft mode is off. To review copy with Franccesca, set `showDraftMarkers: true` in `src/site.config.ts`: it adds a banner, dashed outlines around draft copy, and sample testimonials.

The quote form links can pre-fill answers, e.g. `get-a-quote/?stress=taxes,mixing&tax=yes`. The self-check and the scenario cards use this.

All motion respects the visitor's reduced-motion setting, and every interactive piece still works without JavaScript.

## Deploying (GitHub Pages)

Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

- Preview address: https://corrigk.github.io/truebranch-accounting/
- With a custom domain: set `SITE_URL` to the domain and delete `BASE_PATH` in the workflow file, then add the domain under Settings → Pages.
- `SITE_URL` turns on canonical URLs, the link-preview image, and `sitemap-index.xml`.
- Fonts are self-hosted from npm packages, so there are no Google Fonts requests.
- At launch, set `previewMode: false` in `src/site.config.ts` so search engines can list the site.
