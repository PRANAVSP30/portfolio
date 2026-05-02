import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import DoingNow from './components/DoingNow';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150); // Delay allows menu close animation to start
  };

  return (
    <div className="app-wrapper">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <nav className="navbar">
              <div className="nav-container">
                <a href="#hero" className="nav-logo">
                  S<span className="gradient-text">P.</span>
                </a>
                
                {/* Desktop Links */}
                <div className="nav-links">
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <a href="#achievements">Achievements</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>

              {/* Mobile Dropdown Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div 
                    className="mobile-menu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
                    <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
                    <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')}>Achievements</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
            
            <Hero />
            <About />
            <Projects />
            <DoingNow />
            <TechStack />
            <Experience />
            <Achievements />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
