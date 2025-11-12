import React from 'react';
import { Link } from 'react-router-dom';
import BrandCard from './BrandCard';
import { luxuryBrands } from '../../../data/luxury/brands';
import { useTranslation } from '../../../src/hooks/useTranslation';
import styles from './BrandGrid.module.css';

const groupAccents = {
  flagship: 'var(--mb-gold)',
  performance: 'var(--mb-blue)',
  supercar: 'var(--mb-purple)',
  suv: 'var(--mb-silver)',
};

export default function BrandGrid() {
  const { t } = useTranslation();
  const introTags = t('brands.index.groups.tags') || [];

  const groups = Object.entries(groupAccents)
    .map(([key, accent]) => {
      const meta = {
        title: t(`brands.index.groups.${key}.title`),
        summary: t(`brands.index.groups.${key}.summary`),
        tags: t(`brands.index.groups.${key}.tags`) || [],
        accent,
      };

      return {
        key,
        meta,
        brands: luxuryBrands.filter((brand) => brand.serviceGroup === key),
      };
    })
    .filter((group) => group.brands.length > 0);

  return (
    <section className={styles.brandSection} id="brands">
      <header className={styles.brandIntro}>
        <span className={styles.brandEyebrow}>{t('brands.index.groups.eyebrow')}</span>
        <h2 className={styles.brandHeadline}>{t('brands.index.groups.headline')}</h2>
        <ul className={styles.brandIntroTags}>
          {introTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </header>

      {groups.map(({ key, meta, brands }) => (
        <section key={key} className={styles.brandGroup}>
          <div className={styles.brandGroupGrid}>
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                accentColor={meta.accent}
                groupLabel={meta.title}
              />
            ))}
          </div>
        </section>
      ))}

      <div className={styles.brandCta}>
        <Link to="/brands" className={styles.brandCtaViewAll}>
          {t('brands.index.cta.view_all')}
        </Link>
        <span className={styles.brandCtaNote}>{t('brands.index.cta.note')}</span>
        <Link to="/about" className={styles.brandCtaLink}>
          {t('brands.index.cta.talk')}
        </Link>
      </div>
    </section>
  );
}
