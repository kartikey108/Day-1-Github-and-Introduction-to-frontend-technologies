'use client';

import { motion } from 'framer-motion';
import { ProgressBar } from '../ui/ProgressBar';
import { Shield, Check } from 'lucide-react';

interface TrustProgressProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  'Phone Verification',
  'ID Upload',
  'Live Selfie',
  'Profile Setup',
];

export const TrustProgress = ({ currentStep, totalSteps }: TrustProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Shield className="text-indigo-400" size={24} />
          <h3 className="text-lg font-semibold">Trust Verification</h3>
        </div>
        <span className="text-sm text-gray-400">
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      <ProgressBar value={progress} max={100} showValue={false} />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg text-center text-sm ${
              index < currentStep
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : index === currentStep - 1
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                : 'bg-gray-800/50 text-gray-500 border border-gray-700'
            }`}
          >
            {index < currentStep && (
              <Check className="mx-auto mb-1" size={16} />
            )}
            {step}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
