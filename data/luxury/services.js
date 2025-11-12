/*
 * Luxury services data:
 * Structure-only configuration shared between homepage grid and detailed services page.
 * Textual content is resolved through locale files using matching translation keys.
 */

// Services shown on homepage grid (5 cards only to maintain layout)
export const coreServices = [
  {
    id: 1,
    slug: 'diagnostics',
    image: '/images/services/diagnostics.jpg', // TODO: Replace with real image
    icon: 'diagnostic',
    size: 'large', // Takes 2 grid spaces
    link: '/services#diagnostics',
    highlight: true,
  },
  {
    id: 2,
    slug: 'engine',
    image: '/images/services/engine.jpg', // TODO: Replace with real image
    icon: 'engine',
    size: 'medium',
    link: '/services#engine',
    highlight: false,
  },
  {
    id: 3,
    slug: 'electrical',
    image: '/images/services/electrical.jpg', // TODO: Replace with real image
    icon: 'electrical',
    size: 'medium',
    link: '/services#electrical',
    highlight: false,
  },
  {
    id: 4,
    slug: 'chassis',
    image: '/images/services/chassis.jpg', // TODO: Replace with real image
    icon: 'chassis',
    size: 'medium',
    link: '/services#chassis',
    highlight: false,
  },
  {
    id: 5,
    slug: 'maintenance',
    image: '/images/services/maintenance.jpg', // TODO: Replace with real image
    icon: 'maintenance',
    size: 'medium',
    link: '/services#maintenance',
    highlight: false,
  },
];

export const serviceDetails = [
  {
    slug: 'diagnostics',
    ctaLink: '/booking?service=diagnostics',
  },
  {
    slug: 'engine',
    ctaLink: '/booking?service=engine',
  },
  {
    slug: 'electrical',
    ctaLink: '/booking?service=electrical',
  },
  {
    slug: 'chassis',
    ctaLink: '/booking?service=chassis',
  },
  {
    slug: 'brake',
    ctaLink: '/booking?service=brake',
  },
  {
    slug: 'maintenance',
    ctaLink: '/booking?service=maintenance',
  },
];

export const conciergePrograms = [
  { id: 'ppi' },
  { id: 'maintenance' },
  { id: 'concierge' },
  { id: 'warranty' },
];
