import React, { useRef, useState, useEffect } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Fades + lifts its children into view the first time they cross the viewport.
 *
 * Reveals once and then unobserves — re-animating on every scroll-by gets
 * annoying fast. Falls back to plain visible content when the browser has no
 * IntersectionObserver or the user asked for reduced motion.
 */
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      // threshold 0 keeps this height-independent: a ratio-based threshold can
      // never be met by an element taller than the viewport / threshold, which
      // would strand it at opacity 0. The negative bottom margin is what delays
      // the trigger until the element is meaningfully on screen.
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <Tag
      ref={ref}
      className={`${
        prefersReduced
          ? ''
          : `transition-all duration-700 ease-out motion-reduce:transition-none ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`
      } ${className}`}
      style={prefersReduced ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
