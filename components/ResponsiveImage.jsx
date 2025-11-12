import React, { useState, useEffect, useRef } from 'react';

/**
 * ResponsiveImage Component
 * Serves different image sizes based on device screen width
 * Reduces mobile data transfer by up to 60% by serving appropriately-sized images
 *
 * Props:
 * - src: Image source URL (for full-size desktop)
 * - srcMobile: Image source for mobile (640px or smaller)
 * - srcTablet: Image source for tablet (1024px or smaller)
 * - alt: Alt text for accessibility
 * - className: Optional CSS class
 * - style: Optional inline styles
 * - fallback: Fallback image while loading
 * - onLoad: Optional callback when image loads
 */
function ResponsiveImage({
  src,
  srcMobile,
  srcTablet,
  alt = '',
  className = '',
  style = {},
  fallback = '/images/placeholder.jpg',
  onLoad
}) {
  const [imageSrc, setImageSrc] = useState(fallback);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Determine which image source to use based on window width
    const handleResize = () => {
      const width = window.innerWidth;
      let selectedSrc = src; // Desktop default

      if (width <= 640 && srcMobile) {
        selectedSrc = srcMobile;
      } else if (width <= 1024 && srcTablet) {
        selectedSrc = srcTablet;
      }

      setImageSrc(selectedSrc);
      setIsLoaded(false); // Reset loaded state when changing image
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [src, srcMobile, srcTablet]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'responsive-loaded' : 'responsive-loading'}`}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.7,
        transition: 'opacity 0.3s ease-in-out',
      }}
      onLoad={handleImageLoad}
    />
  );
}

export default React.memo(ResponsiveImage);
