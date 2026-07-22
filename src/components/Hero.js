import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaArrowRight } from 'react-icons/fa';

const Hero = ({ onCopyEmail }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    const email = 'hoganngu756@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      if (onCopyEmail) onCopyEmail('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-6 max-w-4xl mx-auto"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14 w-full">
        {/* Bio Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-mono text-xs md:text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide">
            Hi, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-4">
            Hogan Nguyen
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-4 leading-snug">
            Application Consultant Intern at{' '}
            <span className="text-blue-600 dark:text-blue-400 font-bold">IBM</span>
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
            I like building AI agents, full-stack applications, cloud-native tooling, and more.
            I also love playing tennis and building legos in my free time!
            Currently pursuing my MS in Computer Science at UT Dallas.
          </p>

          {/* Social Links & Copy Email */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="https://github.com/hoganngu756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hogan-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              <FaLinkedin size={16} className="text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <FaCheck size={14} className="text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FaEnvelope size={14} />
                  <span>hoganngu756@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="flex-shrink-0 relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 group-hover:opacity-75 blur transition duration-300" />
          <img
            src="/profile.jpg"
            alt="Hogan Nguyen"
            className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-lightCard dark:border-darkCard shadow-xl transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
