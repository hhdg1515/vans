/**
 * URL Validator Utility
 * Provides secure URL validation and sanitization
 */

// Whitelist of allowed domains
const ALLOWED_DOMAINS = [
  'localhost',
  'localhost:3000',
  'localhost:5173',
  'github.com',
  'scrimba.com',
  // Add your domains here
];

/**
 * Validates if a URL is safe and allowed
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if URL is safe, false otherwise
 */
export const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const urlObj = new URL(url);

    // Check if protocol is http or https
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return false;
    }

    // Check against whitelist for external URLs
    if (!isLocalPath(url)) {
      return ALLOWED_DOMAINS.some(domain =>
        urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
      );
    }

    return true;
  } catch (e) {
    // Invalid URL format
    return false;
  }
};

/**
 * Checks if a URL is a local path
 * @param {string} url - The URL to check
 * @returns {boolean} - True if it's a local path
 */
export const isLocalPath = (url) => {
  if (!url) return false;
  return url.startsWith('/') || url.startsWith('.') || url.startsWith('#');
};

/**
 * Sanitizes a URL by removing potentially dangerous characters
 * @param {string} url - The URL to sanitize
 * @returns {string} - Sanitized URL
 */
export const sanitizeUrl = (url) => {
  if (!url) return '';

  // Remove any script-like content
  const sanitized = url
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .trim();

  return sanitized;
};

/**
 * Safely opens an external link
 * @param {string} url - The URL to open
 * @param {string} target - The target (default: '_blank')
 */
export const safeOpenLink = (url, target = '_blank') => {
  if (!isValidUrl(url)) {
    console.error('Invalid or unsafe URL:', url);
    return;
  }

  const link = document.createElement('a');
  link.href = url;
  link.target = target;
  link.rel = 'noopener noreferrer'; // Prevent window.opener access
  link.click();
};

export default {
  isValidUrl,
  isLocalPath,
  sanitizeUrl,
  safeOpenLink,
};
