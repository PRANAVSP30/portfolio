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
                  <a href="#projects">Work</a>
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <a href="#achievements">Achievements</a>
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
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Featured Work</a>
                    <a href="#doing-now" onClick={() => setIsMenuOpen(false)}>What I'm Doing</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                    <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                    <a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
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
