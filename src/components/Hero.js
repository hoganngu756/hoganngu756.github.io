import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  const heading = isDark ? '#e6edf3' : '#2d2a1e';
  const sub = isDark ? '#c9d1d9' : '#3d3929';
  const muted = isDark ? '#6e7681' : '#8a8275';

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 28px 80px',
      }}
    >
      <div style={{ 
        maxWidth: '820px', 
        margin: '0 auto', 
        width: '100%', 
        display: 'flex', 
        gap: '48px', 
        alignItems: 'center', 
        flexWrap: 'wrap-reverse' 
      }}>
        <div style={{ flex: '1 1 400px' }}>
          {/* Greeting in mono */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: '#d4976a',
              marginBottom: '16px',
              fontWeight: 500,
            }}
          >
            Hi, I'm
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.75rem)',
              fontWeight: 800,
              color: heading,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Hogan Nguyen
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: sub,
              marginBottom: '12px',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            Application Consultant Intern at{' '}
            <span style={{ color: isDark ? '#e6edf3' : '#2d2a1e', fontWeight: 700 }}>IBM</span>
          </p>

          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: muted,
              maxWidth: '500px',
              marginBottom: '36px',
            }}
          >
            I build AI agents, full-stack applications, and cloud-native tooling.
            Currently pursuing my MS in Computer Science at UT Dallas.
          </p>

          {/* Links row */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/hoganngu756"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
              style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.85rem', fontWeight: 500 }}
            >
              <FaGithub size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hogan-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
              style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.85rem', fontWeight: 500 }}
            >
              <FaLinkedin size={15} /> LinkedIn
            </a>
            <a
              href="mailto:hoganngu756@gmail.com"
              className="accent-link"
              style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.85rem', fontWeight: 500 }}
            >
              <FaArrowRight size={11} /> hoganngu756@gmail.com
            </a>
          </div>
        </div>

        <div style={{ flex: '0 0 auto', margin: '0 auto' }}>
          <img 
            src="/profile.jpg" 
            alt="Hogan Nguyen" 
            style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '2px solid #21262d',
              padding: '6px',
              backgroundColor: isDark ? '#161b22' : '#fff',
              transition: 'all 0.25s ease'
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
