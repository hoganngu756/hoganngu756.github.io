import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaFileAlt } from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';
import { profile } from '../data/content';

const Hero = ({ onCopyEmail }) => {
  const [copied, setCopied] = React.useState(false);
  const { text, showCursor } = useTypewriter(profile.taglines);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email).then(() => {
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
          <p className="font-mono text-xs md:text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 tracking-wide animate-fade-in">
            Hi, I'm
          </p>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-4 animate-fade-in"
            style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
          >
            {profile.name}
          </h1>

          <p
            className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-4 leading-snug animate-fade-in"
            style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
          >
            {profile.role} at{' '}
            <span className="text-blue-600 dark:text-blue-400 font-bold">{profile.company}</span>
          </p>

          {/* Typed rotating tagline — fixed height so nothing jumps as it types */}
          <p
            className="font-mono text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-5 min-h-[1.75rem] flex items-center justify-center md:justify-start animate-fade-in"
            style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
          >
            <span className="text-emerald-600 dark:text-emerald-400 mr-2 select-none">&gt;</span>
            <span aria-live="polite">{text}</span>
            {showCursor && (
              <span
                className="inline-block w-[2px] h-[1.1em] bg-blue-500 ml-0.5 animate-blink"
                aria-hidden="true"
              />
            )}
          </p>

          <p
            className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed mx-auto md:mx-0 animate-fade-in"
            style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
          >
            {profile.bio}
          </p>

          {/* Social Links, Resume & Copy Email */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 animate-fade-in"
            style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}
          >
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 motion-reduce:transform-none"
            >
              <FaFileAlt size={15} />
              <span>Resume PDF</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 motion-reduce:transform-none"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 motion-reduce:transform-none"
            >
              <FaLinkedin size={16} className="text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <FaCheck size={14} className="text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FaEnvelope size={14} />
                  <span>Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Profile Avatar */}
        <div
          className="flex-shrink-0 relative group animate-fade-in"
          style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 group-hover:opacity-75 blur transition duration-300" />
          <img
            src="/profile.jpg"
            alt="Hogan Nguyen"
            width="192"
            height="192"
            className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-lightCard dark:border-darkCard shadow-xl transform group-hover:scale-105 transition-transform duration-300 motion-reduce:transform-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
