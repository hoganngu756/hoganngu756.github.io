import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup, FaLock } from 'react-icons/fa';
import Reveal from './Reveal';
import { projects, projectCategories } from '../data/content';

const Projects = ({ selectedSkill, setSelectedSkill }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const modalRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const filteredProjects = projects.filter((project) => {
    const categoryMatches = activeCategory === 'All' || project.category === activeCategory;
    const skillMatches =
      !selectedSkill || project.tech.some((t) => t.toLowerCase() === selectedSkill.toLowerCase());
    return categoryMatches && skillMatches;
  });

  // Modal: lock background scroll, close on Escape, trap Tab, and restore focus
  // to whatever opened it.
  useEffect(() => {
    if (!selectedProject) return;

    lastFocusedRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    modalRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      if (e.key !== 'Tab') return;

      const focusables = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (lastFocusedRef.current instanceof HTMLElement) lastFocusedRef.current.focus();
    };
  }, [selectedProject]);

  const handleCardKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <Reveal className="flex items-center gap-4 mb-8">
        <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Projects
        </h2>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </Reveal>

      {/* Filter Tabs & Active Skill Notice */}
      <Reveal delay={80} className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Filter Badge indicator if active */}
        {selectedSkill && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono">
            <span>
              Filtered by: <strong>{selectedSkill}</strong>
            </span>
            <button
              onClick={() => setSelectedSkill(null)}
              className="hover:text-blue-800 dark:hover:text-blue-200 ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              aria-label={`Clear ${selectedSkill} filter`}
            >
              <FaTimes size={12} />
            </button>
          </div>
        )}
      </Reveal>

      {/* Project Cards Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-800">
          <FaLayerGroup size={24} className="mx-auto text-slate-400 mb-2" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No projects found matching the selected filter.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              if (setSelectedSkill) setSelectedSkill(null);
            }}
            className="mt-3 text-xs text-blue-600 dark:text-blue-400 underline font-medium"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`${project.title} — open details`}
                className="group h-full flex flex-col justify-between p-6 rounded-xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:transform-none hover:shadow-xl dark:hover:shadow-blue-900/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => handleCardKeyDown(e, project)}
              >
                <div>
                  {/* Title & Links */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <div
                      className="flex items-center gap-3 text-slate-500 dark:text-slate-400 flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source on GitHub`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                        >
                          <FaGithub size={16} />
                        </a>
                      ) : (
                        <span
                          title="Source not public yet"
                          className="p-1 text-slate-300 dark:text-slate-600"
                        >
                          <FaLock size={13} />
                        </span>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="inline-block font-mono text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded mb-3">
                    {project.category}
                  </span>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags — real buttons so they're keyboard reachable */}
                <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                  {project.tech.map((t) => {
                    const isActive = selectedSkill && selectedSkill.toLowerCase() === t.toLowerCase();
                    return (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={!!isActive}
                        aria-label={`Filter projects by ${t}`}
                        onClick={() => setSelectedSkill && setSelectedSkill(isActive ? null : t)}
                        className={`font-mono text-[11px] px-2 py-0.5 rounded border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          isActive
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/60 hover:border-blue-500/40 hover:text-blue-500'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 rounded-2xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder shadow-2xl relative animate-slide-up focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FaTimes size={16} />
            </button>

            <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">
              {selectedProject.category}
            </span>

            <h3
              id="project-modal-title"
              className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 mt-3 mb-3"
            >
              {selectedProject.title}
            </h3>

            <div className="space-y-2 mb-6">
              {selectedProject.bullets.map((b, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                >
                  <span className="text-blue-500 mt-1" aria-hidden="true">
                    ▹
                  </span>
                  <span>{b}</span>
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-medium hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <FaGithub size={14} /> View Code
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">
                  <FaLock size={12} /> Source not public yet
                </span>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
