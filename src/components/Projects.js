import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup } from 'react-icons/fa';

const Projects = ({ selectedSkill, setSelectedSkill }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'tennis-analysis',
      title: 'Tennis Analysis System',
      category: 'AI & ML',
      description:
        'Computer vision pipeline that tracks tennis players and ball movement with 95.0% accuracy across 10,000+ video frames. Real-time speed calculations via optimized keypoint extraction.',
      details:
        'Built using OpenCV, PyTorch, and YOLOv8 keypoint detection models. Performs multi-object tracking (MOT) for players and court line detection to translate pixel coordinates into real-world court distance and calculate shot velocity dynamically.',
      tech: ['Python', 'PyTorch', 'YOLOv8', 'Pandas', 'OpenCV'],
      github: 'https://github.com/hoganngu756',
    },
    {
      id: 'pdf-security-scanner',
      title: 'Document Security Scanner',
      category: 'Full-Stack',
      description:
        'Dual-layer security engine using regex heuristics and the Gemini LLM API to detect prompt injections and jailbreaks in PDFs. Hardened against DoS with strict validation and upload limits.',
      details:
        'Combines deterministic heuristic filtering with async Gemini LLM prompt auditing to flag malicious injection vectors in user-uploaded PDF files. Features rate limiting, payload sanitization, and clean execution sandboxing.',
      tech: ['Java', 'React', 'Spring Boot', 'Gemini API', 'SQLite', 'JavaScript'],
      github: 'https://github.com/hoganngu756/pdf-prompt-scanner',
      demo: 'https://pdf-prompt-scanner.vercel.app',
    },
    {
      id: 'k8s-resource-monitor',
      title: 'Kubernetes Resource Monitor',
      category: 'Cloud & DevOps',
      description:
        'Automated pipeline querying container metrics from Prometheus, mapping them against pricing models to flag over-provisioned workloads and generate right-sizing reports.',
      details:
        'Integrates Prometheus metric collection with custom cost estimation formulas based on cloud instance pricing APIs. Provides automated slack notifications and right-sizing recommendations for CPU/Memory requests.',
      tech: ['Python', 'Kubernetes', 'Prometheus', 'OpenCost', 'Docker'],
      github: 'https://github.com/hoganngu756',
    },
  ];

  const categories = ['All', 'AI & ML', 'Full-Stack', 'Cloud & DevOps'];

  const filteredProjects = projects.filter((project) => {
    const categoryMatches = activeCategory === 'All' || project.category === activeCategory;
    const skillMatches = !selectedSkill || project.tech.some((t) => t.toLowerCase() === selectedSkill.toLowerCase());
    return categoryMatches && skillMatches;
  });

  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Projects
        </h2>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* Filter Tabs & Active Skill Notice */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
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
            <span>Filtered by: <strong>{selectedSkill}</strong></span>
            <button
              onClick={() => setSelectedSkill(null)}
              className="hover:text-blue-800 dark:hover:text-blue-200 ml-1"
              title="Clear skill filter"
            >
              <FaTimes size={12} />
            </button>
          </div>
        )}
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 rounded-xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-blue-900/10 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Title & Links */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View GitHub Repository"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Demo"
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

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (setSelectedSkill) setSelectedSkill(t);
                    }}
                    className={`font-mono text-[11px] px-2 py-0.5 rounded border transition-colors ${
                      selectedSkill && selectedSkill.toLowerCase() === t.toLowerCase()
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/60 hover:border-blue-500/40 hover:text-blue-500'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
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
            className="w-full max-w-lg p-6 rounded-2xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder shadow-2xl relative animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <FaTimes size={16} />
            </button>

            <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded">
              {selectedProject.category}
            </span>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-3 mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {selectedProject.details || selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <FaGithub size={14} /> View Code
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors"
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
