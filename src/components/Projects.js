import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Tennis Analysis System',
      description:
        'Computer vision pipeline that tracks tennis players and ball movement with 95% accuracy across 10,000+ video frames. Real-time speed calculations via optimized keypoint extraction.',
      tech: ['Python', 'PyTorch', 'YOLOv8', 'Pandas'],
    },
    {
      title: 'Document Security Scanner',
      description:
        'Dual-layer security engine using regex heuristics and the Gemini LLM API to detect prompt injections and jailbreaks in PDFs. Hardened against DoS with strict validation and upload limits.',
      tech: ['Java', 'React', 'Spring Boot', 'Gemini API', 'SQLite'],
      github: 'https://github.com/hoganngu756/pdf-prompt-scanner',
      demo: 'https://pdf-prompt-scanner.vercel.app',
    },
    {
      title: 'Kubernetes Resource Monitor',
      description:
        'Automated pipeline querying container metrics from Prometheus, mapping them against pricing models to flag over-provisioned workloads and generate right-sizing reports.',
      tech: ['Python', 'Kubernetes', 'Prometheus', 'OpenCost', 'Docker'],
    },
  ];

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-label">Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '2px' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source Code"
                      className="accent-link"
                      style={{ display: 'inline-flex', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                    >
                      <FaGithub size={15} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Demo"
                      className="accent-link"
                      style={{ display: 'inline-flex', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  )}
                </div>
              </div>
              <p style={{ fontSize: '0.835rem', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '18px', flex: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
