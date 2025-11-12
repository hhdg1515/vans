import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../src/hooks/useTranslation';
import styles from './HeroCarousel.module.css';

export default function HeroSlide({ slide, isActive, isPrev, isNext }) {
  const { t } = useTranslation();
  const slideClasses = [
    styles.slide,
    isActive && styles.slideActive,
    isPrev && styles.slidePrev,
    isNext && styles.slideNext,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine if this slide should show video or image
  const hasVideo = slide.video && (isActive || isPrev || isNext);

  return (
    <div
      className={slideClasses}
      style={{
        backgroundImage: !hasVideo ? `url(${slide.image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-hidden={!isActive}
    >
      {/* Video Background (if video exists and should load) */}
      {slide.video && (
        <video
          className={styles.slideVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={slide.image}
          style={{
            opacity: hasVideo ? 1 : 0,
            pointerEvents: 'none',
          }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      )}

      {/* Gradient Overlay */}
      <div
        className={styles.slideOverlay}
        style={{
          background: slide.gradient || slide.overlayColor,
        }}
      />

      {/* Content */}
      <div className={styles.slideContent}>
        <div className={styles.slideContentInner}>
          {/* Eyebrow (optional) */}
          {slide.eyebrow && (
            <span className={styles.slideEyebrow}>{slide.eyebrow}</span>
          )}

          {/* Title */}
          <h1 className={styles.slideTitle}>{slide.title}</h1>

          {/* Subtitle */}
          <p className={styles.slideSubtitle}>{slide.subtitle}</p>

          {/* CTA Button */}
          <div className={styles.slideCta}>
            <Link to={slide.ctaLink} className={styles.slideButton}>
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.slideDecorative}>
        {/* Mercedes Stage Bar (top) */}
        <div className={styles.slideStageTop} />
        {/* Mercedes Stage Bar (bottom) */}
        <div className={styles.slideStageBottom} />
      </div>
    </div>
  );
}
