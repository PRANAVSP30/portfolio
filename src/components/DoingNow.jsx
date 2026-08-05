import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';
import './DoingNow.css';

const DoingNow = () => {
  return (
    <section className="doing-now-section container" id="doing-now">
      <motion.div 
        className="currently-doing-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="currently-doing-title gradient-text">
          <FiActivity className="currently-icon" /> What I'm Doing Now
        </h3>
        <div className="currently-grid">
          <div className="currently-card glow-on-hover">
            <span className="currently-emoji">💼</span>
            <p>Working as a <strong>Software Development Intern at AnveshakHub Private Limited</strong>, building enterprise-grade web applications, REST APIs, and backend system components.</p>
          </div>
          <div className="currently-card glow-on-hover">
            <span className="currently-emoji">🛡️</span>
            <p>Deploying and finalizing an <strong>Adaptive Closed-Loop Zero Trust Security Model</strong> integrated with Deception Intelligence and live SOC dashboard.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DoingNow;
