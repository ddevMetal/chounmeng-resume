import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible].
 * Attach ref to the element you want to observe.
 * isVisible turns true once the element enters the viewport and stays true.
 */
export function useReveal(threshold = 0.08) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
