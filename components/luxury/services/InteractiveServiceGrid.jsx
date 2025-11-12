import React from 'react';
import ServiceCard from './ServiceCard';
import { coreServices } from '../../../data/luxury/services';
import { useTranslation } from '../../../src/hooks/useTranslation';
import styles from './ServiceGrid.module.css';

export default function InteractiveServiceGrid() {
  const { t } = useTranslation();
  const header = t('servicesGrid.header') || {};
  const headerEyebrow = header.eyebrow || '';
  const headerHeadline = header.headline || '';
  const headerSubheadline = header.subheadline || '';
  const ctaLabel = t('servicesGrid.cta');

  return (
    <section className={styles.serviceSection} id="services">
      {/* Section Header */}
      <div className={styles.serviceHeader}>
        <span className={styles.serviceEyebrow}>{headerEyebrow}</span>
        <h2 className={styles.serviceHeadline}>{headerHeadline}</h2>
        <p className={styles.serviceSubheadline}>
          {headerSubheadline}
        </p>
      </div>

      {/* Mercedes Keyline Separator */}
      <div className={styles.keyline} />

      {/* Service Grid */}
      <div className={styles.serviceGrid}>
        {/* Service Cards */}
        {coreServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            className={styles[`serviceCard${service.id}`]}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={styles.serviceCta}>
        <a href="/services" className="btn btn-primary">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
