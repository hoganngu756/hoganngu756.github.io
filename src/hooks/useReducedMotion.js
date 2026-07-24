import { useState, useEffect } from 'react';

// Tracks the user's prefers-reduced-motion setting, and keeps tracking it if
// they change it while the page is open.
const QUERY = '(prefers-reduced-motion: reduce)';

const useReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia(QUERY);
    const handleChange = (e) => setPrefersReduced(e.matches);

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
};

export default useReducedMotion;
