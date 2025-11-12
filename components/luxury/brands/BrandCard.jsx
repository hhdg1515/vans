import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BrandGrid.module.css';

export default function BrandCard({ brand, accentColor, groupLabel }) {
  const models = (brand.spotlightModels || []).slice(0, 2).join(' / ');
  const highlights = (brand.serviceHighlights || []).slice(0, 2);
  const brandPath = brand.link || (brand.slug ? `/brands/${brand.slug}` : '#');

  return (
    <Link
      to={brandPath}
      className={styles.brandCard}
      style={{ '--brand-accent': accentColor }}
      data-brand={brand.slug}
      aria-label={`View ${brand.name} marque details`}
    >
      <div
        className={styles.brandCardImage}
        style={{ backgroundImage: `url(${brand.image})` }}
        role="presentation"
      />

      <div className={styles.brandCardOverlay} />

      <div className={styles.brandCardContent}>
        <h3 className={styles.brandCardName}>{brand.name}</h3>

        {models && (
          <div className={styles.brandCardMeta}>
            <span className={styles.brandCardModels}>{models}</span>
          </div>
        )}

        {highlights.length > 0 && (
          <ul className={styles.brandCardHighlights}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
