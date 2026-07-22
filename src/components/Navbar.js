import React, { useState, useEffect, useContext } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-lightBg/90 dark:bg-darkBg/90 backdrop-blur-md border-b border-lightBorder/80 dark:border-darkBorder/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="font-mono font-bold text-lg text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity tracking-tight"
        >
          hn<span className="text-slate-400 dark:text-slate-600">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-fade-in" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isDark ? <FaSun size={15} className="text-amber-400" /> : <FaMoon size={15} className="text-slate-600" />}
          </button>
        </div>

        {/* Mobile controls: Theme toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all"
          >
            {isDark ? <FaSun size={16} className="text-amber-400" /> : <FaMoon size={16} className="text-slate-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[56px] z-40 bg-slate-950/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-[56px] right-0 bottom-0 z-40 w-64 bg-lightCard dark:bg-darkCard border-l border-lightBorder dark:border-darkBorder p-6 shadow-2xl md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Navigation
          </span>
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
