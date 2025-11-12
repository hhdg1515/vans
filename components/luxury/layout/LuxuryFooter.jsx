import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../src/hooks/useTranslation';
import styles from './LuxuryFooter.module.css';
import SafeLink from '../../../components/SafeLink';

export default function LuxuryFooter() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { to: '/', label: t('footer.quick_links.items.home') },
    { to: '/services', label: t('footer.quick_links.items.services') },
    { to: '/about', label: t('footer.quick_links.items.about') },
    { to: '#booking', label: t('footer.quick_links.items.booking'), external: true },
  ];

  const serviceLinks = [
    { to: '/services#diagnostics', label: t('footer.services.items.diagnostics') },
    { to: '/services#engine', label: t('footer.services.items.engine') },
    { to: '/services#electrical', label: t('footer.services.items.electrical') },
    { to: '/services#chassis', label: t('footer.services.items.chassis') },
    { to: '/services#brake', label: t('footer.services.items.brake') },
    { to: '/services#maintenance', label: t('footer.services.items.maintenance') },
  ];

  const addressLines = t('footer.contact.address').split('\n');

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          {/* Column 1: About */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>{t('footer.about.heading')}</h3>
            <p className={styles.footerText}>
              {t('footer.about.description')}
            </p>
            <div className={styles.footerSocial}>
              <SafeLink href="https://facebook.com" external aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SafeLink>
              <SafeLink href="https://instagram.com" external aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </SafeLink>
              <SafeLink href="https://linkedin.com" external aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </SafeLink>
              <SafeLink href="https://youtube.com" external aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16133 5.19941C1.82069 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991228 9.97631 1 11.75C0.988779 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17815 18.2945C2.51798 18.6308 2.93884 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SafeLink>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>{t('footer.quick_links.heading')}</h4>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.to}>{link.label}</a>
                  ) : (
                    <Link to={link.to}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>{t('footer.services.heading')}</h4>
            <ul className={styles.footerLinks}>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>{t('footer.contact.heading')}</h4>
            <ul className={styles.footerContact}>
              <li>
                <span>
                  {addressLines.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < addressLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li>
                <a href="tel:+13105551234">(310) 555-1234</a>
              </li>
              <li>
                <a href="mailto:info@luxuryautocare.com">info@luxuryautocare.com</a>
              </li>
              <li>
                <span>
                  {t('footer.contact.hours.weekday')}
                  <br />
                  {t('footer.contact.hours.saturday')}
                </span>
              </li>
              <li>
                <span>{t('footer.contact.hours.sunday')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerContainer}>
          <p className={styles.footerCopyright}>
            {t('footer.bottom.rights', { year: currentYear })}
          </p>
          <div className={styles.footerLegal}>
            <Link to="/privacy">{t('footer.bottom.privacy')}</Link>
            <span className={styles.footerDivider}>|</span>
            <Link to="/terms">{t('footer.bottom.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
