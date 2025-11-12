import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceGrid.module.css';

function DataCard({ stats, className }) {
  return (
    <div className={`${styles.dataCard} ${className || ''}`}>
      {/* Title */}
      <h3 className={styles.dataCardTitle}>{stats.title}</h3>

      {/* Stats Grid */}
      <div className={styles.dataCardStats}>
        {stats.stats.map((stat, index) => (
          <div
            key={index}
            className={`${styles.dataCardStat} ${
              stat.highlight ? styles.dataCardStatHighlight : ''
            }`}
          >
            <div className={styles.dataCardNumber}>{stat.number}</div>
            <div className={styles.dataCardLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      {stats.ctaText && stats.ctaLink && (
        <Link to={stats.ctaLink} className={styles.dataCardCta}>
          {stats.ctaText}
          <svg
            width="16"
            height="16"
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
        </Link>
      )}
    </div>
  );
}

// Memoize to prevent re-renders when data updates
export default React.memo(DataCard);
