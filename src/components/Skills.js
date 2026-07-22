import React from 'react';

const Skills = ({ selectedSkill, setSelectedSkill }) => {
  const categories = [
    {
      label: 'Languages',
      items: ['Java', 'Python', 'C#', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS'],
    },
    {
      label: 'Frameworks & Libraries',
      items: ['React', 'Next.js', 'Node.js', 'Spring Boot', '.NET', 'REST APIs', 'LangGraph', 'PyTorch'],
    },
    {
      label: 'Developer Tools & Infra',
      items: ['PostgreSQL', 'SQLite', 'Docker', 'Kubernetes', 'Prometheus', 'AWS (EC2, Lambda)', 'Git', 'Splunk', 'New Relic'],
    },
  ];

  const handleSkillClick = (skill) => {
    if (selectedSkill === skill) {
      if (setSelectedSkill) setSelectedSkill(null);
    } else {
      if (setSelectedSkill) setSelectedSkill(skill);
      // Smooth scroll down to projects section to see filtered result
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills" className="py-16 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Technical Skills
        </h2>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 italic">
        Tip: Click any skill tag to view related projects using that technology.
      </p>

      <div className="space-y-8">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => {
                const isSelected = selectedSkill === item;
                return (
                  <button
                    key={i}
                    onClick={() => handleSkillClick(item)}
                    className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 focus:outline-none ${
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
