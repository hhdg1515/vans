import React, { useState } from 'react';
import { useTranslation } from '../../../src/hooks/useTranslation';
import { faqData } from '../../../data/luxury/faq';
import styles from './FAQ.module.css';

export default function FAQ() {
  const { t } = useTranslation();
  const [selectedFaq, setSelectedFaq] = useState(0);

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.faqContainer}>
        {/* Left Side - Questions */}
        <div className={styles.faqLeft}>
          <h2 className={styles.faqHeadline}>{t('faq.headline')}</h2>
          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <button
                key={faq.id}
                className={`${styles.faqQuestion} ${index === selectedFaq ? styles.faqQuestionActive : ''}`}
                onClick={() => setSelectedFaq(index)}
              >
                {t(faq.questionKey)}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Answer + Image */}
        <div className={styles.faqRight}>
          <div className={styles.faqAnswer}>
            <p>{t(faqData[selectedFaq].answerKey)}</p>
          </div>
          <div
            className={styles.faqImage}
            style={{ backgroundImage: `url(${faqData[selectedFaq].image})` }}
          />
        </div>
      </div>
    </section>
  );
}
