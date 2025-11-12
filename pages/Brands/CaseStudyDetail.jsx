import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '../../data/luxury/case-studies';
import { getBrandBySlug } from '../../data/luxury/brand-details';
import { useTranslation } from '../../src/hooks/useTranslation';
import styles from './CaseStudyDetail.module.css';

export default function CaseStudyDetail() {
  const { brandSlug, caseStudySlug } = useParams();
  const caseStudy = getCaseStudyBySlug(caseStudySlug);
  const brand = getBrandBySlug(brandSlug);
  const relatedCases = caseStudy ? getRelatedCaseStudies(caseStudy.id, 2) : [];
  const { t } = useTranslation();
  const getLocalized = (path, fallback) => {
    const value = t(path);
    if (typeof value === 'string' && value === path) {
      return fallback;
    }
    return value ?? fallback;
  };

  const brandContent = brand ? getLocalized(`brandsData.${brand.slug}`, {}) : {};
  const brandDisplayName =
    brandContent.name ||
    brand?.name ||
    brandSlug
      .split('-')
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' ');
  const caseStudyContent = caseStudy ? getLocalized(`caseStudiesData.${caseStudy.id}`, {}) : {};
  const localizedTechnical = (caseStudyContent.technicalInsights || {}).title;
  const technicalTitle =
    localizedTechnical ||
    caseStudy?.technicalInsights?.title ||
    t('brands.caseStudy.sections.technical');
  const localizedResultsTitle = (caseStudyContent.results || {}).title;
  const resultsTitle =
    localizedResultsTitle ||
    caseStudy?.results?.title ||
    t('brands.caseStudy.sections.results.title');
  const caseStudyTitle = caseStudyContent.title || caseStudy?.title || '';
  const problemData = caseStudy?.problem || {};
  const problemContent = caseStudyContent.problem || {};
  const problemEyebrow = problemContent.eyebrow || problemData.eyebrow || '';
  const problemTitle = problemContent.title || problemData.title || '';
  const problemDescriptions = Array.isArray(problemContent.description)
    ? problemContent.description
    : (problemData.description || []);
  const problemSymptoms = Array.isArray(problemContent.symptoms)
    ? problemContent.symptoms
    : (problemData.symptoms || []);
  const problemFaultCodes = Array.isArray(problemContent.faultCodes)
    ? problemContent.faultCodes
    : (problemData.faultCodes || []);
  const diagnosisData = caseStudy?.diagnosis || {};
  const diagnosisContent = caseStudyContent.diagnosis || {};
  const diagnosisEyebrow = diagnosisContent.eyebrow || diagnosisData.eyebrow || '';
  const diagnosisTitle = diagnosisContent.title || diagnosisData.title || '';
  const baseDiagnosisSteps = diagnosisData.steps || [];
  const translatedDiagnosisSteps = Array.isArray(diagnosisContent.steps) ? diagnosisContent.steps : [];
  const diagnosisSteps = baseDiagnosisSteps.map((step, idx) => ({
    ...step,
    ...(translatedDiagnosisSteps[idx] || {}),
  }));
  const diagnosisConclusion = diagnosisContent.conclusion || diagnosisData.conclusion || '';
  const solutionData = caseStudy?.solution || {};
  const solutionContent = caseStudyContent.solution || {};
  const solutionEyebrow = solutionContent.eyebrow || solutionData.eyebrow || '';
  const solutionTitle = solutionContent.title || solutionData.title || '';
  const solutionApproach = solutionContent.approach || solutionData.approach || '';
  const baseSolutionProcedures = solutionData.procedures || [];
  const translatedSolutionProcedures = Array.isArray(solutionContent.procedures) ? solutionContent.procedures : [];
  const solutionProcedures = baseSolutionProcedures.map((procedure, idx) => ({
    ...procedure,
    ...(translatedSolutionProcedures[idx] || {}),
  }));
  const technicalContent = caseStudy?.technicalInsights || {};
  const technicalTranslations = caseStudyContent.technicalInsights || {};
  const technicalEyebrow = technicalTranslations.eyebrow || technicalContent.eyebrow || '';
  const baseTechnicalArticles = technicalContent.content || [];
  const translatedTechnicalArticles = Array.isArray(technicalTranslations.content) ? technicalTranslations.content : [];
  const technicalArticles = baseTechnicalArticles.map((article, idx) => ({
    ...article,
    ...(translatedTechnicalArticles[idx] || {}),
  }));
  const resultsData = caseStudy?.results || {};
  const resultsContent = caseStudyContent.results || {};
  const resultsEyebrow = resultsContent.eyebrow || resultsData.eyebrow || '';
  const resultsAchievements = Array.isArray(resultsContent.achievements)
    ? resultsContent.achievements
    : (resultsData.achievements || []);
  const mechanicSummaryData = caseStudy?.mechanicSummary || null;
  const mechanicSummarySymptoms = mechanicSummaryData?.symptoms || [];
  const mechanicSummaryRecommendation = mechanicSummaryData?.recommendation || '';
  const mechanicSummaryConsequence = mechanicSummaryData?.consequence || '';
  const mechanicSummaryAuthor = mechanicSummaryData?.author || '';

  // 404 handling
  if (!caseStudy || caseStudy.brandSlug !== brandSlug) {
    return (
      <div className={styles.notFound}>
        <h1>{t('brands.caseStudy.not_found.title')}</h1>
        <p>{t('brands.caseStudy.not_found.message')}</p>
        <Link to={`/brands/${brandSlug}`}>{t('brands.caseStudy.not_found.back', { brand: brandDisplayName })}</Link>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link to="/brands">{t('brands.caseStudy.breadcrumb.all_brands')}</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <Link to={`/brands/${brandSlug}`}>{brandDisplayName}</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{t('brands.caseStudy.breadcrumb.case')}</span>
      </nav>

      {/* Hero */}
      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.articleTitle}>{caseStudyTitle}</h1>

            {/* Article Meta */}
            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="2" x2="9" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="15" y1="2" x2="15" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {caseStudy.date}
              </span>
              <span className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {caseStudy.readTime}
              </span>
              <span className={styles.metaItem}>
                {t('brands.caseStudy.hero.vehicle_meta', {
                  year: caseStudy.vehicle.year,
                  make: caseStudy.vehicle.make,
                  model: caseStudy.vehicle.model,
                })}
              </span>
            </div>
          </div>

          {/* Cover Image */}
          <div className={styles.coverImage}>
            <div className={styles.coverImagePlaceholder}>
              {/* TODO: Replace with actual cover image */}
            </div>
          </div>
        </header>

        {/* Vehicle Details */}
        <section className={styles.vehicleSection}>
          <div className={styles.vehicleGrid}>
            <div className={styles.vehicleDetail}>
              <span className={styles.detailLabel}>{t('brands.caseStudy.sections.vehicle_labels.year')}</span>
              <span className={styles.detailValue}>{caseStudy.vehicle.year}</span>
            </div>
            <div className={styles.vehicleDetail}>
              <span className={styles.detailLabel}>{t('brands.caseStudy.sections.vehicle_labels.make_model')}</span>
              <span className={styles.detailValue}>{caseStudy.vehicle.model}</span>
            </div>
            <div className={styles.vehicleDetail}>
              <span className={styles.detailLabel}>{t('brands.caseStudy.sections.vehicle_labels.mileage')}</span>
              <span className={styles.detailValue}>{caseStudy.vehicle.mileage.toLocaleString()} mi</span>
            </div>
            <div className={styles.vehicleDetail}>
              <span className={styles.detailLabel}>Author</span>
              <span className={styles.detailValue}>—</span>
            </div>
        </div>
      </section>

        {/* Problem Statement */}
        <section className={styles.contentSection}>
          <span className={styles.sectionEyebrow}>{problemEyebrow}</span>
          <h2 className={styles.sectionTitle}>{problemTitle}</h2>
          {problemDescriptions.map((para, idx) => (
            <p key={idx} className={styles.paragraph}>{para}</p>
          ))}

          {/* Symptoms */}
          {problemSymptoms.length > 0 && (
            <div className={styles.symptomsList}>
              <h3 className={styles.listTitle}>{t('brands.caseStudy.sections.problem.symptoms')}</h3>
              <ul>
                {problemSymptoms.map((symptom, idx) => (
                  <li key={idx}>{symptom}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Fault Codes */}
          {problemFaultCodes.length > 0 && (
            <div className={styles.faultCodes}>
              <h3 className={styles.listTitle}>{t('brands.caseStudy.sections.problem.fault_codes')}</h3>
              <div className={styles.codeList}>
                {problemFaultCodes.map((code, idx) => {
                  const [codeNumber, ...codeDescParts] = `${code}`.split(':');
                  const codeDescription = codeDescParts.join(':').trim();
                  const displayText = codeDescription || codeNumber.trim();
                  return (
                    <div key={idx} className={styles.code}>
                      <span className={styles.codeDescription}>{displayText}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Diagnosis */}
        <section className={styles.contentSection}>
          <span className={styles.sectionEyebrow}>{diagnosisEyebrow}</span>
          <h2 className={styles.sectionTitle}>{diagnosisTitle}</h2>

          {diagnosisSteps.map((step, idx) => (
            <div key={idx} className={styles.diagnosisStep}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.paragraph}>{step.description}</p>
            </div>
          ))}

          <div className={styles.conclusion}>
            <strong>{t('brands.caseStudy.sections.diagnosis.conclusion')}:</strong> {diagnosisConclusion}
          </div>
        </section>

        {/* Solution */}
        <section className={styles.contentSection}>
          <span className={styles.sectionEyebrow}>{solutionEyebrow}</span>
          <h2 className={styles.sectionTitle}>{solutionTitle}</h2>
          <p className={styles.paragraph}>{solutionApproach}</p>

          {solutionProcedures.map((procedure, idx) => (
            <div key={idx} className={styles.procedure}>
              <div className={styles.procedureHeader}>
                <h3 className={styles.procedureTitle}>{procedure.title}</h3>
              </div>
              <p className={styles.procedureDescription}>{procedure.description}</p>

              {procedure.partsUsed && procedure.partsUsed.length > 0 && (
                <div className={styles.partsUsed}>
                  <strong>{t('brands.caseStudy.sections.solution.parts_used')}:</strong>
                  <ul>
                    {procedure.partsUsed.map((part, pIdx) => (
                      <li key={pIdx}>{part}</li>
                    ))}
                  </ul>
                </div>
              )}

              {procedure.toolsUsed && procedure.toolsUsed.length > 0 && (
                <div className={styles.partsUsed}>
                  <strong>{t('brands.caseStudy.sections.solution.tools_used')}:</strong>
                  <ul>
                    {procedure.toolsUsed.map((tool, tIdx) => (
                      <li key={tIdx}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}

              {procedure.result && (
                <div className={styles.procedureResult}>
                  <strong>{t('brands.caseStudy.sections.solution.result')}:</strong> {procedure.result}
                </div>
              )}
            </div>
          ))}

        </section>

        {/* Technical Insights */}
        {technicalArticles.length > 0 && (
          <section className={styles.contentSection}>
            <span className={styles.sectionEyebrow}>{technicalEyebrow}</span>
            <h2 className={styles.sectionTitle}>{technicalTitle}</h2>

            {technicalArticles.map((insight, idx) => (
              <div key={idx} className={styles.insight}>
                <h3 className={styles.insightHeading}>{insight.heading}</h3>
                <p className={styles.paragraph}>{insight.text}</p>
              </div>
            ))}

            {caseStudy?.technicalInsights?.images && (
              <div className={styles.insightImages}>
                {caseStudy.technicalInsights.images.map((image, idx) => (
                  <img key={idx} src={image} alt="" />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Results */}
        <section className={styles.resultsSection}>
          <span className={styles.sectionEyebrow}>{resultsEyebrow}</span>
          <h2 className={styles.sectionTitle}>{resultsTitle}</h2>

          {resultsAchievements.length > 0 && (
            <ul className={styles.achievementsList}>
              {resultsAchievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          )}

        </section>

      </article>

      {/* Mechanic's Expert Summary */}
      {mechanicSummaryData && (
        <section className={styles.mechanicSummarySection}>
          <div className={styles.mechanicSummaryContainer}>
            <div className={styles.mechanicSummaryHeader}>
              <h2 className={styles.mechanicSummaryTitle}>
                {t('brands.caseStudy.sections.mechanic_summary.title')}
              </h2>
            </div>

            <div className={styles.mechanicSummaryContent}>
              <div className={styles.mechanicSummaryBlock}>
                <h3 className={styles.mechanicSummarySubtitle}>
                  {t('brands.caseStudy.sections.mechanic_summary.subtitle')}
                </h3>
                <ul className={styles.mechanicSummarySymptoms}>
                  {mechanicSummarySymptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.mechanicSummaryWarning}>
                <p className={styles.mechanicSummaryRecommendation}>
                  <strong>{t('brands.caseStudy.sections.mechanic_summary.recommendation')}</strong> {mechanicSummaryRecommendation}
                </p>
                {mechanicSummaryConsequence && (
                  <p className={styles.mechanicSummaryConsequence}>
                    <strong>{t('brands.caseStudy.sections.mechanic_summary.consequence')}</strong> {mechanicSummaryConsequence}
                  </p>
                )}
              </div>

              <div className={styles.mechanicSummaryFooter}>
                <span className={styles.mechanicSummaryAuthor}>— {mechanicSummaryAuthor}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.sectionTitle}>{t('brands.caseStudy.sections.related')}</h2>
            <div className={styles.relatedGrid}>
              {relatedCases.map((related) => (
                <Link
                  key={related.id}
                  to={`/brands/${related.brandSlug}/${related.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImage}>
                    <div className={styles.relatedImagePlaceholder} />
                    <div className={styles.relatedCategory}>
                      {getLocalized(`caseStudiesData.${related.id}.category`, related.category)}
                    </div>
                  </div>
                  <div className={styles.relatedContent}>
                    <h3 className={styles.relatedTitle}>
                      {getLocalized(`caseStudiesData.${related.id}.title`, related.title)}
                    </h3>
                    <p className={styles.relatedSubtitle}>
                      {getLocalized(`caseStudiesData.${related.id}.subtitle`, related.subtitle)}
                    </p>
                    <div className={styles.relatedMeta}>
                      {related.vehicle.year} {related.vehicle.model}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{t('brands.caseStudy.sections.cta.title')}</h2>
          <p className={styles.ctaSubtitle}>
            {t('brands.caseStudy.sections.cta.subtitle')}
          </p>
          <div className={styles.ctaButtons}>
            <a href="#booking" className={styles.primaryButton}>
              {t('brands.caseStudy.sections.cta.book')}
            </a>
            <Link to={`/brands/${brandSlug}`} className={styles.secondaryButton}>
              {t('brands.caseStudy.sections.cta.more', { brand: brandDisplayName })}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

