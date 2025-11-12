import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../src/hooks/useTranslation';
import styles from './ServiceGrid.module.css';

function ServiceCard({ service, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const localized =
    t(`servicesData.coreServices.${service.slug}`) || {};
  const title = localized.title || service.slug;
  const description = localized.description || '';
  const features = localized.features || [];
  const badgeLabel = t('servicesData.badges.most_popular');

  return (
    <Link
      to={service.link}
      className={`${styles.serviceCard} ${className || ''} ${
        service.size === 'large' ? styles.serviceCardLarge : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className={styles.serviceCardImage}
        style={{ backgroundImage: `url(${service.image})` }}
        role="img"
        aria-label={title}
      />

      {/* Gradient Overlay */}
      <div className={styles.serviceCardOverlay} />

      {/* Content */}
      <div className={styles.serviceCardContent}>
        <h3 className={styles.serviceCardTitle}>{title}</h3>

        {/* Description and Features (only shown on hover) */}
        <div className={`${styles.serviceCardDetails} ${isHovered ? styles.serviceCardDetailsVisible : ''}`}>
          <p className={styles.serviceCardDescription}>{description}</p>

          {/* Features List */}
          {features.length > 0 && (
            <ul className={styles.serviceCardFeatures}>
              {features.map((feature, index) => (
                <li key={`${service.slug}-feature-${index}`} className={styles.serviceCardFeature}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4L6 11L3 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Circular Arrow Button */}
      <div className={styles.serviceCardArrow}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Highlight Badge (if applicable) */}
      {service.highlight && (
        <div className={styles.serviceCardBadge}>
          <span>{badgeLabel}</span>
        </div>
      )}
    </Link>
  );
}

// Memoize to prevent re-renders when service grid updates
export default React.memo(ServiceCard);
