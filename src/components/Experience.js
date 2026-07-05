import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Application Consultant Intern',
      company: 'IBM',
      location: 'Austin, TX',
      period: 'May 2026 – Present',
      bullets: [
        'Building an internal AI knowledge agent using LangGraph and Python that parses PDFs and specification documents to auto-generate account-specific API configurations, cutting technical onboarding time by ~25%',
        'Developing a full-stack client project monitor using React, Express.js, PostgreSQL to track use case deliveries and AI-generated insights, reducing reporting overhead by 40%',
        'Translating business workflows into technical specifications through requirement-gathering sessions and client-facing discovery calls',
      ],
    },
    {
      title: 'Problem Design Engineer',
      company: 'Idler (YC25)',
      location: 'Remote',
      period: 'Jan 2026 – Present',
      bullets: [
        'Authoring test cases and coding problems across Python, Java, and other languages, identifying logic vulnerabilities and edge cases for research-grade AI evaluation problems',
        'Reviewing complex code changes across OOP and scripting stacks, catching bugs before problems are used to train and benchmark AI models',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Blackhawk Network',
      location: 'Coppell, TX',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'Automated incident ticket escalation workflows in Python on ServiceNow, reducing manual intervention and cutting average response time by ~20%',
        'Built custom Splunk and New Relic dashboards to track system health and identify performance bottlenecks',
        'Documented 100+ incident tickets and resolutions for accurate, audit-ready records',
      ],
    },
  ];

  const education = [
    { degree: 'M.S. Computer Science', school: 'University of Texas at Dallas', period: 'Aug 2025 – Present' },
    { degree: 'B.S. Software Engineering', school: 'University of Texas at Dallas', period: 'Aug 2021 – Dec 2024' },
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-label">Experience</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '2px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>{exp.title}</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
                  {exp.period}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-sub)', marginBottom: '14px' }}>
                {exp.company} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>· {exp.location}</span>
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {exp.bullets.map((item, i) => (
                  <li key={i} style={{ fontSize: '0.835rem', lineHeight: 1.7, color: 'var(--text-body)', paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontSize: '0.7rem', top: '3px' }}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: '56px' }}>
          <h2 className="section-label">Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
                <div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>{edu.degree}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>{edu.school}</p>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, alignSelf: 'flex-start', marginTop: '2px' }}>
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
