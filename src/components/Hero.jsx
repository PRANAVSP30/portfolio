import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiFileText, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="hero-greeting">{getGreeting()}! Welcome to my digital workspace.</p>
          
          <div className="hero-description">
            <p>I believe systems should do more than function.</p>
            <p>They should think.</p>
            <p>They should adapt.</p>
            <p>They should last.</p>
          </div>

          <h1 className="hero-name">I'm Pranav S P.</h1>
          
          <h2 className="hero-role">
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  'System Builder.',
                  2000,
                  'Problem Solver.',
                  2000,
                  'AI Engineer in Progress.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary glow-on-hover">
              View Projects <FiArrowRight className="btn-icon" />
            </a>
            <a href="/Pranav_SP_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FiFileText className="btn-icon" /> View Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <FiMail className="btn-icon" /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
