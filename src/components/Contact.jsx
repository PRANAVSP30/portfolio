import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section container" id="contact">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="contact-description">
          Let’s build something impactful together.
        </p>
        
        <div className="contact-cards">
          <a href="tel:+919739628700" className="contact-card glow-on-hover">
            <FiPhone className="contact-icon" />
            <span>+91 9739628700</span>
          </a>
          <a href="mailto:sppranav2005@gmail.com" className="contact-card glow-on-hover">
            <FiMail className="contact-icon" />
            <span>Email Me</span>
          </a>
          <a href="https://linkedin.com/in/pranavsp" target="_blank" rel="noreferrer" className="contact-card glow-on-hover">
            <FiLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/PRANAVSP30" target="_blank" rel="noreferrer" className="contact-card glow-on-hover">
            <FiGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>

      <footer className="footer">
        <p className="footer-credit">
          © 2026 Pranav S P <br/>
          <span className="footer-subtext">Built with passion and purpose</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
