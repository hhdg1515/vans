import React, { useEffect, useRef, useState } from 'react';

/**
 * LazyBackgroundImage Component
 * Lazy-loads background images using Intersection Observer API.
 * More efficient than loading all images upfront, especially for long pages.
 *
 * Props:
 * - src: Background image URL
 * - children: Child elements to render on top of the background
 * - className: Optional CSS class
 * - style: Optional inline styles
 */
function LazyBackgroundImage({ src, children, className = '', style = {} }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      // Fallback: Load immediately if not supported
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Preload the image
            const img = new Image();
            img.onload = () => {
              setIsLoaded(true);
              observer.unobserve(entry.target);
            };
            img.src = src;
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        backgroundImage: isLoaded ? `url(${src})` : 'none',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      {children}
    </div>
  );
}

export default React.memo(LazyBackgroundImage);
