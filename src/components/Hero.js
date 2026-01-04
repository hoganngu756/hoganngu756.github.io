import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`${isDark ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white' : 'bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 text-slate-900'} min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`absolute top-6 right-6 p-2 rounded-lg transition ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'}`}
        aria-label="Toggle theme"
      >
        {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
          Hogan Nguyen
        </h1>
        <p className={`text-xl sm:text-2xl mb-6 font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
          Software Engineer & Data Science Enthusiast
        </p>
        <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Passionate about building intelligent systems with Python, React, and cloud technologies.
          Specialized in computer vision, data science, and full-stack web development.
        </p>

        {/* Contact Info */}
        <div className={`flex flex-col sm:flex-row justify-center gap-6 mb-10 text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
          <a
            href="mailto:hoganngu756@gmail.com"
            className={`flex items-center justify-center gap-2 transition ${isDark ? 'hover:text-blue-300' : 'hover:text-blue-600'}`}
          >
            <FaEnvelope /> hoganngu756@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/hoganngu756"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-3xl transition transform hover:scale-110 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hogan-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-3xl transition transform hover:scale-110 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* CTA Button */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className={`inline-block font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 cursor-pointer ${isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
