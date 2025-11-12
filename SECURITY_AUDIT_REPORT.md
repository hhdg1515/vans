# Security Audit Report
**Project:** WSC Luxury Auto Care Website
**Date:** 2025-11-12
**Auditor:** Security Professional Review
**Scope:** Complete codebase security assessment

---

## Executive Summary

This report presents findings from a comprehensive security review of the WSC Luxury Auto Care website codebase. The application is a React-based single-page application (SPA) built with Vite, serving as a luxury automotive service showcase website.

**Overall Risk Level:** 🟡 **MODERATE**

### Key Statistics
- **Critical Vulnerabilities:** 0
- **High Severity Issues:** 2
- **Medium Severity Issues:** 5
- **Low Severity Issues:** 4
- **Informational:** 3

---

## 🔴 HIGH SEVERITY VULNERABILITIES

### 1. Prototype Pollution in lodash.pick (CVE)
**Severity:** HIGH
**CVSS Score:** 7.4
**Location:** `node_modules/lodash.pick` (via miragejs@0.1.46)
**File:** `package.json:11`

**Description:**
The project uses miragejs@0.1.46, which depends on lodash.pick@4.4.0. This version contains a known prototype pollution vulnerability (GHSA-p6mc-m468-83gw).

**Impact:**
- Potential for prototype pollution attacks
- Could allow attackers to inject properties into Object.prototype
- May lead to denial of service or property injection

**Evidence:**
```json
"lodash.pick": {
  "severity": "high",
  "via": [{
    "source": 1106907,
    "title": "Prototype Pollution in lodash",
    "cvss": { "score": 7.4 }
  }]
}
```

**Recommendation:**
Update miragejs to version 0.1.48 or later:
```bash
npm install miragejs@^0.1.48
```

---

### 2. Vite Path Traversal Vulnerability
**Severity:** MODERATE
**Location:** `vite@7.1.x` (using "latest")
**File:** `package.json:16`

**Description:**
Using `vite: "latest"` resulted in installation of vulnerable version (7.1.0-7.1.10) with path traversal vulnerability on Windows (GHSA-93m4-6634-74q7).

**Impact:**
- server.fs.deny bypass via backslash on Windows
- Potential unauthorized file system access
- Path traversal attacks (CWE-22)

**Recommendation:**
Pin Vite to a secure version:
```bash
npm install vite@^7.2.2
```

---

## 🟠 MEDIUM SEVERITY ISSUES

### 3. Missing Input Validation on URL Parameters
**Severity:** MEDIUM
**Location:** Multiple files using `useParams()`
**Files:**
- `pages/Brands/BrandDetail.jsx:9`
- `pages/Brands/CaseStudyDetail.jsx:9`

**Description:**
URL parameters (`brandSlug`, `caseStudySlug`) are used directly without validation before being passed to lookup functions. While React Router provides some protection, there's no explicit sanitization.

**Code Example:**
```javascript
// pages/Brands/BrandDetail.jsx:9-10
const { brandSlug } = useParams();
const brand = getBrandBySlug(brandSlug);
```

**Impact:**
- Potential for injection attacks if data functions aren't properly secured
- No rate limiting on failed lookups (potential for enumeration attacks)
- Could expose information about valid/invalid slugs

**Recommendation:**
```javascript
// Add validation
const { brandSlug } = useParams();
const sanitizedSlug = brandSlug?.toLowerCase().replace(/[^a-z0-9-]/g, '');
if (!sanitizedSlug || sanitizedSlug.length > 50) {
  return <NotFound />;
}
const brand = getBrandBySlug(sanitizedSlug);
```

---

### 4. Missing Content Security Policy (CSP)
**Severity:** MEDIUM
**Location:** `index.html`
**File:** `index.html:1-9`

**Description:**
No Content Security Policy headers are configured in the HTML file or Vite configuration.

**Impact:**
- Vulnerable to XSS attacks if malicious scripts are injected
- No protection against clickjacking
- No control over resource loading sources

**Recommendation:**
Add CSP meta tag to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://acuityscheduling.com;
  frame-src https://acuityscheduling.com https://*.squarespace.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
">
```

---

### 5. Hardcoded External URLs Without Validation
**Severity:** MEDIUM
**Location:** Multiple components
**Files:**
- `components/luxury/booking/BookingSection.jsx:59`
- `components/luxury/booking/BookingSection.jsx:74`
- `pages/Brands/BrandDetail.jsx:291`
- `pages/Brands/BrandDetail.jsx:353`

**Description:**
External URLs (booking systems, phone numbers, social media) are hardcoded without validation.

**Code Examples:**
```javascript
// Placeholder URL in production code
href="https://your-shop.squarespace.com/schedule"

