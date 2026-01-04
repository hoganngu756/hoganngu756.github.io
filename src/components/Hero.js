import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          Hogan Nguyen
        </h1>
        <p className="text-xl sm:text-2xl text-blue-300 mb-6 font-semibold">
          Software Engineer & Data Science Enthusiast
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about building intelligent systems with Python, React, and cloud technologies.
          Specialized in computer vision, data science, and full-stack web development.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-sm sm:text-base">
          <a
            href="tel:469-720-5180"
            className="flex items-center justify-center gap-2 hover:text-blue-400 transition"
          >
            <FaPhone /> 469-720-5180
          </a>
          <a
            href="mailto:hoganngu756@gmail.com"
            className="flex items-center justify-center gap-2 hover:text-blue-400 transition"
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
            className="text-3xl hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hogan-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* CTA Button */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 cursor-pointer"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
