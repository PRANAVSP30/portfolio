import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Samudra Sutra',
      subtitle: 'Environmental Intelligence',
      description: 'Global-scale pollution detection system with citizen-based data collection and AI-driven waste classification.',
      tags: ['Next.js', 'Firebase', 'Gemini AI'],
      github: 'https://github.com/PRANAVSP30/SAMUDRA_SUTRA',
      live: ''
    },
    {
      title: 'AEGIS',
      subtitle: 'AI Financial Threat Engine',
      description: 'Multi-model financial risk engine featuring anomaly detection, fraud scoring, and LLM-based recommendations.',
      tags: ['Random Forest', 'NetworkX', 'Streamlit'],
      github: 'https://github.com/PRANAVSP30/AEGIS_AI_Security',
      live: ''
    },
    {
      title: 'FraudShield AI',
      subtitle: 'Credit Card Security',
      description: 'End-to-end fraud detection pipeline with transaction simulation and an impressive ~0.97 ROC-AUC score.',
      tags: ['XGBoost', 'SMOTE', 'Cloud'],
      github: 'https://github.com/PRANAVSP30',
      live: ''
    },
    {
      title: 'ResumeMatch AI',
      subtitle: 'NLP Ranking System',
      description: 'Intelligent resume screening utilizing TF-IDF and cosine similarity for precise skill matching and HR reporting.',
      tags: ['NLP', 'TF-IDF', 'pdfplumber'],
      github: 'https://github.com/PRANAVSP30/Resume_Matcher_AI',
      live: ''
    },
    {
      title: 'Real-Time Sign Language',
      subtitle: 'Assistive AI Tool',
      description: 'Assistive communication tool using 21 hand landmarks for real-time gesture recognition with text-to-speech.',
      tags: ['MediaPipe', 'TensorFlow', 'Keras'],
      github: 'https://github.com/PRANAVSP30/Sign_Language_Recognition',
      live: ''
    },
    {
      title: 'Plant Disease Detection',
      subtitle: 'Agricultural Diagnostics',
      description: 'CNN-based image classification system achieving 92%+ accuracy for real-time plant disease identification.',
      tags: ['TensorFlow', 'OpenCV', 'Streamlit'],
      github: 'https://github.com/PRANAVSP30/Plant_disease_detection',
      live: ''
    },
    {
      title: 'FacultyTrack',
      subtitle: 'AI Attendance System',
      description: 'Face recognition-based institutional monitoring system deployed with real-time recognition capabilities.',
      tags: ['Face Recognition', 'Cloudflare', 'GitHub Pages'],
      github: 'https://github.com/PRANAVSP30/College_attendence_system',
      live: ''
    }
  ];

  return (
    <section className="projects-section container" id="projects">
      <motion.h2 
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Featured Work
      </motion.h2>
      
      <p className="projects-subtitle">Swipe to explore my recent projects</p>

      <div className="projects-carousel">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card glow-on-hover"
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-header">
              <div className="folder-icon">
                <FiFolder />
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-footer">
              <ul className="project-tech-list">
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
