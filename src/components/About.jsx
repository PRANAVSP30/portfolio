import React from 'react';
import { motion } from 'framer-motion';
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
            I am a <strong>Computer Science Engineering student</strong> with hands-on experience in <strong>software development, AI/ML, and backend engineering</strong> through multiple industry internships.
          </p>
          <p>
            Passionate about designing scalable applications, solving real-world problems, and building production-oriented systems using <strong>Java, Python, and modern web frameworks</strong>.
          </p>
          <p>
            Currently pursuing B.E. in Computer Science at <strong>Sai Vidya Institute of Technology (VTU)</strong> with a <strong>CGPA of 8.81/10</strong>.
          </p>
          <p>
            I believe in building robust, production-grade systems with clean architecture, performance efficiency, and practical real-world impact.
          </p>
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
