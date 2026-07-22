import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

function MainContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  // Observe scroll positions to highlight active section in Navbar
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const sections = ['hero', 'experience', 'projects', 'skills'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
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
