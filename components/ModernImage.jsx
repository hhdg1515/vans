import React, { useState } from 'react';

/**
 * ModernImage Component
 * Serves WebP/AVIF formats with JPG fallback for maximum browser compatibility
 * WebP reduces file sizes by 25-35%, AVIF by 30-50% compared to JPG
 * Dramatically improves load time especially on slow connections
 *
 * Props:
 * - src: JPG/PNG fallback image URL
 * - srcWebp: WebP image URL (optional, recommended)
 * - srcAvif: AVIF image URL (optional, most optimized)
 * - alt: Alt text for accessibility (required)
 * - className: Optional CSS class
 * - style: Optional inline styles
 * - onLoad: Optional callback when image loads
 */
function ModernImage({
  src,
  srcWebp,
  srcAvif,
  alt,
  className = '',
  style = {},
  onLoad
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <picture>
      {/* AVIF format - Most optimized (30-50% smaller than JPG) */}
      {srcAvif && <source srcSet={srcAvif} type="image/avif" />}

      {/* WebP format - Wide browser support (25-35% smaller than JPG) */}
      {srcWebp && <source srcSet={srcWebp} type="image/webp" />}

      {/* JPG/PNG fallback - Universal browser support */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'modern-image-loaded' : 'modern-image-loading'}`}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0.7,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={handleImageLoad}
      />
    </picture>
  );
}

export default React.memo(ModernImage);
