import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaFileAlt } from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';
import { profile } from '../data/content';

// Transparent at rest; the background tint only appears on hover/focus.
const SOCIAL_BASE =
  'inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500';

// Secondary links stay muted until hovered.
const SOCIAL_LINK = `${SOCIAL_BASE} text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400`;

// The résumé carries the accent at rest so the eye lands there first — the one
// thing a recruiter should click — without going back to a filled button.
const RESUME_LINK = `${SOCIAL_BASE} text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300`;

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
            className="font-mono text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-5 min-h-[2.5rem] sm:min-h-[1.75rem] flex items-center justify-center md:justify-start animate-fade-in"
            style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
          >
            <span className="text-emerald-700 dark:text-emerald-400 mr-2 select-none">&gt;</span>
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
            {/* Nothing filled here — hierarchy comes from color alone. The 44px
                box keeps the tap target honest even though the glyph is small. */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Résumé (PDF)"
              title="Résumé (PDF)"
              className={RESUME_LINK}
            >
              <FaFileAlt size={17} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className={SOCIAL_LINK}
            >
              <FaGithub size={18} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className={SOCIAL_LINK}
            >
              <FaLinkedin size={18} />
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              title={copied ? 'Copied!' : 'Copy email address'}
              className={SOCIAL_LINK}
            >
              {copied ? (
                <FaCheck size={17} className="text-emerald-500" />
              ) : (
                <FaEnvelope size={17} />
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
