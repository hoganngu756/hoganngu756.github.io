import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useContext(ThemeContext);
  const projects = [
    {
      title: 'Tennis Analysis System',
      description:
        'Created a computer vision model to track tennis players and ball movement with 95% accuracy across 10,000+ video frames. Optimized dataset preprocessing and keypoint extraction to enable real-time movement analysis, including player and ball speed calculations.',
      technologies: ['Python', 'PyTorch', 'YOLOv8', 'Pandas'],
      highlights: ['95% accuracy', '10,000+ frames', 'Real-time analysis'],
    },
    {
      title: 'Credit Risk Modeling',
      description:
        'Built a predictive model to assess borrower default risk by engineering financial features from a public LendingClub dataset, achieving 92% accuracy. Implemented data-driven insights through SHAP value analysis to identify key default drivers.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
      highlights: ['92% accuracy', 'SHAP analysis', 'Feature engineering'],
      link: 'https://github.com/hoganngu756/credit-risk-modeling',
    },
    {
      title: 'Retirement Planning Tool',
      description:
        'Developed a comprehensive system that takes user financial data and processes it with market trends to generate personalized, dynamic retirement forecasts. Designed an intuitive dashboard that translates complex financial projections into clear visual insights.',
      technologies: ['C#', 'React', 'ASP.NET Core', 'SQL Server'],
      highlights: ['Full-stack', 'Interactive dashboard', 'Financial modeling'],
    },
  ];

  return (
    <section id="projects" className={`${isDark ? 'bg-slate-800' : 'bg-blue-50'} py-16 sm:py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-12 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`${isDark ? 'bg-slate-700' : 'bg-white'} rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-102`}
            >
              <div className="p-6 sm:p-8">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                  {project.title}
                </h3>

                <p className={`mb-4 leading-relaxed text-base sm:text-lg ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-semibold py-2 px-4 rounded transition ${isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