// Unvalidated external link
href="https://www.xiaohongshu.com/user/profile/wscauto"

// Phone number without validation
href="tel:+13105551234"
```

**Impact:**
- Placeholder URLs in production could confuse users
- No validation that external URLs are legitimate
- Potential for URL hijacking if domains expire

**Recommendation:**
1. Move URLs to environment variables
2. Add URL validation function
3. Remove placeholder URLs before deployment

---

### 6. Missing HTTP Security Headers Configuration
**Severity:** MEDIUM
**Location:** `vite.config.js`
**File:** `vite.config.js:1-8`

**Description:**
No security headers configured in Vite. Missing:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

**Recommendation:**
Add security headers to `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  }
})
```

---

### 7. Inconsistent External Link Security
**Severity:** MEDIUM
**Location:** Various components
**Files:**
- `pages/Brands/BrandDetail.jsx:291-294` ✅ (has rel="noopener noreferrer")
- `components/luxury/booking/BookingSection.jsx:59-62` ✅ (has rel="noopener noreferrer")

**Description:**
Most external links properly use `rel="noopener noreferrer"`, but should be audited for consistency.

**Impact:**
- Tabnabbing attacks (window.opener manipulation)
- Referrer leakage
- Performance issues

**Recommendation:**
Create a reusable ExternalLink component:
```javascript
export function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
```

---

## 🟡 LOW SEVERITY ISSUES

### 8. No Error Boundary Implementation
**Severity:** LOW
**Location:** Application root
**File:** `index.jsx:21-49`

**Description:**
No React Error Boundary to catch and handle runtime errors gracefully.

**Impact:**
- Entire app crashes on unhandled errors
- Poor user experience
- Potential information disclosure through error messages

**Recommendation:**
Implement Error Boundary:
```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log to error reporting service
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

### 9. Static Data Files Expose Business Logic
**Severity:** LOW
**Location:** `/data/luxury/*.js`
**Files:**
- `data/luxury/brand-details.js`
- `data/luxury/case-studies.js`
- `data/luxury/services.js`

**Description:**
All business data is stored in client-side JavaScript files, fully exposed to users.

**Impact:**
- Complete visibility of all data structures
- Easy to scrape all content
- Competitors can easily clone content

**Note:** This is acceptable for a static marketing site but should be considered for future API migration.

---

### 10. No Rate Limiting on Client-Side Routing
**Severity:** LOW
**Location:** Router configuration
**File:** `index.jsx:24-46`

**Description:**
No rate limiting or throttling on route changes or data fetching.

**Impact:**
- Potential for route enumeration
- Could be used to DOS the application through rapid navigation

**Recommendation:**
Consider adding rate limiting if backend APIs are added:
```javascript
import { throttle } from 'lodash';

const throttledFetch = throttle(fetchData, 1000);
```

---

### 11. Language Context Vulnerable to XSS (Theoretical)
**Severity:** LOW
**Location:** `src/contexts/LanguageContext.jsx`
**File:** `src/contexts/LanguageContext.jsx:6`

**Description:**
Language is stored in state without validation. If this were persisted to localStorage without sanitization, it could be exploited.

**Current Code:**
```javascript
const [language, setLanguage] = useState('en'); // 'en' or 'zh'
```

**Recommendation:**
Add validation if persisting to storage:
```javascript
const VALID_LANGUAGES = ['en', 'zh'];
const [language, setLanguage] = useState(() => {
  const stored = localStorage.getItem('language');
  return VALID_LANGUAGES.includes(stored) ? stored : 'en';
});
```

---

## 📊 INFORMATIONAL FINDINGS

### 12. MirageJS Mock Server in Production Build
**Severity:** INFORMATIONAL
**Location:** `index.jsx:19`
**File:** `server.js:1-18`

**Description:**
MirageJS mock server is imported in main entry point. Ensure this is excluded from production builds.

**Recommendation:**
```javascript
// index.jsx
if (import.meta.env.DEV) {
  await import('./server');
}
```

---

### 13. No HTTPS Enforcement
**Severity:** INFORMATIONAL
**Location:** Deployment configuration

**Description:**
No visible HTTPS enforcement or redirect configuration.

**Recommendation:**
Configure deployment platform to:
1. Enforce HTTPS
2. Enable HSTS headers
3. Redirect HTTP to HTTPS

---

### 14. Inline Styles with User Data
**Severity:** INFORMATIONAL
**Location:** Multiple components
**Files:**
- `pages/Brands/BrandDetail.jsx:64-68`
- `pages/Brands/BrandDetail.jsx:104-107`
- `pages/Brands/BrandDetail.jsx:222`

**Description:**
Using inline styles with data from JSON files. React protects against XSS in style attributes, but this should be monitored.

