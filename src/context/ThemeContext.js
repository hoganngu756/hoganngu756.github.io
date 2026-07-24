import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

// Saved choice wins; otherwise fall back to whatever the OS is set to.
const getInitialTheme = () => {
  if (typeof window === 'undefined') return true;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') return false;
  if (saved === 'dark') return true;

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // Sync the class only. Persisting happens in toggleTheme, so that a visitor
  // who never touched the switch keeps following their OS setting.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  // Follow the OS if the visitor has never picked a theme here.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) setIsDark(e.matches);
    };

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () =>
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
