import './App.css';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function AppContent() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`App ${isDark ? '' : 'light-theme'}`}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
