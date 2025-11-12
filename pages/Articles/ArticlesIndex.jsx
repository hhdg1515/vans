import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { caseStudies } from '../../data/luxury/case-studies';
import { additionalCaseStudies } from '../../data/luxury/additional-case-studies';
import { useTranslation } from '../../src/hooks/useTranslation';
import ArticleCard from '../../components/luxury/articles/ArticleCard';
import styles from './ArticlesIndex.module.css';

const ARTICLES_PER_PAGE = 12;

export default function ArticlesIndex() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get state from URL params
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const selectedCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'latest';

  // Combine all case studies
  const allArticles = useMemo(() => [...caseStudies, ...additionalCaseStudies], []);

  // Get all categories and brands
  const categories = ['all', ...new Set(allArticles.map(article => article.category))];
  const brands = ['all', ...new Set(allArticles.map(article => article.brandSlug))];

  // Filter articles
  const filteredArticles = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? allArticles
      : allArticles.filter(article => article.category === selectedCategory);

    // Sort articles
    if (sortBy === 'latest') {
      filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'difficulty') {
      const difficultyOrder = { 'intermediate': 1, 'expert': 2 };
      filtered = [...filtered].sort((a, b) =>
        (difficultyOrder[a.difficulty] || 0) - (difficultyOrder[b.difficulty] || 0)
      );
    }

    return filtered;
  }, [allArticles, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  // Update URL params
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'latest') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    newParams.delete('page'); // Reset to page 1 when filtering
    setSearchParams(newParams);
  };

  const goToPage = (page) => {
    const newParams = new URLSearchParams(searchParams);
    if (page === 1) {
      newParams.delete('page');
    } else {
      newParams.set('page', page.toString());
    }
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categoryLabels = {
    all: t('articlesPage.categories.all'),
    suspension: t('articles.categories.suspension'),
    powertrain: t('articles.categories.powertrain'),
    electrical: t('articles.categories.electrical'),
    interior: t('articles.categories.interior'),
    brakes: t('articles.categories.brakes'),
    transmission: 'Transmission',
  };

  const brandLabels = {
    all: 'All Brands',
    maybach: 'Mercedes-Maybach',
    'rolls-royce': 'Rolls-Royce',
    bentley: 'Bentley',
    'aston-martin': 'Aston Martin',
    lamborghini: 'Lamborghini',
    mclaren: 'McLaren',
    ferrari: 'Ferrari',
    porsche: 'Porsche',
  };

  return (
    <main className={styles.main}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb}>
        <Link to="/brands">{t('articlesPage.breadcrumb.brands')}</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{t('articlesPage.breadcrumb.articles')}</span>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>{t('articlesPage.hero.eyebrow')}</span>
          <h1 className={styles.heroTitle}>
            {t('articlesPage.hero.title')}
          </h1>
          <p className={styles.heroSubtitle}>
            Expert insights and technical case studies from our workshop
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterControls}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Category</label>
              <select
                className={styles.filterSelect}
                value={selectedCategory}
                onChange={(e) => updateFilter('category', e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {categoryLabels[category] || category}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Sort By</label>
              <select
                className={styles.filterSelect}
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="difficulty">By Difficulty</option>
              </select>
            </div>

            <div className={styles.resultsCount}>
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        {/* Show results range */}
        {paginatedArticles.length > 0 && (
          <div className={styles.resultsInfo}>
            Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
          </div>
        )}

        <div className={styles.articlesGrid}>
          {paginatedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              size="medium"
              link={`/brands/${article.brandSlug}/${article.slug}`}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className={styles.emptyState}>
            <p>{t('articlesPage.empty.message')}</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.paginationButton}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage =
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1);

              // Show ellipsis
              const showEllipsis =
                (page === 2 && currentPage > 3) ||
                (page === totalPages - 1 && currentPage < totalPages - 2);

              if (!showPage && !showEllipsis) return null;

              if (showEllipsis) {
                return (
                  <span key={`ellipsis-${page}`} className={styles.paginationEllipsis}>
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  className={`${styles.paginationButton} ${
                    page === currentPage ? styles.paginationButtonActive : ''
                  }`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              );
            })}

            <button
              className={styles.paginationButton}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {t('articlesPage.cta.title')}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t('articlesPage.cta.subtitle')}
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/#booking" className={styles.primaryButton}>
              {t('articlesPage.cta.book')}
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
