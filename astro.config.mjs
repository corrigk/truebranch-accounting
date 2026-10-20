// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hosting:
// - Netlify (or a custom domain): leave BASE_PATH unset.
// - GitHub Pages project site (username.github.io/repo-name): set BASE_PATH=/repo-name
// Once the domain is registered, set SITE_URL (e.g. https://truebranchaccounting.com)
// so canonical URLs, link-preview images and the sitemap are generated.
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  base: process.env.BASE_PATH || '/',
  build: { format: 'directory' },
  integrations: site
    ? [sitemap({ filter: (page) => !page.includes('/thanks/') && !page.includes('/404') })]
    : [],
});
