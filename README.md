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
| Bookkeeping packages, prices, add-ons | `src/data/packages.ts` |
| Color themes | `src/styles/themes.css` (pick the default with `theme` in `src/site.config.ts`) |
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

### Edit labels (review tool)

While `showEditToggle: true` in `src/site.config.ts`, every page has an **Edit labels** button (bottom-left). It outlines each title, text, picture and button and tags it with a code, so feedback can point at exact spots:

- Code format: page letter + section number, then kind + number. `H3-T1` = Home, section 3, Title 1.
- Pages: **H** Home, **S** Services, **W** Why bookkeeping, **A** About, **Q** Get a quote, **Y** thank-you page, **E** not-found page. **N** = top menu, **F** = footer (same on every page).
- Kinds: **T** title, **W** words, **P** picture, **B** button or link.
- Tap a tag to copy its code. Add `?edit=1` to any address to open with labels already on, e.g. https://corrigk.github.io/truebranch-accounting/?edit=1
- Codes count in page order, so they shift when content changes. Use fresh codes after each update.
- Set `showEditToggle: false` before launch.

Draft mode is off. To review copy with Franccesca, set `showDraftMarkers: true` in `src/site.config.ts`: it adds a banner, dashed outlines around draft copy, and sample testimonials.

The quote form links can pre-fill answers, e.g. `get-a-quote/?stress=taxes,mixing&tax=yes`. The self-check and the scenario cards use this.

All motion respects the visitor's reduced-motion setting, and every interactive piece still works without JavaScript.

### Color themes (review tool)

While `showThemePicker: true`, a bar at the top of every page switches between four themes built from the brand palette: **Minimal** (classic), **Olive Grove**, **Dusty Blue** and **Bold & Earthy**. Links can open in a theme with `?theme=bold` (or `classic`, `olive`, `dusty`). Once Franccesca picks one, set `theme` in `src/site.config.ts` and `showThemePicker: false`. Themes live in `src/styles/themes.css`.

## Future ideas (not started)

Saved from Franccesca's notes, to do after the look and content are settled:

- **Booking / scheduling**: let people book a call from the site (e.g. an embedded Calendly or similar).
- **Client login portal**: clients sign in securely and send documents (e.g. via Dropbox or another file service). Needs a backend/database and likely a paid service; she's open to paying for it.
- **Package prices**: fill in `price` for each package and add-on in `src/data/packages.ts`.

## Deploying (GitHub Pages)

Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

- Preview address: https://corrigk.github.io/truebranch-accounting/
- With a custom domain: set `SITE_URL` to the domain and delete `BASE_PATH` in the workflow file, then add the domain under Settings → Pages.
- `SITE_URL` turns on canonical URLs, the link-preview image, and `sitemap-index.xml`.
- Fonts are self-hosted from npm packages, so there are no Google Fonts requests.
- At launch, set `previewMode: false` in `src/site.config.ts` so search engines can list the site.
