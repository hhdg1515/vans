import React from 'react';
import { isValidUrl, safeOpenLink } from '../utils/urlValidator';
import { LINK_SECURITY_ATTRIBUTES } from '../config/securityConfig';

/**
 * SafeLink Component
 * Provides secure external link handling with validation
 *
 * @param {string} href - The URL to link to
 * @param {string} children - The link text/content
 * @param {string} className - CSS classes
 * @param {function} onClick - Optional click handler
 * @param {object} props - Additional props
 */
const SafeLink = ({
  href,
  children,
  className = '',
  onClick,
  external = false,
  ...props
}) => {
  // Validate URL for external links
  if (external && !isValidUrl(href)) {
    console.warn(`Invalid external URL provided: ${href}`);
    return <span className={className} {...props}>{children}</span>;
  }

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    // For external links, ensure safe opening
    if (external && !e.defaultPrevented) {
      e.preventDefault();
      safeOpenLink(href);
    }
  };

  // For internal links
  if (!external) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // For external links with security attributes
  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      rel={LINK_SECURITY_ATTRIBUTES.rel}
      target={LINK_SECURITY_ATTRIBUTES.target}
      {...props}
    >
      {children}
    </a>
  );
};

export default SafeLink;
