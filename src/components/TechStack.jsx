import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNetworkWired, 
  FaDatabase, FaCodeBranch, FaCubes, FaBrain, FaChartLine, FaLanguage,
  FaGitAlt, FaGithub, FaCode, FaFigma
} from 'react-icons/fa';
import { 
  SiPostgresql, SiFirebase, SiStreamlit, SiScikitlearn, 
  SiTensorflow, SiOpencv, SiJupyter
} from 'react-icons/si';
import { BsCpuFill, BsRobot } from 'react-icons/bs';
import { FiTerminal } from 'react-icons/fi';
import './TechStack.css';

const TechStack = () => {
  const categories = [
    {
      title: "💻 Languages",
      skills: [
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, color: '#f89820' }
      ]
    },
    {
      title: "🌐 Web Development",
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'REST APIs', icon: <FaNetworkWired />, color: '#4CAF50' },
        { name: 'Streamlit', icon: <SiStreamlit />, color: '#FF4B4B' }
      ]
    },
    {
      title: "🗄️ Databases",
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'NoSQL', icon: <FaDatabase />, color: '#4DB33D' }
      ]
    },
    {
      title: "🧠 Core Concepts",
      skills: [
        { name: 'Data Structures', icon: <FaCodeBranch />, color: '#8b5cf6' },
        { name: 'DBMS', icon: <FaDatabase />, color: '#F29111' },
        { name: 'OOP', icon: <FaCubes />, color: '#06B6D4' },
        { name: 'Problem Solving', icon: <FaBrain />, color: '#FF7B72' }
      ]
    },
    {
      title: "🤖 AI & Machine Learning",
      skills: [
        { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
        { name: 'TensorFlow/Keras', icon: <SiTensorflow />, color: '#FF6F00' },
        { name: 'NLP (TF-IDF, Cosine Sim)', icon: <FaLanguage />, color: '#A855F7' },
        { name: 'Computer Vision', icon: <SiOpencv />, color: '#5C3EE8' },
        { name: 'Model Evaluation', icon: <FaChartLine />, color: '#10B981' }
      ]
    },
    {
      title: "🛠 Tools & Technologies",
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
        { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
        { name: 'Jupyter Notebook', icon: <SiJupyter />, color: '#F37626' },
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' }
      ]
    },
    {
      title: "⚡ Development Approach",
      skills: [
        { name: 'Prompt Engineering', icon: <FiTerminal />, color: '#38BDF8' },
        { name: 'AI-assisted dev', icon: <BsRobot />, color: '#818CF8' },
        { name: 'Modular coding', icon: <FaCubes />, color: '#34D399' }
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
        Technical Skills
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
