import React from 'react';
import { motion } from 'framer-motion';
import './FloatingCard.css';

const FloatingCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`floating-card ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;
