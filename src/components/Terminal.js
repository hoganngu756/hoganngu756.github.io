import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { profile, experiences, education, projects, skillCategories } from '../data/content';

const PROMPT = 'visitor@hogan.dev:~$';

// Each line is { type: 'input' | 'output' | 'error' | 'accent', text }
const banner = [
  { type: 'accent', text: `${profile.name} — ${profile.role} @ ${profile.company}` },
  { type: 'output', text: `${profile.location} · MS CS @ UT Dallas` },
  { type: 'output', text: '' },
  { type: 'output', text: "Type 'help' to see what this thing does. Tab completes, ↑/↓ walks history." },
];

const Terminal = ({ onCopyEmail, setSelectedSkill }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [lines, setLines] = useState(banner);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(scrollToBottom, [lines, scrollToBottom]);

  const print = useCallback((newLines) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Command implementations. Each returns an array of output lines (or [] when
  // it handles its own side effects).
  const commands = {
    help: {
      description: 'list available commands',
      run: () => [
        { type: 'accent', text: 'Available commands' },
        ...Object.entries(commands).map(([name, cmd]) => ({
          type: 'output',
          text: `  ${name.padEnd(12)} ${cmd.description}`,
        })),
      ],
    },
    whoami: {
      description: 'a short introduction',
      run: () => [
        { type: 'accent', text: profile.name },
        { type: 'output', text: `${profile.role} at ${profile.company} · ${profile.location}` },
        { type: 'output', text: '' },
        { type: 'output', text: profile.bio },
      ],
    },
    ls: {
      description: 'list sections (try: ls projects)',
      run: (args) => {
        const target = args[0];
        if (!target) {
          return [{ type: 'output', text: 'experience/  projects/  skills/  education/  contact' }];
        }
        if (target.replace(/\/$/, '') === 'projects') {
          return projects.map((p) => ({
            type: 'output',
            text: `  ${p.id.padEnd(24)} ${p.category}`,
          }));
        }
        if (target.replace(/\/$/, '') === 'skills') {
          return skillCategories.map((c) => ({
            type: 'output',
            text: `  ${c.label}: ${c.items.join(', ')}`,
          }));
        }
        if (target.replace(/\/$/, '') === 'experience') {
          return experiences.map((e) => ({
            type: 'output',
            text: `  ${e.company.padEnd(20)} ${e.title} (${e.period})`,
          }));
        }
        if (target.replace(/\/$/, '') === 'education') {
          return education.map((e) => ({
            type: 'output',
            text: `  ${e.degree.padEnd(26)} ${e.school} — ${e.period}`,
          }));
        }
        return [{ type: 'error', text: `ls: ${target}: No such file or directory` }];
      },
    },
    cat: {
      description: 'read a project (try: cat tennis-analysis)',
      run: (args) => {
        const id = args[0];
        if (!id) return [{ type: 'error', text: 'cat: missing operand. Try `ls projects` first.' }];

        if (id === 'resume' || id === 'resume.pdf') {
          window.open(profile.resume, '_blank', 'noopener,noreferrer');
          return [{ type: 'accent', text: 'Opening resume.pdf in a new tab…' }];
        }

        const project = projects.find((p) => p.id === id);
        if (!project) {
          return [{ type: 'error', text: `cat: ${id}: No such file or directory` }];
        }

        return [
          { type: 'accent', text: project.title },
          { type: 'output', text: `[${project.category}] ${project.tech.join(' · ')}` },
          { type: 'output', text: '' },
          ...project.bullets.map((b) => ({ type: 'output', text: `  ▹ ${b}` })),
          { type: 'output', text: '' },
          {
            type: 'output',
            text: project.github ? `  repo: ${project.github}` : '  repo: private',
          },
          ...(project.demo ? [{ type: 'output', text: `  demo: ${project.demo}` }] : []),
        ];
      },
    },
    experience: {
      description: 'jump to the experience section',
      run: () => {
        scrollToSection('experience');
        return [{ type: 'output', text: 'Scrolling to experience…' }];
      },
    },
    projects: {
      description: 'jump to the projects section',
      run: () => {
        scrollToSection('projects');
        return [{ type: 'output', text: 'Scrolling to projects…' }];
      },
    },
    skills: {
      description: 'filter projects by a skill (try: skills Python)',
      run: (args) => {
        const skill = args.join(' ');
        if (!skill) {
          scrollToSection('skills');
          return [{ type: 'output', text: 'Scrolling to skills…' }];
        }

        const known = skillCategories
          .flatMap((c) => c.items)
          .find((s) => s.toLowerCase() === skill.toLowerCase());

        if (!known) {
          return [{ type: 'error', text: `skills: unknown skill '${skill}'. Try \`ls skills\`.` }];
        }

        if (setSelectedSkill) setSelectedSkill(known);
        scrollToSection('projects');
        return [{ type: 'output', text: `Filtering projects by ${known}…` }];
      },
    },
    contact: {
      description: 'copy my email / open my links',
      run: () => {
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(profile.email)
            .then(() => onCopyEmail && onCopyEmail('Email copied to clipboard!'))
            .catch(() => {});
        }
        return [
          { type: 'accent', text: `${profile.email}  (copied to clipboard)` },
          { type: 'output', text: `github:   ${profile.github}` },
          { type: 'output', text: `linkedin: ${profile.linkedin}` },
        ];
      },
    },
    theme: {
      description: 'toggle light/dark',
      run: () => {
        toggleTheme();
        return [{ type: 'output', text: `Theme set to ${isDark ? 'light' : 'dark'}.` }];
      },
    },
    sudo: {
      description: '???',
      run: () => [
        { type: 'error', text: 'visitor is not in the sudoers file. This incident will be reported.' },
      ],
    },
    clear: {
      description: 'clear the screen',
      run: () => null, // handled specially below
    },
  };

  const runCommand = (raw) => {
    const trimmed = raw.trim();
    const echo = { type: 'input', text: `${PROMPT} ${trimmed}` };

    if (!trimmed) {
      print([{ type: 'input', text: PROMPT }]);
      return;
    }

    setHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const [name, ...args] = trimmed.split(/\s+/);
    const command = commands[name.toLowerCase()];

    if (name.toLowerCase() === 'clear') {
      setLines([]);
      return;
    }

    if (!command) {
      print([
        echo,
        { type: 'error', text: `command not found: ${name}. Type 'help' for a list.` },
      ]);
      return;
    }

    print([echo, ...command.run(args)]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
      return;
    }

    // Tab-complete against the command list.
    if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      if (!partial) return;
      const matches = Object.keys(commands).filter((c) => c.startsWith(partial));
      if (matches.length === 1) {
        setInput(matches[0] + ' ');
      } else if (matches.length > 1) {
        print([
          { type: 'input', text: `${PROMPT} ${input}` },
          { type: 'output', text: matches.join('  ') },
        ]);
      }
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setInput(history[next]);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  };

  const lineClass = (type) => {
    if (type === 'input') return 'text-slate-500 dark:text-slate-500';
    if (type === 'error') return 'text-rose-600 dark:text-rose-400';
    if (type === 'accent') return 'text-blue-600 dark:text-blue-400 font-semibold';
    return 'text-slate-700 dark:text-slate-300';
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-lightBorder dark:border-darkBorder bg-lightCard dark:bg-darkCard shadow-lg"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-lightBorder dark:border-darkBorder bg-slate-100/80 dark:bg-slate-900/60">
        <span className="w-3 h-3 rounded-full bg-rose-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-emerald-400" />
        <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
          visitor@hogan.dev — zsh
        </span>
      </div>

      {/* Scrollback */}
      <div
        ref={scrollRef}
        className="h-72 overflow-y-auto px-4 py-3 font-mono text-[12px] leading-relaxed"
      >
        {lines.map((line, i) => (
          <div key={i} className={`whitespace-pre-wrap break-words ${lineClass(line.type)}`}>
            {line.text || ' '}
          </div>
        ))}

        {/* Live input line */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-emerald-600 dark:text-emerald-400 flex-shrink-0">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input. Type help for a list of commands."
            className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 font-mono text-[12px] p-0 caret-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
