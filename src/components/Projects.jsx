import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Adaptive Zero Trust Security Model',
      subtitle: 'Deception Intelligence & SOC Dashboard',
      description: 'Adaptive Zero Trust API Gateway redirecting suspicious logins to high-fidelity honeypots, with a live SOC dashboard powered by SSE and Gemini AI for automated threat intelligence.',
      tags: ['Zero Trust', 'API Gateway', 'Gemini AI', 'SSE', 'Python'],
      github: 'https://github.com/PRANAVSP30',
      live: ''
    },
    {
      title: 'Samudra Sutra',
      subtitle: 'Environmental Intelligence Platform',
      description: 'Scalable platform integrating AI-based classification and geospatial analysis to monitor and track pollution patterns with real-time data visualization.',
      tags: ['Next.js', 'Firebase', 'Gemini AI', 'Geospatial AI'],
      github: 'https://github.com/PRANAVSP30/SAMUDRA_SUTRA',
      live: ''
    },
    {
      title: 'AEGIS',
      subtitle: 'AI Financial Threat Intelligence Engine',
      description: 'Multi-model AI combining anomaly detection, fraud prediction, and credit risk analysis (Isolation Forest, Random Forest, Logistic Regression) with unified risk scoring.',
      tags: ['Isolation Forest', 'Random Forest', 'Logistic Regression', 'Fintech'],
      github: 'https://github.com/PRANAVSP30/AEGIS_AI_Security',
      live: ''
    },
    {
      title: 'FacultyTrack',
      subtitle: 'AI-Based Faculty Monitoring System',
      description: 'Face recognition-based attendance system enabling automated faculty tracking with live camera integration, real-time recognition pipeline, and dashboard.',
      tags: ['Face Recognition', 'OpenCV', 'Python', 'Dashboard'],
      github: 'https://github.com/PRANAVSP30/College_attendence_system',
      live: ''
    },
    {
      title: 'FraudShield AI',
      subtitle: 'Credit Card Fraud Detection System',
      description: 'End-to-end fraud detection pipeline using XGBoost with SMOTE, achieving ~0.97 ROC-AUC on imbalanced financial data with transaction simulation.',
      tags: ['XGBoost', 'SMOTE', 'ROC-AUC 0.97', 'Fintech'],
      github: 'https://github.com/PRANAVSP30',
      live: ''
    },
    {
      title: 'ResumeMatch AI',
      subtitle: 'NLP Resume Ranking System',
      description: 'NLP-based ranking engine utilizing TF-IDF and cosine similarity to match resumes with job descriptions, featuring automated skill extraction and HR scoring.',
      tags: ['NLP', 'TF-IDF', 'Cosine Similarity', 'Python'],
      github: 'https://github.com/PRANAVSP30/Resume_Matcher_AI',
      live: ''
    }
  ];

  const carouselRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="projects-section container" id="projects">
      <div className="projects-header-flex">
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h2>

        <div className="carousel-controls">
          <button onClick={scrollLeft} className="control-btn" aria-label="Scroll Left">
            <FiChevronLeft />
          </button>
          <button onClick={scrollRight} className="control-btn" aria-label="Scroll Right">
            <FiChevronRight />
          </button>
        </div>
      </div>
      
      <div className="projects-carousel" ref={carouselRef}>
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
