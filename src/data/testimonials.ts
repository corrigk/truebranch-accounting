/* =====================================================================
   TESTIMONIALS

   Each entry needs a quote and a business type. Add a name, or set
   showName: false to keep the client anonymous.

   The entries marked `placeholder: true` are NOT real. They only show
   while draft markers are on (see site.config.ts). When there are no
   real testimonials, the whole section is hidden automatically.

   Only add a testimonial after the client has given permission.
   ===================================================================== */

export type Testimonial = {
  quote: string;
  name?: string;
  businessType: string;
  showName?: boolean;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: '[PLACEHOLDER: a real client quote goes here, in their own words.]',
    name: '[Client name]',
    businessType: '[Business type]',
    showName: true,
    placeholder: true,
  },
  {
    quote: '[PLACEHOLDER: a second real quote. This one hides the client’s name.]',
    businessType: '[Business type]',
    showName: false,
    placeholder: true,
  },
];
