import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

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
    },
    {
      title: 'Kubernetes Resource Monitor',
      description:
        'Automated pipeline querying container metrics from Prometheus, mapping them against pricing models to flag over-provisioned workloads and generate right-sizing reports.',
      tech: ['Python', 'Kubernetes', 'Prometheus', 'OpenCost', 'Docker'],
    },
  ];

  const heading = isDark ? '#e6edf3' : '#2d2a1e';
  const body = isDark ? '#8b949e' : '#6b6455';

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-label">Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: heading, marginBottom: '10px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.835rem', lineHeight: 1.7, color: body, marginBottom: '18px', flex: 1 }}>
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
