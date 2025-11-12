import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../src/hooks/useTranslation';
import LazyBackgroundImage from '../../LazyBackgroundImage';
import styles from './ArticleCard.module.css';

function ArticleCard({ article, size = 'medium', link }) {
  const { t } = useTranslation();

  const categoryLabels = {
    suspension: t('articles.categories.suspension'),
    powertrain: t('articles.categories.powertrain'),
    electrical: t('articles.categories.electrical'),
    interior: t('articles.categories.interior'),
    brakes: t('articles.categories.brakes'),
  };

  const difficultyLabels = {
    novice: 'Simple',
    intermediate: 'Intermediate',
    expert: 'Complex',
  };

  return (
    <Link to={link} className={`${styles.articleCard} ${styles[size]}`}>
      {/* Background Image - Lazy Loaded */}
      <LazyBackgroundImage
        src={article.coverImage || '/images/placeholder-article.jpg'}
        className={styles.cardImage}
      />

      {/* Gradient Overlay */}
      <div className={styles.cardOverlay} />

      {/* Content */}
      <div className={styles.cardContent}>
        {/* Badges */}
        <div className={styles.badges}>
          {article.featured && size === 'large' && (
            <span className={styles.featuredBadge}>
              {t('articles.featured')}
            </span>
          )}
          <span
            className={styles.categoryBadge}
            data-category={article.category}
          >
            {categoryLabels[article.category] || article.category}
          </span>
        </div>

        {/* Title */}
        <h3 className={styles.cardTitle}>{article.title}</h3>

        {/* Excerpt (only for large cards) */}
        {size === 'large' && article.excerpt && (
          <p className={styles.cardExcerpt}>{article.excerpt}</p>
        )}

        {/* Meta Information */}
        <div className={styles.cardMeta}>
          <span className={styles.metaItem}>
            🚗 {article.vehicle.year} {article.vehicle.model}
          </span>
          {article.laborHours && (
            <span className={styles.metaItem}>
              ⏱ {article.laborHours}{t('articles.meta.hours')}
            </span>
          )}
          {article.difficulty && (
            <span
              className={styles.difficultyBadge}
              data-difficulty={article.difficulty}
            >
              {difficultyLabels[article.difficulty] || article.difficulty}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// Memoize to prevent re-renders when article list updates
export default React.memo(ArticleCard);
