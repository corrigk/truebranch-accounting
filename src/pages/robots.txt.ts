import type { APIRoute } from 'astro';
import { site as config } from '../site.config';

// While previewMode is on (see site.config.ts), ask crawlers to stay away.
// After launch, allow everything and point them at the sitemap (needs SITE_URL).
export const GET: APIRoute = ({ site }) => {
  const headers = { 'Content-Type': 'text/plain' };
  if (config.previewMode) {
    return new Response('User-agent: *\nDisallow: /\n', { headers });
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const lines = ['User-agent: *', 'Allow: /'];
  if (site) lines.push('', `Sitemap: ${new URL(`${base}/sitemap-index.xml`, site).href}`);
  return new Response(lines.join('\n') + '\n', { headers });
};
