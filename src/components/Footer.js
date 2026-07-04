import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const muted = isDark ? '#484f58' : '#b5ae9f';
  const link = isDark ? '#6e7681' : '#8a8275';

  return (
    <footer id="contact">
      <div className="divider" />
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '40px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <p style={{ fontSize: '0.75rem', color: muted, fontFamily: "'JetBrains Mono', monospace" }}>
          © 2026 Hogan Nguyen
        </p>
        <div style={{ display: 'flex', gap: '18px' }}>
          {[
            { icon: <FaGithub size={14} />, href: 'https://github.com/hoganngu756', label: 'GitHub' },
            { icon: <FaLinkedin size={14} />, href: 'https://www.linkedin.com/in/hogan-nguyen/', label: 'LinkedIn' },
            { icon: <FaEnvelope size={14} />, href: 'mailto:hoganngu756@gmail.com', label: 'Email' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel={l.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={l.label}
              className="accent-link"
              style={{ color: link }}
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
