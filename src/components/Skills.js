import React from 'react';

const Skills = () => {
  const categories = [
    { label: 'Languages', items: ['Java', 'Python', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS', 'C#'] },
    { label: 'Frameworks & Libraries', items: ['React', 'Express.js', 'Node.js', 'Spring Boot', '.NET', 'REST APIs', 'LangGraph', 'PyTorch'] },
    { label: 'Tools & Infrastructure', items: ['PostgreSQL', 'SQLite', 'Docker', 'Kubernetes', 'Prometheus', 'AWS (EC2, Lambda)', 'Git', 'Splunk', 'New Relic'] },
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-label">Skills</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-sub)', marginBottom: '12px' }}>
                {cat.label}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.items.map((item, i) => (
                  <span key={i} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
