import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaJs, FaDatabase, FaNetworkWired, FaTools,
  FaMapMarkedAlt, FaGithub, FaFigma, FaCode
} from 'react-icons/fa';
import { 
  SiPostgresql, SiDjango
} from 'react-icons/si';
import { BsCpuFill } from 'react-icons/bs';
import { VscFileCode } from 'react-icons/vsc';
import './TechStack.css';

const TechStack = () => {
  const categories = [
    {
      title: "💻 Programming",
      skills: [
        { name: 'Java', icon: <FaJava />, color: '#f89820' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' }
      ]
    },
    {
      title: "🧠 Core Concepts",
      skills: [
        { name: 'Data Structures & Algorithms', icon: <VscFileCode />, color: '#8b5cf6' },
        { name: 'DBMS', icon: <FaDatabase />, color: '#F29111' },
        { name: 'Operating Systems', icon: <BsCpuFill />, color: '#06B6D4' },
        { name: 'Computer Networks', icon: <FaNetworkWired />, color: '#4CAF50' }
      ]
    },
    {
      title: "🤖 Technologies",
      skills: [
        { name: 'Machine Learning (Basics)', icon: <BsCpuFill />, color: '#E34F26' },
        { name: 'Google Maps API', icon: <FaMapMarkedAlt />, color: '#4285F4' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        { name: 'Django', icon: <SiDjango />, color: '#092E20' }
      ]
    },
    {
      title: "🛠 Tools",
      skills: [
        { name: 'Git & GitHub', icon: <FaGithub />, color: '#ffffff' },
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
        { name: 'VS Code', icon: <FaCode />, color: '#007ACC' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="tech-section container" id="skills">
      <motion.h2 
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tech Stack
      </motion.h2>

      <div className="tech-categories">
        {categories.map((category, idx) => (
          <motion.div 
            key={idx} 
            className="tech-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item glow-on-hover"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
