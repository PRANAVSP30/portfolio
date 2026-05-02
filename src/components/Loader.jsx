import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const diff = Math.random() * 20 + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loader-content">
        <div className="rings-container">
          <motion.div 
            className="ring ring-1"
            animate={{ rotateX: 360, rotateY: 180 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="ring ring-2"
            animate={{ rotateX: 180, rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="ring ring-3"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <div className="ring-core-text">SP</div>
        </div>

        <div className="loader-bottom">
          <div className="progress-bar-container">
            <motion.div 
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="progress-text">{Math.floor(progress)}%</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
