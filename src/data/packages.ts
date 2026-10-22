/* =====================================================================
   BOOKKEEPING PACKAGES — from Franccesca's notes.

   price: leave '' to show "Contact for a quote". When prices are set,
   write them as they should appear, e.g. '$250 / month'.
   Edit the lists freely; the Services and Home pages update automatically.
   ===================================================================== */

export type Package = {
  id: 'essentials' | 'growth' | 'premium';
  name: string;
  price: string;
  idealClient: string;
  highlights: string[]; // short version, used on the Home page
  includesFrom?: string; // "Everything in …, plus:"
  included: string[];
};

export const packages: Package[] = [
  {
    id: 'essentials',
    name: 'Bookkeeping Essentials',
    price: '',
    idealClient: 'A freelancer, consultant, or small LLC with one primary financial account and very few monthly transactions.',
    highlights: ['1 account reconciled', 'Up to 50 transactions a month', 'Monthly profit & loss statement'],
    included: [
      'Monthly transaction categorization and recording',
      'Reconciliation of 1 financial account',
      'Up to 50 transactions per month',
      'Monthly profit and loss statement',
      'Monthly balance sheet, when appropriate and supported by properly maintained books',
      'Review of uncategorized transactions and obvious discrepancies',
      'Monthly financial reports delivered through your agreed client portal',
      'Routine email support for bookkeeping questions',
      'Year-end financial reports and a standard bookkeeping close',
    ],
  },
  {
    id: 'growth',
    name: 'Bookkeeping Growth',
    price: '',
    idealClient: 'A small business with multiple financial accounts or a slightly higher transaction volume.',
    highlights: ['Up to 3 accounts reconciled', 'Up to 100 transactions a month', 'Quarterly 20-minute review meeting'],
    includesFrom: 'Everything in Essentials, plus:',
    included: [
      'Reconciliation of up to 3 financial accounts',
      'Up to 100 transactions per month',
      'Review of transfers between accounts to help prevent duplicate income or expenses',
      'A more detailed monthly review of unusual transactions and account balances',
      'A brief written summary of notable financial changes',
      'One 20-minute financial review meeting per quarter',
    ],
  },
  {
    id: 'premium',
    name: 'Bookkeeping Premium',
    price: '',
    idealClient: 'A small, established business that needs several accounts reconciled and more involved monthly review.',
    highlights: ['Up to 4 accounts reconciled', 'Up to 150 transactions a month', 'Monthly 20-minute review meeting'],
    includesFrom: 'Everything in Growth, plus:',
    included: [
      'Reconciliation of up to 4 financial accounts',
      'Up to 150 transactions per month',
      'Monthly written notes highlighting significant income and expense changes',
      'One 20-minute monthly financial review meeting',
      'More detailed follow-up on missing information and bookkeeping discrepancies',
      'Basic month-over-month comparisons when useful and reliable data is available',
    ],
  },
];

// Add-ons. price: '' shows "Ask for pricing".
export const addOns = [
  { name: 'Extra financial account', price: '', note: 'Reconcile another account on top of your package.' },
  { name: 'Historical clean-up', price: '', note: 'Catch up past months so your books start from solid ground.' },
  { name: 'QuickBooks Online set-up or conversion', price: '', note: 'Get set up in QuickBooks Online, or move over from another system.' },
];
