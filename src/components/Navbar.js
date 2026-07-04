import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Skills', to: 'skills' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="hero" smooth={true} duration={500} className="nav-logo">
          hn.
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} smooth={true} duration={500} offset={-60}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: isDark ? '#6e7681' : '#8a8275',
            display: 'flex',
            alignItems: 'center',
            padding: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? '#c9d1d9' : '#3d3929')}
          onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? '#6e7681' : '#8a8275')}
        >
          {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
