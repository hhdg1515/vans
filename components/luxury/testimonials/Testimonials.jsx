import React from 'react';
import { testimonials, testimonialsCTA } from '../../../data/luxury/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  // Render star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={styles.star}>
          {i < rating ? '★' : '☆'}
        </span>
      ));
  };

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      {/* Section Header */}
      <div className={styles.testimonialsHeader}>
        <span className={styles.testimonialsEyebrow}>Client Testimonials</span>
        <h2 className={styles.testimonialsHeadline}>
          Trusted by Southern California's Luxury Car Owners
        </h2>
        <div className={styles.keyline} />
      </div>

      {/* Testimonials Grid */}
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={styles.testimonialCard}>
            {/* Rating Stars */}
            <div className={styles.testimonialRating}>
              {renderStars(testimonial.rating)}
            </div>

            {/* Quote */}
            <blockquote className={styles.testimonialQuote}>
              "{testimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className={styles.testimonialAuthor}>
              {/* Avatar */}
              <div className={styles.testimonialAvatar}>
                {testimonial.avatar ? (
                  <img src={testimonial.avatar} alt={testimonial.name} />
                ) : (
                  <span className={styles.testimonialInitials}>
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                )}
              </div>

              {/* Name & Details */}
              <div className={styles.testimonialDetails}>
                <div className={styles.testimonialName}>{testimonial.name}</div>
                <div className={styles.testimonialVehicle}>{testimonial.vehicle}</div>
                <div className={styles.testimonialLocation}>{testimonial.location}</div>
              </div>

              {/* Verified Badge */}
              {testimonial.verified && (
                <div className={styles.testimonialVerified}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Verified Customer</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <div className={styles.testimonialsCta}>
        <h3 className={styles.testimonialsCtaHeadline}>{testimonialsCTA.headline}</h3>
        <p className={styles.testimonialsCtaSubheadline}>{testimonialsCTA.subheadline}</p>
        <div className={styles.testimonialsCtaButtons}>
          <a href={testimonialsCTA.ctaLink} className="btn btn-primary">
            {testimonialsCTA.ctaText}
          </a>
          <a href={testimonialsCTA.ctaSecondaryLink} className="btn btn-secondary">
            {testimonialsCTA.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
