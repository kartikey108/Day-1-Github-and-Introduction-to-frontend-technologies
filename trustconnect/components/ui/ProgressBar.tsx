'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  showValue?: boolean;
}

export const ProgressBar = ({
  value,
  max = 100,
  label,
  color = 'indigo',
  showValue = true,
}: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses: Record<string, string> = {
    indigo: 'bg-gradient-to-r from-indigo-500 to-purple-500',
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500',
    yellow: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    red: 'bg-gradient-to-r from-red-500 to-rose-500',
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          {showValue && <span className="text-sm font-semibold text-gray-200">{value}/{max}</span>}
        </div>
      )}
      <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color] || colorClasses.indigo} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};
