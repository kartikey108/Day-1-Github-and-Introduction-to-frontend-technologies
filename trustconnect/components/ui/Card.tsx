'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card = ({ children, className = '', hover = false, gradient = false }: CardProps) => {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 ${className} ${
        gradient ? 'animated-gradient' : ''
      }`}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
