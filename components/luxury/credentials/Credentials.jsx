import React from 'react';
import styles from './Credentials.module.css';

export default function Credentials() {
  return (
    <section className={styles.credentialsSection}>
      {/* Mercedes Stage Design: 50/50 Split */}
      <div className={styles.credentialsSplit}>
        {/* Left Side: Content */}
        <div className={styles.credentialsLeft}>
          <div className={styles.credentialsContent}>
            <span className={styles.credentialsEyebrow}>Master Technician</span>
            <h2 className={styles.credentialsHeadline}>
              25+ Years Mercedes-Benz Factory Experience
            </h2>
            <div className={styles.credentialsKeyline} />

            <p className={styles.credentialsText}>
              Our lead technician spent over two decades as a Mercedes-Benz factory-trained
              master technician, specializing in S-Class, Maybach, and AMG vehicles. This isn't
              just experience—it's insider knowledge of how these vehicles are designed, built,
              and maintained.
            </p>

            <div className={styles.credentialsList}>
              <div className={styles.credentialItem}>
                <div className={styles.credentialIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.credentialText}>
                  <h4>Factory-Certified Training</h4>
                  <p>Mercedes-Benz XENTRY & Star Diagnostics certified</p>
                </div>
              </div>

              <div className={styles.credentialItem}>
                <div className={styles.credentialIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.credentialText}>
                  <h4>25+ Years Experience</h4>
                  <p>Specialized in ultra-luxury European vehicles</p>
                </div>
              </div>

              <div className={styles.credentialItem}>
                <div className={styles.credentialIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.credentialText}>
                  <h4>OEM Equipment & Software</h4>
                  <p>Same tools as Mercedes dealerships, better pricing</p>
                </div>
              </div>
            </div>

            <div className={styles.credentialsButtons}>
              <a href="/about" className="btn btn-primary">
                Meet Our Team
              </a>
              <a href="/contact" className="btn btn-secondary">
                Schedule Service
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className={styles.credentialsRight}>
          <img
            src="/images/credentials/master-technician.jpg" // TODO: Replace with real photo
            alt="Master Technician at work"
            className={styles.credentialsImage}
          />
          {/* Optional: Overlay Badge */}
          <div className={styles.credentialsBadge}>
            <span className={styles.credentialsBadgeText}>Mercedes-Benz</span>
            <span className={styles.credentialsBadgeLabel}>Factory Certified</span>
          </div>
        </div>

        {/* Mercedes Keyline Separator */}
        <div className={styles.credentialsDivider} />
      </div>
    </section>
  );
}
