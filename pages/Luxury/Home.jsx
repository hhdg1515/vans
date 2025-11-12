import React from 'react';
import HeroCarousel from '../../components/luxury/hero/HeroCarousel';
import BrandGrid from '../../components/luxury/brands/BrandGrid';
import InteractiveServiceGrid from '../../components/luxury/services/InteractiveServiceGrid';
import GalleryCarousel from '../../components/luxury/gallery/GalleryCarousel';
import BookingSection from '../../components/luxury/booking/BookingSection';
import FAQ from '../../components/luxury/faq/FAQ';

export default function LuxuryHome() {
  return (
    <div className="luxury-home">
      {/* Hero Section - Full-screen carousel */}
      <HeroCarousel />

      {/* Brand Grid Section */}
      <BrandGrid />

      {/* Services Section */}
      <InteractiveServiceGrid />

      {/* Gallery Section - Replaced Testimonials */}
      <GalleryCarousel />

      {/* Booking Section - Squarespace Scheduling Integration Point */}
      <BookingSection />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
