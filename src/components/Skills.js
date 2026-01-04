import React, { useContext } from 'react';
import { FaCode, FaTools, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useContext(ThemeContext);
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['Python', 'Java', 'JavaScript', 'C/C++', 'SQL', 'HTML/CSS', 'C#', 'R']
    },
    {
      title: 'Frameworks',
      icon: FaLaptopCode,
      skills: ['React', 'Node.js', 'Angular.js', 'Spring Boot', '.NET', 'ASP.NET Core']
    },
    {
      title: 'Developer Tools',
      icon: FaTools,
      skills: ['Git', 'Docker', 'VS Code', 'AWS (EC2, Lambda)', 'Splunk', 'New Relic', 'Jira']
    },
    {
      title: 'Data & Visualization',
      icon: FaDatabase,
      skills: ['Pandas', 'Scikit-learn', 'XGBoost', 'PyTorch', 'YOLOv8', 'Matplotlib', 'Tableau', 'D3.js', 'Power BI']
    }
  ];

  return (
    <section id="skills" className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-16 sm:py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-12 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`${isDark ? 'bg-slate-800' : 'bg-blue-50'} rounded-lg shadow-md p-6 hover:shadow-lg transition`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`text-2xl ${isDark ? 'text-blue-400' : 'text-blue-700'}`} />
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-200 text-blue-900'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
