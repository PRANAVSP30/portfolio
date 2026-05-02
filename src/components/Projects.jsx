import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: '🚁 AI-Based Drone Navigation System',
      tag: 'AI | Robotics | Computer Vision',
      description: 'Designed a drone navigation system capable of obstacle avoidance using AI techniques and sensor data. The system navigates to GPS locations, captures images, and processes them in real-time.',
      highlights: [
        'Obstacle detection using AI models',
        'Real-time image capture and transmission',
        'GPS-based navigation'
      ],
      tech: ['Python', 'AI Models', 'Sensors'],
      github: '#',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '🔐 Zero Trust Security Model with Deception Intelligence',
      tag: 'Cybersecurity | System Design',
      description: 'Developed a closed-loop adaptive security model integrating Zero Trust architecture with deception techniques and behavioral analysis.',
      highlights: [
        'Dynamic threat detection',
        'Honeypot-based redirection',
        'Adaptive policy reinforcement'
      ],
      tech: ['Cybersecurity', 'System Design', 'Behavioral Analysis'],
      github: '#',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '🌐 Naandiverse',
      tag: 'Web | Startup | System Design',
      description: 'A smart platform that connects users with event service providers (photographers, caterers, decorators, purohits) based on location, budget, and preferences.',
      highlights: [
        'Vendor-user matching system',
        'AI-based recommendations',
        'Multi-role system (User, Vendor, Admin)'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AI Recommendation'],
      github: '#',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '🚨 Crime Reporting & Analysis System',
      tag: 'DBMS | GIS | Safety',
      description: 'Built a system for crime reporting and hotspot analysis using GIS and database optimization techniques.',
      highlights: [
        'Crime data visualization',
        'Admin tracking system',
        'Performance optimization using indexing'
      ],
      tech: ['GIS', 'DBMS', 'Data Visualization', 'SQL'],
      github: '#',
      image: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&w=800&q=80'
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
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card glow-on-hover"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image">
              <div className="project-overlay"></div>
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            
            <div className="project-content">
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                <ul>
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Site">
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
