import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds scroll-triggered animation classes.
 * Add 'anim anim-up' (or anim-fade, anim-left, anim-right, anim-scale) to any element.
 * Use 'anim-d1' through 'anim-d6' for staggered delays on siblings.
 */
export default function useScrollAnim() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const els = document.querySelectorAll('.anim');
    els.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
}

export { useScrollAnim };
