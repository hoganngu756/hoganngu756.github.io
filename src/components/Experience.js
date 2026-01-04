import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer Intern',
      company: 'Blackhawk Network',
      location: 'Coppell, TX',
      period: 'June 2024 – August 2024',
      description: [
        'Automated incident ticket escalation workflows into ServiceNow platform, reducing manual intervention and cutting average response time',
        'Documented 100+ incident tickets and resolutions to ensure accurate, auditable records',
        'Utilized Splunk and New Relic to diagnose and resolve performance bottlenecks, improving issue resolution efficiency'
      ]
    },
    {
      type: 'work',
      title: 'Student Worker',
      company: 'University of Texas at Dallas',
      location: 'Richardson, TX',
      period: 'October 2021 – August 2023',
      description: [
        'Processed thousands of registration and transcript requests, ensuring compliance with academic policies',
        'Collaborated with student workers to process thousands of registration and transcript requests efficiently',
        'Assisted with department projects related to Excel and PeopleSoft for cleanup of former students'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      track: '(Data Science Track)',
      school: 'University of Texas at Dallas',
      location: 'Richardson, TX',
      period: 'Aug 2025 – Present'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'University of Texas at Dallas',
      location: 'Richardson, TX',
      period: 'Aug 2021 – Dec 2024'
    }
  ];

  return (
    <section id="experience" className="bg-blue-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-700">
          Experience & Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <FaBriefcase className="text-2xl text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <h4 className="text-xl font-bold text-blue-700 mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-600 text-sm mb-3">
                    {exp.location} • {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <FaGraduationCap className="text-2xl text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <h4 className="text-lg font-bold text-blue-700 mb-1">
                    {edu.degree}
                  </h4>
                  {edu.track && (
                    <p className="text-blue-600 font-semibold text-sm mb-2">{edu.track}</p>
                  )}
                  <p className="text-slate-900 font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-600 text-sm">
                    {edu.location} • {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
