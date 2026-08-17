import React from 'react';
import Reveal from './Reveal';
import { experiences, education } from '../data/content';

const Experience = () => (
  <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
    <Reveal className="flex items-center gap-4 mb-10">
      <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
        Experience
      </h2>
      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
    </Reveal>

    <div className="space-y-6">
      {experiences.map((exp, idx) => (
        <Reveal key={`${exp.company}-${exp.title}`} delay={idx * 120}>
          <div className="group p-6 rounded-xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder border-l-4 border-l-blue-500 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {exp.title}
              </h3>
              <span className="font-mono text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md self-start sm:self-auto">
                {exp.period}
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
              {exp.company}{' '}
              <span className="font-normal text-slate-500 dark:text-slate-400">· {exp.location}</span>
            </p>

            <ul className="space-y-2.5 list-none p-0 m-0">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2.5"
                >
                  <span
                    className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0 text-sm"
                    aria-hidden="true"
                  >
                    ▹
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>

    {/* Education */}
    <div className="mt-14">
      <Reveal className="flex items-center gap-4 mb-8">
        <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Education
        </h2>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {education.map((edu, idx) => (
          <Reveal key={edu.degree} delay={idx * 100}>
            <div className="h-full p-5 rounded-xl bg-lightCard dark:bg-darkCard border border-lightBorder dark:border-darkBorder hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start mb-1 gap-2">
                <p className="font-display text-base font-bold text-slate-900 dark:text-slate-100">
                  {edu.degree}
                </p>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {edu.school} · {edu.location}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
