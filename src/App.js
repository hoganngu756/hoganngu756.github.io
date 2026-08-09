import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Reveal from './components/Reveal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

const SECTIONS = ['hero', 'experience', 'projects', 'skills', 'terminal'];

function MainContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }, []);

  // Highlight the section nearest the top of the viewport. Tracking every
  // entry's ratio (rather than taking whichever fired last) keeps two adjacent
  // sections from fighting over the active state.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target.id, entry.intersectionRatio));

        let best = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });

        if (best) setActiveSection(best);
      },
      { rootMargin: '-72px 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg text-slate-800 dark:text-slate-200 transition-colors duration-300 relative">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero onCopyEmail={showToast} />
        <Experience />
        <Projects selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        <Skills selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />

        <section id="terminal" className="py-16 px-6 max-w-4xl mx-auto">
          <Reveal className="flex items-center gap-4 mb-4">
            <h2 className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Terminal
            </h2>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </Reveal>

          <Reveal delay={60}>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 italic">
              Prefer a shell? Click in and run <code className="font-mono not-italic">help</code>.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Terminal onCopyEmail={showToast} setSelectedSkill={setSelectedSkill} />
          </Reveal>
        </section>
      </main>
      <Footer onCopyEmail={showToast} />
      <ScrollToTop />
      <Toast message={toastMessage} isVisible={toastVisible} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
