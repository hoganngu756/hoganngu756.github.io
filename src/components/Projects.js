import React from 'react';

const Projects = () => {
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
    <section id="projects" className="bg-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-700">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-102"
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed text-base sm:text-lg">
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

                <div className="flex flex-wrap gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-blue-600 font-semibold"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
