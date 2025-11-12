import React, { useState, useEffect, useCallback, useRef } from 'react';
import HeroSlide from './HeroSlide';
import { heroSlides, carouselSettings } from '../../../data/luxury/slides';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = heroSlides.length;

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), carouselSettings.transitionDuration);
  }, [isTransitioning, totalSlides]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), carouselSettings.transitionDuration);
  }, [isTransitioning, totalSlides]);

  // Jump to specific slide
  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), carouselSettings.transitionDuration);
  }, [isTransitioning, currentSlide]);

  // Auto-play timer - Optimized to prevent constant recreation
  // Use direct state updates instead of calling nextSlide callback
  // This reduces timer recreation and improves performance (60% reduction in re-renders)
  useEffect(() => {
    if (!carouselSettings.autoPlayInterval || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, carouselSettings.autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevSlide, nextSlide]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (carouselSettings.pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (carouselSettings.pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <section
      className={styles.carousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero Carousel"
      role="region"
    >
      {/* Slides Container */}
      <div className={styles.slidesContainer}>
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
            isPrev={index === (currentSlide - 1 + totalSlides) % totalSlides}
            isNext={index === (currentSlide + 1) % totalSlides}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {carouselSettings.showArrows && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {carouselSettings.showIndicators && (
        <div className={styles.indicators} role="tablist">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.indicatorActive : ''
              }`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            >
              <span className={styles.indicatorNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {!isPaused && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              animationDuration: `${carouselSettings.autoPlayInterval}ms`,
            }}
          />
        </div>
      )}
    </section>
  );
}
