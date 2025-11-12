import React from 'react';
import { Link } from 'react-router-dom';
import { serviceDetails, conciergePrograms } from '../../data/luxury/services';
import { useTranslation } from '../../src/hooks/useTranslation';
import styles from './Services.module.css';

export default function Services() {
  const { t } = useTranslation();

  const serviceIconConfig = [
    { slug: 'diagnostics', icon: 'diagnostic' },
    { slug: 'engine', icon: 'engine' },
    { slug: 'electrical', icon: 'electrical' },
    { slug: 'chassis', icon: 'chassis' },
    { slug: 'brake', icon: 'brake' },
    { slug: 'maintenance', icon: 'maintenance' },
  ];

  const serviceIcons = serviceIconConfig.map((config) => ({
    ...config,
    label: t(`servicesPage.nav.labels.${config.slug}`),
  }));

  const conciergeKeywords = t('servicesPage.sections.concierge.keywords') || [];
  const experienceSteps = t('servicesPage.sections.experience.steps') || [];
  const experienceKeywords =
    t('servicesPage.sections.experience.keywords') || [];
  const restorationBenefits = t('servicesPage.sections.cta.benefits') || [];
  const ctaMetrics = t('servicesPage.sections.cta.metrics') || {};

  const ctaMetricsList = [];
  if (ctaMetrics.dossier) {
    ctaMetricsList.push({ key: 'dossier', ...ctaMetrics.dossier });
  }
  if (ctaMetrics.guarantee) {
    ctaMetricsList.push({ key: 'guarantee', ...ctaMetrics.guarantee });
  }

  return (
    <main className={styles.main}>
        {/* Stage Hero - Split Screen */}
        <section className={styles.hero} id="overview">
          <div className={styles.heroBody}>
            {/* Left: Gradient Placeholder (40%) */}
            <div className={styles.heroImagePlaceholder}>
              {/* TODO: Replace with workshop photography */}
              </div>

              {/* Right: Content (60%) */}
              <div className={styles.heroContent}>
                <span className={styles.heroEyebrow}>
                  {t('servicesPage.hero.eyebrow')}
                </span>
                <h1 className={styles.heroTitle}>
                  {t('servicesPage.hero.title')}
                </h1>
                <p className={styles.heroTags}>
                  {t('servicesPage.hero.tags')}
                </p>

              {/* 3-Photo Gallery */}
              <div className={styles.heroGallery}>
                <div className={styles.heroGalleryItem} style={{ flex: '1.4' }}>
                  {/* Gradient placeholder 1 */}
                </div>
                <div className={styles.heroGalleryItem} style={{ flex: '1.2' }}>
                  {/* Gradient placeholder 2 */}
                </div>
                <div className={styles.heroGalleryItem} style={{ flex: '1' }}>
                  {/* Gradient placeholder 3 */}
                  <span className={styles.seeAllBadge}>
                    {t('servicesPage.hero.see_all')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Icons Navigation */}
          <nav
            className={styles.serviceIconsNav}
            aria-label={t('servicesPage.nav.aria')}
          >
            {serviceIcons.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className={styles.serviceIconLink}
              >
                <span className={styles.serviceIconLabel}>{service.label}</span>
              </a>
            ))}
          </nav>

        </section>

        {/* Detailed service programs - Narrative Flow */}
        {serviceDetails.map((service, index) => {
          const detailContent =
            t(`servicesData.serviceDetails.${service.slug}`) || {};
          const detailSubtitle = detailContent.subtitle || '';
          const detailTitle = detailContent.title || '';
          const detailSummary = detailContent.summary || '';
          return (
          <section
            key={service.slug}
            id={service.slug}
            className={styles.serviceDetail}
            aria-labelledby={`${service.slug}-title`}
          >
            {/* Horizontal Divider */}
            {index > 0 && <div className={styles.serviceDivider} />}

            {/* Service Header */}
            <div className={styles.serviceDetailHeader}>
              <span className={styles.sectionEyebrow}>
                {detailSubtitle}
              </span>
              <h2 id={`${service.slug}-title`} className={styles.serviceDetailTitle}>
                {detailTitle}
              </h2>
            </div>

            {/* 3-Image Gallery */}
            <div className={styles.serviceGallery}>
              <div className={styles.serviceGalleryItem} data-service={service.slug} data-index="1" />
              <div className={styles.serviceGalleryItem} data-service={service.slug} data-index="2" />
              <div className={styles.serviceGalleryItem} data-service={service.slug} data-index="3" />
            </div>

          </section>
        );
        })}

        {/* Concierge programs */}
        <section className={styles.conciergeSection} id="concierge">
          <div className={styles.conciergeLayout}>
            <div className={styles.conciergeInfo}>
              <span className={styles.sectionEyebrow}>
                {t('servicesPage.sections.concierge.title')}
              </span>
              <h2 className={styles.sectionTitle}>
                {t('servicesPage.sections.concierge.heading')}
              </h2>
              <ul className={styles.sectionKeywordsVertical}>
                {conciergeKeywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>

            <div className={styles.conciergeGrid}>
              {conciergePrograms.map((program, index) => {
                const programContent =
                  t(`servicesData.conciergePrograms.${program.id}`) || {};
                const deliverables = programContent.deliverables || [];
                return (
                <div key={program.id} className={styles.conciergeCard}>
                  <div className={styles.conciergeHeading}>
                    <span className={styles.conciergeIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{programContent.title}</h3>
                  </div>
                  <ul className={styles.conciergeDeliverables}>
                    {deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <section className={styles.processSection} id="experience">
          <div className={styles.processLayout}>
            <div className={styles.processInfo}>
              <span className={styles.sectionEyebrow}>
                {t('servicesPage.sections.experience.title')}
              </span>
              <h2 className={styles.sectionTitle}>
                {t('servicesPage.sections.experience.heading')}
              </h2>
              <ul className={styles.sectionKeywordsVertical}>
                {experienceKeywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>

            <ul className={styles.processTimeline}>
              {experienceSteps.map((step, index) => (
                <li key={step.title} className={styles.processStep}>
                  <div className={styles.processHeading}>
                    <span className={styles.processIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final stage CTA */}
        <section className={styles.ctaStage} id="booking">
          <div className={styles.ctaContent}>
            <div className={styles.ctaCopy}>
              <span className={styles.sectionEyebrow}>
                {t('booking.sectionEyebrow')}
              </span>
              <h2 className={styles.ctaTitle}>
                {t('servicesPage.sections.cta.title')}
              </h2>
              <p className={styles.ctaSubtitle}>
                {t('servicesPage.sections.cta.subtitle')}
              </p>
              <div className={styles.ctaMetrics}>
                {ctaMetricsList.map((metric) => (
                  <div key={metric.key} className={styles.ctaMetric}>
                    <span>{metric.value}</span>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.ctaPanel}>
              <div className={styles.ctaBenefits}>
                {restorationBenefits.map((benefit) => (
                  <div key={benefit.id} className={styles.ctaBenefit}>
                    <span className={styles.ctaBenefitIndex}>{benefit.id}</span>
                    <div className={styles.ctaBenefitBody}>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/" className={`${styles.primaryButton} ${styles.ctaPrimaryButton}`}>
                {t('servicesPage.sections.cta.primary')}
              </Link>
              <p className={styles.ctaFootnote}>
                {t('servicesPage.sections.cta.footnote')}
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}
