import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Terminal from './Terminal';
import { ThemeProvider } from '../context/ThemeContext';

const renderTerminal = (props = {}) =>
  render(
    <ThemeProvider>
      <Terminal {...props} />
    </ThemeProvider>
  );

const type = (command) => {
  const input = screen.getByLabelText(/terminal input/i);
  fireEvent.change(input, { target: { value: command } });
  fireEvent.keyDown(input, { key: 'Enter' });
  return input;
};

beforeEach(() => {
  localStorage.clear();
  // jsdom has no layout engine; scrollIntoView isn't implemented.
  Element.prototype.scrollIntoView = vi.fn();
});

describe('Terminal', () => {
  it('shows the banner on mount', () => {
    renderTerminal();
    expect(screen.getByText(/Hogan Nguyen — AI Consultant Intern @ IBM/)).toBeInTheDocument();
  });

  it('lists every command under `help`', () => {
    renderTerminal();
    type('help');
    expect(screen.getByText(/Available commands/)).toBeInTheDocument();
    expect(screen.getByText(/whoami/)).toBeInTheDocument();
    expect(screen.getByText(/contact/)).toBeInTheDocument();
  });

  it('reports unknown commands as errors', () => {
    renderTerminal();
    type('definitelynotacommand');
    expect(screen.getByText(/command not found: definitelynotacommand/)).toBeInTheDocument();
  });

  it('prints project ids for `ls projects`', () => {
    renderTerminal();
    type('ls projects');
    expect(screen.getByText(/tennis-analysis/)).toBeInTheDocument();
    expect(screen.getByText(/k8s-resource-monitor/)).toBeInTheDocument();
  });

  it('reads a project with `cat`', () => {
    renderTerminal();
    type('cat pdf-security-scanner');
    expect(screen.getByText(/Document Security and Prompt Scanner/)).toBeInTheDocument();
    // Appears twice: once as the repo URL, once inside the demo URL.
    expect(screen.getAllByText(/pdf-prompt-scanner/).length).toBeGreaterThan(0);
  });

  it('reports private repos rather than linking nowhere', () => {
    renderTerminal();
    type('cat tennis-analysis');
    expect(screen.getByText(/repo: private/)).toBeInTheDocument();
  });

  it('errors on an unknown path for `cat`', () => {
    renderTerminal();
    type('cat nope');
    expect(screen.getByText(/cat: nope: No such file or directory/)).toBeInTheDocument();
  });

  it('filters projects by a known skill', () => {
    const setSelectedSkill = vi.fn();
    renderTerminal({ setSelectedSkill });
    type('skills Python');
    expect(setSelectedSkill).toHaveBeenCalledWith('Python');
  });

  it('rejects an unknown skill', () => {
    const setSelectedSkill = vi.fn();
    renderTerminal({ setSelectedSkill });
    type('skills Fortran');
    expect(screen.getByText(/unknown skill 'Fortran'/)).toBeInTheDocument();
    expect(setSelectedSkill).not.toHaveBeenCalled();
  });

  it('clears the scrollback with `clear`', () => {
    renderTerminal();
    expect(screen.getByText(/Hogan Nguyen — AI Consultant Intern @ IBM/)).toBeInTheDocument();
    type('clear');
    expect(screen.queryByText(/Hogan Nguyen — AI Consultant Intern @ IBM/)).not.toBeInTheDocument();
  });

  it('walks command history with ArrowUp', () => {
    renderTerminal();
    const input = type('whoami');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(input.value).toBe('whoami');
  });

  it('tab-completes a unique prefix', () => {
    renderTerminal();
    const input = screen.getByLabelText(/terminal input/i);
    fireEvent.change(input, { target: { value: 'wh' } });
    fireEvent.keyDown(input, { key: 'Tab' });
    // Completion adds a trailing space so you can type args straight away.
    expect(input.value).toBe('whoami ');
  });

  it('has a sense of humour about sudo', () => {
    renderTerminal();
    type('sudo rm -rf /');
    expect(screen.getByText(/not in the sudoers file/)).toBeInTheDocument();
  });
});
