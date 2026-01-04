import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
