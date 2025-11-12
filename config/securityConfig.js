/**
 * Security Configuration
 * Centralized security settings for the application
 */

// Whitelist of trusted external URLs
export const TRUSTED_EXTERNAL_URLS = {
  github: 'https://github.com',
  scrimba: 'https://scrimba.com',
  // Add more trusted URLs here
};

// Content Security Policy directives
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", 'data:', 'https:'],
  'font-src': ["'self'", 'data:'],
  'connect-src': ["'self'", 'https:'],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"]
};

// HTTP Security Headers
export const SECURITY_HEADERS = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=(),payment=()'
};

// Link security attributes
export const LINK_SECURITY_ATTRIBUTES = {
  rel: 'noopener noreferrer',
  target: '_blank'
};

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  enabled: true,
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // Limit each IP to 100 requests per windowMs
};

// Validation rules for common input types
export const VALIDATION_RULES = {
  email: {
    type: 'string',
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 254
  },
  url: {
    type: 'string',
    pattern: /^https?:\/\/.+/
  },
  slug: {
    type: 'string',
    pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    maxLength: 255
  },
  phone: {
    type: 'string',
    minLength: 10,
    maxLength: 20
  },
  text: {
    type: 'string',
    maxLength: 1000
  },
  title: {
    type: 'string',
    minLength: 1,
    maxLength: 255
  },
  description: {
    type: 'string',
    maxLength: 5000
  }
};

export default {
  TRUSTED_EXTERNAL_URLS,
  CSP_DIRECTIVES,
  SECURITY_HEADERS,
  LINK_SECURITY_ATTRIBUTES,
  RATE_LIMIT_CONFIG,
  VALIDATION_RULES
};
