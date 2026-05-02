import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

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
              <div className="container nav-container">
                <a href="#hero" className="nav-logo">PS.</a>
                <div className="nav-links">
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#experience">Experience</a>
                  <a href="#achievements">Achievements</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </nav>
            
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Achievements />
            <Projects />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
