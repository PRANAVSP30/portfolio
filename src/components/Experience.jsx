import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiStar } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'AnveshakHub Private Limited.',
      duration: 'June 2026 – Present',
      points: [
        'Developing enterprise-grade web applications by implementing scalable features aligned with real industry problem statements.',
        'Designing and integrating backend modules, REST APIs, and database components to support efficient application workflows.',
        'Collaborating with cross-functional teams to analyse requirements, optimize system functionality, and deliver high-quality software solutions.',
        'Contributing to software testing, documentation, debugging, and feature enhancement while following modern software engineering practices.'
      ]
    },
    {
      role: 'Software Intern',
      company: 'CODTECH IT Solutions Pvt. Ltd.',
      duration: 'Nov 2025 – Feb 2026',
      points: [
        'Developed Java-based applications implementing file handling, API integration, and concurrent processing concepts.',
        'Applied modular coding practices and structured design approaches to build maintainable and efficient programs.'
      ]
    },
    {
      role: 'AI & Machine Learning Intern',
      company: 'Elevate Labs',
      duration: 'Jan 01, 2026 – Apr 30, 2026',
      points: [
        'Built and evaluated machine learning models across multiple real-world datasets, focusing on classification and prediction tasks.',
        'Worked on data preprocessing, feature engineering, and performance evaluation, gaining hands-on experience in end-to-end ML workflows.'
      ]
    }
  ];

  const leadership = [
    {
      role: 'Founder & CEO',
      org: 'Naandi',
      desc: 'Startup initiative focused on building scalable, real-world service ecosystem platforms.'
    },
    {
      role: 'Joint Secretary',
      org: 'IEEE',
      desc: 'Managed technical events and coordinated student activities.'
    },
    {
      role: 'Treasurer',
      org: 'IEEE Educational Society',
      desc: 'Handled budgeting, funds, and financial planning.'
    },
    {
      role: 'Lead Coordinator',
      org: 'CodeSprint Hackathon 2025 & Webcraft 2025',
      desc: 'Organized and executed large-scale technical competitions.'
    }
  ];

  return (
    <section className="experience-section container" id="experience">
      <div className="experience-container">
        
        <div className="experience-block">
          <motion.h2 
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="section-icon" /> Experience
          </motion.h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-duration">{exp.duration}</p>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="experience-block mt-8">
          <motion.h2 
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FiStar className="section-icon" /> Leadership
          </motion.h2>

          <div className="leadership-cards">
            {leadership.map((item, index) => (
              <motion.div 
                className="leadership-card glow-on-hover"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <h3>{item.role} <span>@ {item.org}</span></h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
