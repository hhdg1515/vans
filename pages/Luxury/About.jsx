import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../src/hooks/useTranslation';
import styles from './About.module.css';

export default function LuxuryAbout() {
  const { t } = useTranslation();
  const storyParagraphs = t('aboutPage.story.paragraphs') || [];
  const credentials = t('aboutPage.story.credentials') || [];
  const facilityFeatures = [
    {
      key: 'diagnostic',
      imageClass: styles.facilityImageDiagnostic,
      icon: (
        <svg
          className={styles.placeholderIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M5 10.5h2.5l2-3.5 3 6 2-3h4.5" />
          <path d="M9 19h6" />
          <path d="M11 16v3" />
          <path d="M13 16v3" />
        </svg>
      ),
    },
    {
      key: 'lifts',
      imageClass: styles.facilityImageLifts,
      icon: (
        <svg
          className={styles.placeholderIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 16h16" />
          <path d="M6 19h12" />
          <path d="M5 13v3" />
          <path d="M19 13v3" />
          <rect x="5" y="6" width="14" height="6" rx="2" />
          <path d="M9 6l1.5-2h3L15 6" />
        </svg>
      ),
    },
    {
      key: 'tooling',
      imageClass: styles.facilityImageTooling,
      icon: (
        <svg
          className={styles.placeholderIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5l3.5 3.5" />
          <path d="M10.5 12.5L19 21" />
          <path d="M8.5 8.5l2 2" />
          <path d="M21 5a3 3 0 0 1-4.24 0L15 3.24 17.24 1A3 3 0 0 1 21 5Z" />
          <path d="M5 19l4-4" />
        </svg>
      ),
    },
    {
      key: 'climate',
      imageClass: styles.facilityImageClimate,
      icon: (
        <svg
          className={styles.placeholderIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 7V3" />
          <path d="M17 12h4" />
          <path d="M12 21v-4" />
          <path d="M3 12h4" />
          <path d="M15.5 8.5l2.5-2.5" />
          <path d="M8.5 15.5L6 18" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Section 1: Hero - Split Layout (like Services page) */}
      <section className={styles.hero}>
        <div className={styles.heroBody}>
          {/* Left: Image Placeholder (40%) */}
          <div className={styles.heroImagePlaceholder}>
            {/* TODO: Replace with workshop/technician photo */}
          </div>

          {/* Right: Content (60%) */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{t('aboutPage.hero.eyebrow')}</span>
            <h1 className={styles.heroTitle}>
              {t('aboutPage.hero.title')}
            </h1>
            <p className={styles.heroSubtitle}>
              {t('aboutPage.hero.subtitle')}
            </p>

            {/* Mini Gallery - 3 photos */}
            <div className={styles.heroGallery}>
              <div className={styles.heroGalleryItem} style={{ flex: '1.4' }}>
                {/* Gradient placeholder 1 - Workshop */}
              </div>
              <div className={styles.heroGalleryItem} style={{ flex: '1.2' }}>
                {/* Gradient placeholder 2 - STAR system */}
              </div>
              <div className={styles.heroGalleryItem} style={{ flex: '1' }}>
                {/* Gradient placeholder 3 - Tools */}
                <span className={styles.seeAllBadge}>{t('aboutPage.gallery.badge')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Founder Story - 50/50 Split */}
      <section className={styles.founderStory}>
        <div className={styles.storyLayout}>
          {/* Left: Text Content */}
          <div className={styles.storyText}>
            <span className={styles.sectionEyebrow}>{t('aboutPage.story.eyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('aboutPage.story.title')}
            </h2>
            <div className={styles.narrative}>
              {storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Credentials List */}
            <ul className={styles.credentials}>
              {credentials.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className={styles.storyImage}>
            <div className={styles.imagePlaceholder}>
              {/* TODO: Replace with actual workshop/technician photo */}
              <span className={styles.placeholderText}>
                {t('aboutPage.story.image_placeholder').split('\n').map((line, index, arr) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Facility - 4 Column Grid */}
      <section className={styles.facility}>
        <div className={styles.facilityContainer}>
          <div className={styles.facilityHeader}>
            <span className={styles.sectionEyebrow}>{t('aboutPage.facility.eyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('aboutPage.facility.title')}
            </h2>
          </div>

          <div className={styles.facilityFeatures}>
            {facilityFeatures.map((feature, index) => (
              <article key={feature.key} className={styles.facilityFeature}>
                <div className={`${styles.facilityImagePlaceholder} ${feature.imageClass}`}>
                  <span className={styles.facilityBadge}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.facilityIconWrapper}>{feature.icon}</div>
                </div>
                <div className={styles.facilityContent}>
                  <h3 className={styles.facilityFeatureTitle}>
                    {t(`aboutPage.facility.cards.${feature.key}.title`)}
                  </h3>
                  <p className={styles.facilityFeatureDescription}>
                    {t(`aboutPage.facility.cards.${feature.key}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Section 4: CTA - Book Appointment */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {t('aboutPage.cta.title')}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t('aboutPage.cta.subtitle')}
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/booking" className={styles.primaryButton}>
              {t('aboutPage.cta.book')}
            </Link>
            <a href="tel:+1234567890" className={styles.secondaryButton}>
              <svg
                className={styles.phoneIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.1c.7 0 1.3.47 1.5 1.12l.65 2.17a1.5 1.5 0 0 1-.77 1.74l-1.2.6a12.03 12.03 0 0 0 6.51 6.51l.6-1.2a1.5 1.5 0 0 1 1.74-.77l2.17.65c.65.2 1.12.8 1.12 1.5v2.1a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 2 3.5Z" />
              </svg>
              {t('aboutPage.cta.call')}
            </a>
          </div>
          <p className={styles.ctaFootnote}>
            {t('aboutPage.cta.footnote')}
          </p>
        </div>
      </section>
    </div>
  );
}
