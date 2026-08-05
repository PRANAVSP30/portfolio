import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.E. in Computer Science',
      institution: 'Sai Vidya Institute of Technology (VTU)',
      duration: 'Current Semester: 6th',
      score: 'CGPA: 8.81/10',
      status: 'Present',
      badge: 'Current'
    },
    {
      degree: 'XII (PCMB)',
      institution: 'Shaanthiniketans P.U College',
      duration: '2023',
      score: '93.04%',
      status: 'Completed',
      badge: 'Pre-University'
    },
    {
      degree: 'X (State Board)',
      institution: 'Indian Public School',
      duration: '2021',
      score: '99.24%',
      status: 'Completed',
      badge: 'Secondary School'
    }
  ];

  return (
    <section className="education-section container" id="education">
      <div className="education-container">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FiBookOpen className="section-icon" /> Education
        </motion.h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <motion.div 
              className="education-card glow-on-hover"
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="education-header">
                <span className="education-badge">{edu.badge}</span>
                <span className="education-score-tag">{edu.score}</span>
              </div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <div className="education-footer">
                <span className="education-duration">
                  <FiCalendar className="duration-icon" /> {edu.duration}
                </span>
                <span className="education-status">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
