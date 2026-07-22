import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = ({ onCopyEmail }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText('hoganngu756@gmail.com').then(() => {
      if (onCopyEmail) onCopyEmail('Email copied to clipboard!');
    });
  };

  return (
    <footer className="mt-20 border-t border-lightBorder dark:border-darkBorder py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <span>Designed & Built by</span>
          <span className="font-semibold text-slate-700 dark:text-slate-200">Hogan Nguyen</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/hoganngu756"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/hogan-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
            title="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <button
            onClick={handleCopy}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
            title="Copy Email"
          >
            <FaEnvelope size={15} />
          </button>
        </div>

        <p className="font-mono text-[11px]">
          © {new Date().getFullYear()} Hogan Nguyen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
