import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBrandBySlug } from '../../data/luxury/brand-details';
import { getCaseStudiesByBrand } from '../../data/luxury/case-studies';
import { useTranslation } from '../../src/hooks/useTranslation';
import styles from './BrandDetail.module.css';
import SafeLink from '../../components/SafeLink';
import { validateUrlParam } from '../../utils/inputValidator';

export default function BrandDetail() {
  const { brandSlug } = useParams();
  // Sanitize URL parameters to prevent injection attacks
  const sanitizedSlug = validateUrlParam(brandSlug);
  const brand = getBrandBySlug(sanitizedSlug);
  const caseStudies = getCaseStudiesByBrand(sanitizedSlug);
  const { t } = useTranslation();

  const getLocalized = (path, fallback) => {
    const value = t(path);
    if (typeof value === 'string' && value === path) {
      return fallback;
    }
    return value ?? fallback;
  };

  const brandContent = brand ? getLocalized(`brandsData.${brand.slug}`, {}) : {};
  const brandName = brand ? (brandContent.name || brand.name) : '';
  const heroContent = brandContent.hero || {};
  const storyContent = brandContent.story || {};
  const servicesContent = Array.isArray(brandContent.services) ? brandContent.services : [];
  const modelsContent = brandContent.models || {};
  const storyParagraphs = Array.isArray(storyContent.paragraphs)
    ? storyContent.paragraphs
    : (brand?.story?.paragraphs || []);
  const heroEyebrow = heroContent.eyebrow || (brand ? brand.tier.replace('-', ' ') : '');
  const heroTitle = heroContent.title || brand?.hero?.title || '';
  const heroSubtitle = heroContent.subtitle || brand?.hero?.subtitle || '';
  const storyEyebrow = storyContent.eyebrow || brand?.story?.eyebrow || '';
  const storyTitle = storyContent.title || brand?.story?.title || '';


  // 404 handling
  if (!brand) {
    return (
      <div className={styles.notFound}>
        <h1>{t('brands.detail.not_found.title')}</h1>
        <p>{t('brands.detail.not_found.message')}</p>
        <Link to="/brands">{t('brands.detail.not_found.back')}</Link>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb}>
        <Link to="/brands">{t('brands.detail.breadcrumb.all_brands')}</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{brandName}</span>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className={styles.hero}>
        <div className={styles.heroBody}>
          {/* Left: Image (40%) */}
          <div
            className={styles.heroImage}
            style={{
              backgroundImage: brand.hero.image
                ? `url(${brand.hero.image})`
                : 'none'
            }}
          >
            {!brand.hero.image && (
              <div className={styles.heroImagePlaceholder}>
                {/* TODO: Replace with actual brand hero image */}
              </div>
            )}
          </div>

          {/* Right: Content (60%) */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{heroEyebrow}</span>
            <h1 className={styles.heroTitle}>{heroTitle}</h1>
            <p className={styles.heroSubtitle}>{heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Brand Story - 50/50 Split */}
      <section className={styles.storySection}>
        <div className={styles.storyLayout}>
          {/* Left: Text Content */}
          <div className={styles.storyText}>
            <span className={styles.sectionEyebrow}>{storyEyebrow}</span>
            <h2 className={styles.sectionTitle}>{storyTitle}</h2>
            <div className={styles.storyParagraphs}>
              {storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={styles.storyImage}
            style={{
              backgroundImage: brand.story.image
                ? `url(${brand.story.image})`
                : 'none'
            }}
          >
            {!brand.story.image && (
              <div className={styles.storyImagePlaceholder}>
                <span className={styles.placeholderText}>
                  {t('brands.detail.story.image_placeholder').split('\n').map((line, index, arr) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Model Lineup - Expandable Cards */}
      <section className={styles.modelsSection}>
        <div className={styles.modelsContainer}>
          <div className={styles.modelsHeader}>
            <span className={styles.sectionEyebrow}>{t('brands.detail.models.section_title')}</span>
            <h2 className={styles.sectionTitle}>{t('brands.detail.models.lineup_title', { brand: brandName })}</h2>
          </div>

          <div className={styles.modelsGrid}>
            {brand.models.map((model) => {
              const modelContent = modelsContent[model.id] || {};
              const modelName = modelContent.name || model.name;
              const modelGeneration = modelContent.generation || model.generation;
              const modelFeatures = Array.isArray(modelContent.features)
                ? modelContent.features
                : (model.features || []);
              const modelIssues = Array.isArray(modelContent.commonIssues)
                ? modelContent.commonIssues
                : (model.commonIssues || []);
              const modelDisplacement = modelContent.displacement || model.displacement;
              const modelPower = modelContent.power || model.power;
              const modelTransmission = modelContent.transmission || model.transmission;
              return (
                <div key={model.id} className={styles.modelCard}>
                  <div className={styles.modelContent}>
                    <div className={styles.modelHeader}>
                      <div>
                        <h3 className={styles.modelName}>{modelName}</h3>
                        <span className={styles.modelGeneration}>{modelGeneration}</span>
                      </div>
                    </div>

                    <div className={styles.modelSpecs}>
                      <div className={styles.modelSpec}>
                        <span className={styles.specLabel}>{t('brands.detail.models.spec_labels.engine')}</span>
                        <span className={styles.specValue}>{modelDisplacement}</span>
                      </div>
                      <div className={styles.modelSpec}>
                        <span className={styles.specLabel}>{t('brands.detail.models.spec_labels.power')}</span>
                        <span className={styles.specValue}>{modelPower}</span>
                      </div>
                      <div className={styles.modelSpec}>
                        <span className={styles.specLabel}>{t('brands.detail.models.spec_labels.transmission')}</span>
                        <span className={styles.specValue}>{modelTransmission}</span>
                      </div>
                    </div>

                    <div className={styles.modelHighlights}>
                      <div className={styles.modelFeatures}>
                        <h4 className={styles.modelFeaturesTitle}>{t('brands.detail.models.features')}</h4>
                        <ul className={styles.featureList}>
                          {modelFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.modelIssues}>
                        <h4 className={styles.modelIssuesTitle}>{t('brands.detail.models.issues')}</h4>
                        <ul className={styles.issueList}>
                          {modelIssues.map((issue, idx) => (
                            <li key={idx}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services - 4 Column Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            <span className={styles.sectionEyebrow}>{t('brands.detail.services.section_title')}</span>
            <h2 className={styles.sectionTitle}>{t('brands.detail.services.subtitle', { brand: brandName })}</h2>
          </div>

          <div className={styles.servicesGrid}>
            {brand.services.map((service, idx) => {
              const serviceContent = servicesContent[idx] || {};
              const serviceTitle = serviceContent.title || service.title;
              const serviceDescription = serviceContent.description || service.description;
              const serviceImage = serviceContent.image || service.image || brand?.hero?.image || '';
              const hasImage = Boolean(serviceImage);
              return (
                <article key={idx} className={styles.serviceCard}>
                  <div className={styles.serviceContent}>
                    <h3 className={styles.serviceTitle}>{serviceTitle}</h3>
                    <p className={styles.serviceDescription}>{serviceDescription}</p>
                  </div>
                  <div
                    className={`${styles.serviceVisual} ${!hasImage ? styles.serviceVisualPlaceholder : ''}`}
                    style={hasImage ? { backgroundImage: `url(${serviceImage})` } : undefined}
                    aria-hidden={hasImage ? 'true' : 'false'}
                  >
                    {!hasImage && <span className={styles.serviceVisualLabel}>{brandName}</span>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      {caseStudies.length > 0 && (
        <section className={styles.caseStudiesSection}>
          <div className={styles.caseStudiesContainer}>
            <div className={styles.caseStudiesHeader}>
              <span className={styles.sectionEyebrow}>{t('brands.detail.case_studies.eyebrow')}</span>
              <h2 className={styles.sectionTitle}>{t('brands.detail.case_studies.section_title', { brand: brandName })}</h2>
              <p className={styles.sectionSubtitle}>
                {t('brands.detail.case_studies.subtitle')}
              </p>
            </div>

            <div className={styles.caseStudiesGrid}>
            {caseStudies.slice(0, 5).map((caseStudy) => {
              const caseStudyContent = getLocalized(`caseStudiesData.${caseStudy.id}`, {});
              const previewCategory = caseStudyContent.category || caseStudy.category;
              const previewTitle = caseStudyContent.title || caseStudy.title;
              const previewSubtitle = caseStudyContent.subtitle || caseStudy.subtitle;
              return (
                <Link
                  key={caseStudy.id}
                  to={`/brands/${sanitizedSlug}/${caseStudy.slug}`}
                  className={styles.caseStudyCard}
                >
                  {/* Image */}
                  <div
                    className={styles.caseStudyImage}
                    style={{
                      backgroundImage: caseStudy.coverImage
                        ? `url(${caseStudy.coverImage})`
                        : 'none'
                    }}
                  >
                    {!caseStudy.coverImage && (
                      <div className={styles.caseStudyImagePlaceholder} />
                    )}
                    <div className={styles.caseStudyCategory}>{previewCategory}</div>
                  </div>

                  {/* Content */}
                  <div className={styles.caseStudyContent}>
                    <div className={styles.caseStudyMeta}>
                      <span className={styles.caseStudyDate}>{caseStudy.date}</span>
                      <span className={styles.caseStudyReadTime}>{caseStudy.readTime}</span>
                    </div>
                    <h3 className={styles.caseStudyTitle}>{previewTitle}</h3>
                    <p className={styles.caseStudySubtitle}>{previewSubtitle}</p>
                    <div className={styles.caseStudyVehicle}>
                      {caseStudy.vehicle.year} {caseStudy.vehicle.model}
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* "See More" CTA Card - 6th position */}
            <SafeLink
              href="https://www.xiaohongshu.com/user/profile/wscauto"
              external
              className={`${styles.caseStudyCard} ${styles.caseStudyCardCta}`}
            >
              <div className={styles.ctaCardContent}>
                <div className={styles.ctaIcon}>
                  {/* 小红书 Logo */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5c-.3.3-.7.5-1.2.5H9.7c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V9.7c0-.5.2-.9.5-1.2.3-.3.7-.5 1.2-.5h4.6c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2v4.6c0 .5-.2.9-.5 1.2z"/>
                    <path d="M10.5 8v8M13.5 8v8M8 10.5h8M8 13.5h8"/>
                  </svg>
                </div>
                <h3 className={styles.ctaTitle}>See More Projects</h3>
                <p className={styles.ctaSubtitle}>
                  Follow us on Xiaohongshu for more {brandName} case studies, behind-the-scenes, and service updates
                </p>
                <div className={styles.ctaButton}>
                  <span>Follow on Xiaohongshu</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </SafeLink>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {brand.gallery && brand.gallery.length > 0 && (
        <section className={styles.gallerySection}>
          <div className={styles.galleryContainer}>
            <h2 className={styles.sectionTitle}>{t('brands.detail.gallery.title')}</h2>
            <div className={styles.galleryGrid}>
              {brand.gallery.map((image, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <div className={styles.galleryImagePlaceholder}>
                    {/* TODO: Replace with actual images */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {t('brands.detail.cta.title', { brand: brandName })}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t('brands.detail.cta.subtitle')}
          </p>
          <div className={styles.ctaButtons}>
            <a href="#booking" className={styles.primaryButton}>
              {t('brands.detail.cta.book')}
            </a>
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
