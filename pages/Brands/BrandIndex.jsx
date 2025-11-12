import React from 'react';
import { Link } from 'react-router-dom';
import { luxuryBrands } from '../../data/luxury/brands';
import { caseStudies } from '../../data/luxury/case-studies';
import { useTranslation } from '../../src/hooks/useTranslation';
import ArticleCard from '../../components/luxury/articles/ArticleCard';
import styles from './BrandIndex.module.css';

export default function BrandIndex() {
  const { t } = useTranslation();
  const filteredBrands = luxuryBrands;

  // Get featured articles (5 articles for preview - 1 large + 4 small)
  const featuredArticles = caseStudies
    .filter(article => article.featured)
    .slice(0, 5);

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>{t('brands.index.hero.eyebrow')}</span>
          <h1 className={styles.heroTitle}>
            {t('brands.index.hero.title')}
          </h1>
          <p className={styles.heroSubtitle}>
            {t('brands.index.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <section className={styles.brandGrid}>
        <div className={styles.gridContainer}>
          {filteredBrands.map((brand) => {
            const specialties = brand.specialties || [];
            const displaySpecialties = specialties.slice(0, 2);
            const hasMoreSpecialties = specialties.length > displaySpecialties.length;

            return (
              <Link
                key={brand.id}
                to={`/brands/${brand.slug}`}
                className={styles.brandCard}
              >
                {/* Brand Image */}
                <div className={styles.brandImage}>
                  <div className={styles.brandImagePlaceholder} aria-hidden="true" />
                </div>

                {/* Brand Content */}
                <div className={styles.brandContent}>
                  <h3 className={styles.brandName}>{brand.name}</h3>

                  <div className={styles.specialties}>
                    {displaySpecialties.map((specialty) => (
                      <span key={specialty} className={styles.specialtyTag}>
                        {specialty}
                      </span>
                    ))}
                    {hasMoreSpecialties && (
                      <span className={styles.specialtyTag}>…</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Articles Preview Section */}
      <section className={styles.articlesPreview}>
        <div className={styles.articlesHeader}>
          <span className={styles.articlesEyebrow}>
            {t('brandsPage.articles.eyebrow')}
          </span>
          <h2 className={styles.articlesTitle}>
            {t('brandsPage.articles.title')}
          </h2>
          <p className={styles.articlesSubtitle}>
            {t('brandsPage.articles.subtitle')}
          </p>
        </div>

        <div className={styles.articlesGrid}>
          {featuredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              size={index === 0 ? 'large' : 'small'}
              link={`/brands/${article.brandSlug}/${article.slug}`}
            />
          ))}
        </div>

        <div className={styles.articlesCTA}>
          <Link to="/articles" className={styles.primaryButton}>
            {t('brandsPage.articles.cta')}
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {t('brands.index.cta.title')}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t('brands.index.cta.subtitle')}
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/#booking" className={styles.primaryButton}>
              {t('brands.index.cta.view_services')}
            </Link>
            <a href="tel:+13105551234" className={styles.secondaryButton}>
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
              {t('common.call_label', { number: '(310) 555-1234' })}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
