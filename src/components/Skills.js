import React from 'react';
import Reveal from './Reveal';
import { skillCategories } from '../data/content';

const Skills = ({ selectedSkill, setSelectedSkill }) => {
  const handleSkillClick = (skill) => {
    if (selectedSkill === skill) {
      if (setSelectedSkill) setSelectedSkill(null);
      return;
    }

    if (setSelectedSkill) setSelectedSkill(skill);
    // Scroll up to projects so the filtered result is actually visible.
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills" className="py-16 px-6 max-w-4xl mx-auto">
      <Reveal className="flex items-center gap-4 mb-8">
        <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Technical Skills
        </h2>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </Reveal>

      <Reveal delay={60}>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 italic">
          Tip: Click any skill tag to view related projects using that technology.
        </p>
      </Reveal>

      <div className="space-y-8">
        {skillCategories.map((cat, idx) => (
          <Reveal key={cat.label} delay={idx * 100}>
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => {
                const isSelected = selectedSkill === item;
                return (
                  <button
                    key={item}
                    onClick={() => handleSkillClick(item)}
                    aria-pressed={isSelected}
                    className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-105'
                        : 'bg-lightCard dark:bg-darkCard text-slate-700 dark:text-slate-300 border-lightBorder dark:border-darkBorder hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
