import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    'Treasurer – IEEE Educational Society, managed budgeting and financial planning.',
    'Joint Secretary – IEEE, coordinated technical events and student activities.',
    'Lead Coordinator – CodeSprint Hackathon 2025 & Webcraft 2025.',
    'Selected Participant – Startup Mahakumbh 2025.',
    'Founder & CEO – Naandi (Startup initiative focused on building scalable, real-world service ecosystem platforms).',
    'Designed and documented Election Management System architecture.'
  ];

  return (
    <section className="achievements-section container" id="achievements">
      <div className="achievements-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FiAward className="section-icon" /> Achievements
        </motion.h2>

        <motion.div 
          className="achievements-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {achievements.map((item, index) => (
            <motion.div 
              key={index} 
              className="achievement-card glow-on-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="achievement-icon-wrapper">
                <FiAward className="achievement-icon" />
              </div>
              <p className="achievement-text">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
