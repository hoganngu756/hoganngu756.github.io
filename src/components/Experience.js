import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Consultant Intern',
      company: 'IBM',
      location: 'Austin, TX',
      period: 'May 2026 – Present',
      bullets: [
        'Building an AI agent using LangGraph and Python that ingests meeting transcripts to auto-generate summaries and weekly status emails for stakeholders, saving an estimated 3+ hours/week',
        'Developing a full-stack reporting dashboard using React, Next.js, and PostgreSQL to automatically compile weekly client-facing reports, replacing manual PowerPoint reporting and cutting overhead by 40%',
        'Translating business workflows into technical specifications across requirement-gathering sessions and client-facing discovery calls',
        'Managing enterprise AI consulting engagements in monday.com under senior guidance, establishing delivery roadmaps and milestone visibility for cross-functional teams',
      ],
    },
    {
      title: 'Problem Design Engineer',
      company: 'Idler (YC25)',
      location: 'Remote (Part-time)',
      period: 'Jan 2026 – Present',
      bullets: [
        'Authoring test cases and coding problems across Python, Java, and other languages, identifying logic vulnerabilities and edge cases to improve the reliability of research-grade problems used for AI evaluation',
        'Reviewing complex code changes across different OOP and scripting stacks, providing feedback to fellow problem designers to maintain quality standards before deployment',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Blackhawk Network',
      location: 'Coppell, TX',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'Automated incident ticket escalation workflows in Python on the ServiceNow platform, reducing manual intervention and cutting average response time by roughly 20%',
        'Built custom Splunk and New Relic dashboards to track system health and proactively identify performance bottlenecks',
        'Documented 100+ incident tickets and resolutions, ensuring accurate, audit-ready records',
      ],
    },
  ];

  const education = [
    { degree: 'M.S. Computer Science', school: 'University of Texas at Dallas', location: 'Richardson, TX', period: 'Expected May 2027' },
    { degree: 'B.S. Software Engineering', school: 'University of Texas at Dallas', location: 'Richardson, TX', period: 'December 2024' },
  ];

  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Experience
        </h2>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder border-l-4 border-l-blue-500 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {exp.title}
              </h3>
              <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md self-start sm:self-auto">
                {exp.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
              {exp.company}{' '}
              <span className="font-normal text-slate-500 dark:text-slate-400">· {exp.location}</span>
            </p>

            <ul className="space-y-2.5 list-none p-0 m-0">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0 text-xs">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Education
          </h2>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder hover:border-blue-500/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-1 gap-2">
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{edu.degree}</p>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">{edu.period}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{edu.school} · {edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
