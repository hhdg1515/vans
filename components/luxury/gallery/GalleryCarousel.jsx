import React, { useState } from 'react';
import { useTranslation } from '../../../src/hooks/useTranslation';
import { galleryVehicles, gallerySettings } from '../../../data/luxury/gallery';
import styles from './GalleryCarousel.module.css';

export default function GalleryCarousel() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = gallerySettings.totalPages;
  const itemsPerPage = gallerySettings.itemsPerPage;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const currentItems = galleryVehicles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className={styles.gallerySection} id="gallery">
      {/* Section Header */}
      <div className={styles.galleryHeader}>
        <span className={styles.galleryEyebrow}>{t('gallery.eyebrow')}</span>
        <h2 className={styles.galleryHeadline}>{t('gallery.headline')}</h2>
        <p className={styles.gallerySubheadline}>
          {t('gallery.subheadline')}
        </p>
      </div>

      <div className={styles.keyline} />

      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {currentItems.map((vehicle) => (
          <div key={vehicle.id} className={styles.galleryCard}>
            <div
              className={styles.galleryImage}
              style={{ backgroundImage: `url(${vehicle.image})` }}
            />
            <div className={styles.galleryOverlay}>
              <span className={styles.galleryModel}>{vehicle.model}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className={styles.galleryNav}>
        {/* Arrows */}
        <button className={styles.galleryArrow} onClick={prevPage} aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Indicators */}
        <div className={styles.galleryIndicators}>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`${styles.galleryIndicator} ${index === currentPage ? styles.galleryIndicatorActive : ''}`}
              onClick={() => goToPage(index)}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>

        <button className={styles.galleryArrow} onClick={nextPage} aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
