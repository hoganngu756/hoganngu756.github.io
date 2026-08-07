import React, { useState } from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Projects from './Projects';

// Every real project has a public repo now, so drop `github` from the first one
// to keep the private-repo branch covered.
vi.mock('../data/content', async (importOriginal) => {
  const actual = await importOriginal();
  const stripped = { ...actual.projects[0] };
  delete stripped.github;
  return { ...actual, projects: [stripped, ...actual.projects.slice(1)] };
});

// Wrapper that owns selectedSkill the way App does.
const Harness = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return <Projects selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />;
};

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn();
  document.body.style.overflow = '';
});

const openFirstProject = () => {
  fireEvent.click(screen.getByRole('button', { name: /Tennis Analysis System — open details/i }));
  return screen.getByRole('dialog');
};

describe('Projects', () => {
  it('renders every project by default', () => {
    render(<Harness />);
    expect(screen.getByText('Tennis Analysis System')).toBeInTheDocument();
    expect(screen.getByText('Document Security and Prompt Scanner')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes Resource and Cost Monitor')).toBeInTheDocument();
  });

  it('filters by category', () => {
    render(<Harness />);
    fireEvent.click(screen.getByRole('button', { name: 'Cloud & DevOps' }));
    expect(screen.getByText('Kubernetes Resource and Cost Monitor')).toBeInTheDocument();
    expect(screen.queryByText('Tennis Analysis System')).not.toBeInTheDocument();
  });

  it('filters by clicking a tech tag, and clears on a second click', () => {
    render(<Harness />);
    const tag = screen.getAllByRole('button', { name: /Filter projects by PyTorch/i })[0];

    fireEvent.click(tag);
    expect(screen.queryByText('Kubernetes Resource and Cost Monitor')).not.toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: /Filter projects by PyTorch/i })[0]);
    expect(screen.getByText('Kubernetes Resource and Cost Monitor')).toBeInTheDocument();
  });

  it('opens the detail modal with correct dialog semantics', () => {
    render(<Harness />);
    const dialog = openFirstProject();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAccessibleName('Tennis Analysis System');
  });

  it('opens the modal from the keyboard', () => {
    render(<Harness />);
    const card = screen.getByRole('button', { name: /Tennis Analysis System — open details/i });
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes on Escape', () => {
    render(<Harness />);
    openFirstProject();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('locks background scroll while open and restores it on close', () => {
    render(<Harness />);
    openFirstProject();
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('shows a private-repo state instead of a dead link', () => {
    render(<Harness />);
    const dialog = openFirstProject();
    expect(within(dialog).getByText(/Source not public yet/i)).toBeInTheDocument();
    expect(within(dialog).queryByRole('link', { name: /View Code/i })).not.toBeInTheDocument();
  });

  it('links to the repo when one exists', () => {
    render(<Harness />);
    fireEvent.click(
      screen.getByRole('button', { name: /Document Security and Prompt Scanner — open details/i })
    );
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('link', { name: /View Code/i })).toHaveAttribute(
      'href',
      'https://github.com/hoganngu756/pdf-prompt-scanner'
    );
  });
});
