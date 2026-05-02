import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loader-content">
        <svg viewBox="0 0 400 100" className="logo-svg">
          {/* A cool, stylized text path for "Pranav SP" */}
          <motion.text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="logo-text"
            initial={{ strokeDasharray: 500, strokeDashoffset: 500, fill: "rgba(255,255,255,0)" }}
            animate={{ 
              strokeDashoffset: 0,
              fill: "rgba(255,255,255,1)"
            }}
            transition={{ 
              strokeDashoffset: { duration: 1.5, ease: "easeInOut" },
              fill: { duration: 0.8, delay: 1.2, ease: "easeIn" }
            }}
          >
            SP
          </motion.text>
        </svg>
        <div className="progress-bar-container">
          <motion.div 
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="progress-text">{Math.min(progress, 100)}%</p>
      </div>
    </motion.div>
  );
};

export default Loader;
