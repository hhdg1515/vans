/*
 * Customer Testimonials Data
 * 3 Featured Reviews from Luxury Vehicle Owners
 */

export const testimonials = [
  {
    id: 1,
    name: 'David Richardson',
    vehicle: '2022 Mercedes-Maybach S680',
    location: 'Beverly Hills, CA',
    rating: 5,
    date: '2025-09-15',
    quote: 'As a Maybach owner, I demand perfection. This shop delivers factory-level service with genuine care for ultra-luxury vehicles. Their Mercedes master technician knows these cars better than most dealerships.',
    avatar: '/images/testimonials/avatar-1.jpg', // TODO: Replace or use initials
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    vehicle: '2023 Porsche 911 GT3',
    location: 'Newport Beach, CA',
    rating: 5,
    date: '2025-08-22',
    quote: 'Finally found a shop that understands high-performance European cars. They diagnosed an intermittent issue that three other shops missed. The PIWIS diagnostics system they use is the real deal.',
    avatar: '/images/testimonials/avatar-2.jpg', // TODO: Replace or use initials
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Michael Torres',
    vehicle: '2021 Rolls-Royce Ghost',
    location: 'Malibu, CA',
    rating: 5,
    date: '2025-07-10',
    quote: 'White-glove service that matches my vehicle\'s luxury pedigree. From the transparent pricing to the meticulous attention to detail, they treat every car like it\'s the only one that matters. Highly recommend for Rolls-Royce owners.',
    avatar: '/images/testimonials/avatar-3.jpg', // TODO: Replace or use initials
    verified: true,
    featured: true,
  },
];

// Additional testimonials (for Testimonials page or carousel)
export const additionalTestimonials = [
  {
    id: 4,
    name: 'James Patterson',
    vehicle: '2023 Bentley Continental GT',
    location: 'Laguna Beach, CA',
    rating: 5,
    date: '2025-06-18',
    quote: 'Expert service for my Continental GT. They understand the W12 engine inside and out. Fair pricing compared to the dealership, and much faster turnaround.',
    verified: true,
  },
  {
    id: 5,
    name: 'Lisa Nguyen',
    vehicle: '2022 Mercedes-AMG GT R',
    location: 'Santa Monica, CA',
    rating: 5,
    date: '2025-05-25',
    quote: 'These guys are AMG specialists. Did a full ECU tune and suspension setup for my GT R. The car drives like a completely different beast now. Track-ready!',
    verified: true,
  },
  {
    id: 6,
    name: 'Robert Kim',
    vehicle: '2021 Lamborghini Urus',
    location: 'Manhattan Beach, CA',
    rating: 5,
    date: '2025-04-12',
    quote: 'Dealer wanted $8,000 for a service. They did it for $4,200 with the same OEM parts and better attention to detail. Plus, they actually explained what they were doing.',
    verified: true,
  },
];

// Testimonial display settings
export const testimonialSettings = {
  showRating: true,
  showVehicle: true,
  showLocation: true,
  showDate: false, // Hide on homepage, show on testimonials page
  showVerifiedBadge: true,
  maxQuoteLength: 280, // Truncate longer quotes
  layout: 'cards', // 'cards' or 'slider'
};

// Star rating component helper
export const renderStars = (rating) => {
  return Array(5).fill(0).map((_, i) => i < rating ? '★' : '☆');
};

// Verification badge text
export const verifiedBadgeText = 'Verified Customer';

// CTA after testimonials
export const testimonialsCTA = {
  headline: 'Join Our Family of Satisfied Clients',
  subheadline: 'Experience the difference that 25+ years of Mercedes-Benz factory expertise makes',
  ctaText: 'Schedule Your Service',
  ctaLink: '/contact',
  ctaSecondary: 'Read More Reviews',
  ctaSecondaryLink: '/testimonials',
};
