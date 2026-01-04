import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:469-720-5180"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <FaPhone /> 469-720-5180
              </a>
              <a
                href="mailto:hoganngu756@gmail.com"
                className="flex items-center gap-3 hover:text-blue-400 transition"
              >
                <FaEnvelope /> hoganngu756@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/hoganngu756"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-100 transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hogan-nguyen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-100 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-blue-500 mb-6" />

        <div className="text-center text-blue-100 text-sm">
          <p>© 2026 Hogan Nguyen. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
