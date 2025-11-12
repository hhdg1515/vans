/*
 * Hero Carousel Slides Data
 * 5 Ultra-Luxury Vehicle Showcases
 */

export const heroSlides = [
  {
    id: 1,
    video: '/videos/hero/mercedes-s-class.mp4', // Video background
    image: '/images/hero/sclass-hero.jpg', // Fallback poster image
    title: 'S-Class',
    subtitle: 'Ultra-luxury service for the world\'s finest sedan',
    ctaText: 'Book Service',
    ctaLink: '/luxury/contact',
    overlay: 'forest',
    gradient: 'var(--gradient-forest)',
    overlayColor: 'var(--overlay-forest)',
  },
  {
    id: 2,
    image: '/images/hero/amg-hero.jpg',
    title: 'AMG GT',
    subtitle: 'Precision engineering meets meticulous care',
    ctaText: 'Book Service',
    ctaLink: '/luxury/contact',
    overlay: 'track',
    gradient: 'var(--gradient-track)',
    overlayColor: 'var(--overlay-track)',
  },
  {
    id: 3,
    image: '/images/hero/rolls-hero.jpg',
    title: 'Phantom',
    subtitle: 'White-glove care for automotive royalty',
    ctaText: 'Book Service',
    ctaLink: '/luxury/contact',
    overlay: 'mansion',
    gradient: 'var(--gradient-mansion)',
    overlayColor: 'var(--overlay-mansion)',
  },
  {
    id: 4,
    image: '/images/hero/porsche-hero.jpg',
    title: '911',
    subtitle: 'Engineering perfection for Stuttgart legends',
    ctaText: 'Book Service',
    ctaLink: '/luxury/contact',
    overlay: 'canyon',
    gradient: 'var(--gradient-canyon)',
    overlayColor: 'var(--overlay-canyon)',
  },
  {
    id: 5,
    video: '/videos/hero/defender.mp4', // Video background
    image: '/images/hero/defender-hero.jpg', // Fallback poster image
    title: 'Defender',
    subtitle: 'Rugged luxury for the modern adventurer',
    ctaText: 'Book Service',
    ctaLink: '/luxury/contact',
    overlay: 'canyon',
    gradient: 'var(--gradient-canyon)',
    overlayColor: 'var(--overlay-canyon)',
  },
];

// Carousel settings
export const carouselSettings = {
  autoPlayInterval: 5000, // 5 seconds
  transitionDuration: 700, // 700ms fade
  pauseOnHover: true,
  showArrows: false, // Removed arrows per user request
  showIndicators: true,
  loop: true,
};
