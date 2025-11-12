import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../src/contexts/LanguageContext';
import { useTranslation } from '../../../src/hooks/useTranslation';
import styles from './LuxuryHeader.module.css';

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleLanguage } = useLanguage();
  const { t, language } = useTranslation();

  const languageLabels = {
    en: {
      active: t('header.language.en'),
      inactive: t('header.language.zh'),
    },
    zh: {
      active: t('header.language.zh'),
      inactive: t('header.language.en'),
    },
  };

  const { active: activeLabel, inactive: inactiveLabel } =
    languageLabels[language] || languageLabels.en;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      {/* Mercedes Stage Bar */}
      <div className={styles.stageBar} />

      {/* Main Header Content */}
      <div className={styles.headerContent}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>WSC</span>
            </div>
          </Link>

          <div className={styles.headerRight}>
            {/* Language Switcher */}
            <div className={styles.languageSwitcher}>
              <button
                className={styles.langButton}
                onClick={toggleLanguage}
                aria-label={t('header.language.aria_toggle')}
              >
                <span className={styles.langActive}>{activeLabel}</span>
                <span className={styles.langSeparator}>/</span>
                <span className={styles.langInactive}>{inactiveLabel}</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('header.mobile_menu.aria_toggle')}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Simplified */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {/* Mobile menu items can be added here if needed */}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileMenuOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
