import { useState, useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Types each phrase out, holds it, deletes it, moves to the next. Loops.
 *
 * When the user prefers reduced motion this skips the animation entirely and
 * just returns the first phrase in full.
 */
const useTypewriter = (phrases, { typeMs = 70, deleteMs = 35, holdMs = 1800 } = {}) => {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReduced || !phrases.length) return;

    const current = phrases[index % phrases.length];

    // Finished typing this phrase — hold it on screen, then start deleting.
    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(hold);
    }

    // Finished deleting — advance to the next phrase.
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const step = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteMs : typeMs
    );

    return () => clearTimeout(step);
  }, [text, deleting, index, phrases, typeMs, deleteMs, holdMs, prefersReduced]);

  if (prefersReduced) {
    return { text: phrases[0] ?? '', showCursor: false };
  }

  return { text, showCursor: true };
};

export default useTypewriter;
