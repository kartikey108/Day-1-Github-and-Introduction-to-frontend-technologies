'use client';

import { motion } from 'framer-motion';
import { getTrustBadgeColor } from '@/utils/helpers';
import { Shield, Award, Star } from 'lucide-react';

interface TrustBadgeProps {
  score: number;
  badge: 'bronze' | 'silver' | 'gold' | 'platinum';
  size?: 'sm' | 'md' | 'lg';
  showScore?: boolean;
}

export const TrustBadge = ({ score, badge, size = 'md', showScore = true }: TrustBadgeProps) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const iconSize = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${getTrustBadgeColor(
        badge
      )} ${sizeClasses[size]} font-semibold text-white shadow-lg`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Shield size={iconSize[size]} />
      <span className="capitalize">{badge}</span>
      {showScore && (
        <>
          <Star size={iconSize[size]} fill="currentColor" />
          <span>{score}</span>
        </>
      )}
    </motion.div>
  );
};
