/* =====================================================================
   SITE SETTINGS — edit this file to change business details site-wide.

   Anything marked PLACEHOLDER or TBD is not final. Replace the value
   between the quotes and save; every page updates automatically.
   Leave a value as '' (empty quotes) to hide it from the site.
   ===================================================================== */

export const site = {
  name: 'TrueBranch Accounting',
  legalName: 'TrueBranch Accounting LLC',
  owner: 'Franccesca Thomas',
  ownerFirstName: 'Franccesca',

  // PLACEHOLDER: business email. Shown on the site as the contact address.
  email: 'hello@yourdomain.com',

  // TBD: phone number, e.g. '(555) 555-0100'. Leave '' to hide.
  phone: '',

  // TBD: city / service area, e.g. 'Austin'. Leave '' until known.
  // When set, the site says "Serving <city> and the surrounding area..."
  // and adds LocalBusiness structured data for search engines.
  city: '',
  region: '', // TBD: state, e.g. 'TX' (used in structured data only)

  // TBD: response-time promise shown next to the quote form.
  responseTime: '1 to 2 business days',

  // PLACEHOLDER: quote form service (Web3Forms, free).
  // 1. Go to https://web3forms.com and enter the email that should receive
  //    quote requests (Kyle's or Franccesca's personal email for now).
  // 2. Paste the access key they email you below.
  // To switch to the business email later, create a new key for that address.
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'PLACEHOLDER_WEB3FORMS_ACCESS_KEY',

  // TBD: social links. Leave the list empty to hide them.
  // Example: { label: 'Instagram', href: 'https://instagram.com/...' }
  socials: [] as { label: string; href: string }[],

  // PREVIEW MODE: true asks search engines not to list the site (a "noindex"
  // tag plus a robots.txt that blocks crawling). Keep it true while the site
  // is a work in progress. Set to false when you launch.
  previewMode: true,

  // DRAFT MODE: true shows a banner, dashed outlines around draft copy,
  // and the sample testimonials. Turn on when reviewing copy with Franccesca.
  showDraftMarkers: false,
};

/** "Serving [city] and the surrounding area, and working with clients remotely." */
export function serviceArea(): string {
  return site.city
    ? `Serving ${site.city} and the surrounding area, and working with clients remotely.`
    : 'Serving [PLACEHOLDER: city] and the surrounding area, and working with clients remotely.';
}

/** Main navigation, in order. */
export const nav = [
  { label: 'Home', href: '' },
  { label: 'Services', href: 'services/' },
  { label: 'Why bookkeeping', href: 'why-bookkeeping/' },
  { label: 'About', href: 'about/' },
];

export const quoteHref = 'get-a-quote/';

/** Builds a link that works on Netlify and on GitHub Pages sub-paths. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
