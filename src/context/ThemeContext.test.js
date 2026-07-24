import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeProvider, ThemeContext } from './ThemeContext';

// Lets each test pretend the OS is in light or dark mode.
const mockPrefersDark = (matches) => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-color-scheme: dark)' ? matches : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
};

const Probe = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>{isDark ? 'dark' : 'light'}</button>
  );
};

const renderProbe = () =>
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>
  );

beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = '';
});

describe('ThemeProvider', () => {
  it('follows the OS when the visitor has no saved preference', () => {
    mockPrefersDark(false);
    renderProbe();
    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  it('follows a dark OS preference', () => {
    mockPrefersDark(true);
    renderProbe();
    expect(screen.getByRole('button')).toHaveTextContent('dark');
  });

  it('lets a saved preference override the OS', () => {
    mockPrefersDark(true);
    localStorage.setItem('theme', 'light');
    renderProbe();
    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  it('does not persist anything until the visitor actually toggles', () => {
    mockPrefersDark(true);
    renderProbe();
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('persists the choice once toggled', () => {
    mockPrefersDark(true);
    renderProbe();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('keeps the dark class on <html> in sync', () => {
    mockPrefersDark(true);
    renderProbe();
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    fireEvent.click(screen.getByRole('button'));
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });
});
