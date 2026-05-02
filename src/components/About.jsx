import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section className="about-section container" id="about">
      <motion.h2 
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I’m a Computer Science Engineering student driven by a deep interest in building systems that solve real-world problems.
          </p>
          <p>
            My work lies at the intersection of <strong>Artificial Intelligence, Security, and System Design</strong>. I enjoy transforming complex ideas into practical, working solutions—whether it’s designing an AI-based drone navigation system or developing a zero trust security model using deception intelligence.
          </p>
          <p>
            Beyond academics, I actively take leadership roles, collaborate in teams, and continuously explore new technologies to push my boundaries.
          </p>
          <p>
            I believe in building with purpose, not just code.
          </p>

          <div className="currently-doing-section">
            <h3 className="currently-doing-title">
              <FiActivity className="currently-icon" /> What I'm Doing Now
            </h3>
            <div className="currently-grid">
              <div className="currently-card glow-on-hover">
                <span className="currently-emoji">🔭</span>
                <p>Currently building a <strong>Closed-Loop Adaptive Zero Trust Security Model</strong> using Deception Intelligence.</p>
              </div>
              <div className="currently-card glow-on-hover">
                <span className="currently-emoji">🤖</span>
                <p>Exploring <strong>AI-driven navigation systems</strong> and real-time decision making.</p>
              </div>
              <div className="currently-card glow-on-hover">
                <span className="currently-emoji">🌐</span>
                <p>Developing scalable platforms like <strong>Naandiverse</strong> for real-world service ecosystems.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="about-image-wrapper glow-on-hover">
            <div className="image-placeholder">
              <img src="/profile.png" alt="Pranav SP" className="profile-img" />
            </div>
            <div className="image-backdrop"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