**Code Example:**
```javascript
style={{
  backgroundImage: brand.hero.image
    ? `url(${brand.hero.image})`
    : 'none'
}}
```

**Note:** React automatically sanitizes this, but be cautious if data sources change.

---

## ✅ POSITIVE SECURITY PRACTICES FOUND

1. **No dangerouslySetInnerHTML Usage**
   ✅ No instances of `dangerouslySetInnerHTML` found in the codebase

2. **Proper .gitignore Configuration**
   ✅ `.env` files, `node_modules`, and sensitive files are excluded (`.gitignore:12-16`)

3. **No eval() or Function() Constructor**
   ✅ No dynamic code execution found

4. **React's Built-in XSS Protection**
   ✅ All user data rendered through React's safe rendering

5. **External Links Properly Secured**
   ✅ Most external links use `rel="noopener noreferrer"`

6. **No Hardcoded Secrets**
   ✅ No API keys, passwords, or secrets found in code

7. **Static Asset Handling**
   ✅ Images and assets properly organized in public directory

8. **Type Safety Considerations**
   ✅ Defensive checks for undefined/null values throughout components

---

## 🎯 PRIORITIZED REMEDIATION PLAN

### Immediate (Fix within 24-48 hours)
1. ✅ Update `miragejs` to 0.1.48+ (HIGH - Prototype pollution)
2. ✅ Update `vite` to 7.2.2+ (MODERATE - Path traversal)
3. ✅ Add Content Security Policy headers

### Short-term (Fix within 1 week)
4. ✅ Add input validation for URL parameters
5. ✅ Configure HTTP security headers in Vite
6. ✅ Remove placeholder URLs from production code
7. ✅ Add Error Boundary

### Medium-term (Fix within 1 month)
8. ✅ Create ExternalLink component for consistency
9. ✅ Move URLs to environment variables
10. ✅ Add HTTPS enforcement configuration

### Long-term (Consider for future)
11. 🔄 Implement API backend for sensitive data
12. 🔄 Add rate limiting if APIs are introduced
13. 🔄 Implement monitoring and logging
14. 🔄 Add security scanning to CI/CD pipeline

---

## 📋 SECURITY CHECKLIST FOR DEPLOYMENT

Before deploying to production:

- [ ] Update all vulnerable dependencies
- [ ] Add Content Security Policy
- [ ] Configure HTTP security headers
- [ ] Replace all placeholder URLs
- [ ] Remove or conditionally load MirageJS
- [ ] Enable HTTPS enforcement
- [ ] Configure HSTS headers
- [ ] Test all external links
- [ ] Implement Error Boundary
- [ ] Add error logging/monitoring
- [ ] Review and sanitize all user inputs
- [ ] Test on multiple browsers
- [ ] Perform penetration testing
- [ ] Document security procedures

---

## 🔐 SECURITY RECOMMENDATIONS SUMMARY

### Dependencies
```bash
# Fix vulnerable dependencies
npm install miragejs@^0.1.48
npm install vite@^7.2.2
npm audit fix
```

### Configuration
Add security headers, CSP, and proper error handling as detailed above.

### Code Changes
Implement input validation, remove hardcoded values, and add Error Boundaries.

### Deployment
Ensure HTTPS enforcement, security headers, and monitoring are in place.

---

## 📞 NEXT STEPS

1. Review this report with the development team
2. Prioritize fixes based on severity and business impact
3. Implement immediate fixes for HIGH/MODERATE vulnerabilities
4. Schedule security review after fixes are implemented
5. Establish ongoing security practices (dependency scanning, code review)

---

## APPENDIX A: Vulnerable Dependency Details

### NPM Audit Output
```json
{
  "vulnerabilities": {
    "lodash.pick": {
      "severity": "high",
      "cvss": 7.4,
      "via": "GHSA-p6mc-m468-83gw"
    },
    "miragejs": {
      "severity": "high",
      "range": "0.1.30 - 0.1.47",
      "fix": "0.1.48"
    },
    "vite": {
      "severity": "moderate",
      "range": "7.1.0 - 7.1.10",
      "fix": "7.2.2"
    }
  }
}
```

---

## APPENDIX B: Files Reviewed

**Entry Points:**
- index.jsx, index.html, server.js, vite.config.js

**Components:** (32+ files)
- All files in /components/luxury/
- All files in /pages/

**Data Files:** (9 files)
- All files in /data/luxury/

**Configuration:**
- package.json, .gitignore, vite.config.js

**Total Files Analyzed:** 50+

---

**Report End**

*This security audit was conducted using industry-standard security assessment methodologies including OWASP Top 10, CWE/SANS Top 25, and React Security Best Practices.*
