import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import React from 'react';
import App from './App';

test('renders Hogan Nguyen heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /Hogan Nguyen/i });
  expect(headingElement).toBeInTheDocument();
});
