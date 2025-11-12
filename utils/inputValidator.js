/**
 * Input Validator Utility
 * Provides input validation and sanitization
 */

/**
 * Validates URL parameters
 * @param {string} param - The parameter to validate
 * @returns {string} - Sanitized parameter
 */
export const validateUrlParam = (param) => {
  if (!param) return '';

  // Remove any potentially dangerous characters
  return String(param)
    .replace(/[<>\"']/g, '') // Remove HTML special chars
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .replace(/data:/gi, '') // Remove data protocol
    .trim();
};

/**
 * Validates and sanitizes search input
 * @param {string} input - The search input
 * @returns {string} - Sanitized input
 */
export const validateSearchInput = (input) => {
  if (!input) return '';

  return String(input)
    .replace(/[<>\"'`]/g, '')
    .trim()
    .substring(0, 255); // Limit length
};

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).toLowerCase());
};

/**
 * Validates phone number
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if valid phone
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(String(phone)) && String(phone).replace(/\D/g, '').length >= 10;
};

/**
 * Sanitizes HTML content (escapes HTML entities)
 * @param {string} text - The text to sanitize
 * @returns {string} - Sanitized text
 */
export const sanitizeHtml = (text) => {
  if (!text) return '';

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return String(text).replace(/[&<>\"']/g, char => map[char]);
};

/**
 * Validates object properties against schema
 * @param {object} obj - The object to validate
 * @param {object} schema - The validation schema
 * @returns {boolean} - True if object matches schema
 */
export const validateObject = (obj, schema) => {
  if (!obj || typeof obj !== 'object') return false;

  for (const [key, rule] of Object.entries(schema)) {
    const value = obj[key];

    // Check required field
    if (rule.required && !value) {
      console.warn(`Required field missing: ${key}`);
      return false;
    }

    // Check type
    if (value && rule.type && typeof value !== rule.type) {
      console.warn(`Invalid type for field: ${key}`);
      return false;
    }

    // Check length (for strings)
    if (rule.minLength && String(value).length < rule.minLength) {
      console.warn(`Field too short: ${key}`);
      return false;
    }

    if (rule.maxLength && String(value).length > rule.maxLength) {
      console.warn(`Field too long: ${key}`);
      return false;
    }

    // Check pattern (for regex)
    if (rule.pattern && !rule.pattern.test(value)) {
      console.warn(`Field doesn't match pattern: ${key}`);
      return false;
    }
  }

  return true;
};

export default {
  validateUrlParam,
  validateSearchInput,
  validateEmail,
  validatePhone,
  sanitizeHtml,
  validateObject
};
