'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Camera, Check, VideoIcon } from 'lucide-react';

export const SelfieVerification = ({ onNext }: { onNext: () => void }) => {
  const [captured, setCaptured] = useState(false);

  const handleCapture = () => {
    setCaptured(true);
    setTimeout(() => onNext(), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <div className="glass-card rounded-2xl p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
            <Camera className="text-white" size={32} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Live Selfie</h2>
        <p className="text-gray-400 text-center mb-8">
          Take a live selfie to verify your identity
        </p>

        <motion.div
          className={`relative aspect-[3/4] rounded-xl overflow-hidden mb-6 ${
            captured ? 'border-4 border-green-500' : 'border-2 border-gray-700'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            {captured ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex flex-col items-center"
              >
                <Check className="text-green-500 mb-4" size={64} />
                <p className="text-green-500 font-semibold">Selfie Captured!</p>
              </motion.div>
            ) : (
              <VideoIcon className="text-gray-600" size={64} />
            )}
          </div>
        </motion.div>

        {!captured && (
          <div className="mb-6 space-y-2 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Look directly at the camera
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Ensure good lighting
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              Remove glasses if wearing
            </p>
          </div>
        )}

        <Button
          onClick={captured ? onNext : handleCapture}
          className="w-full"
        >
          {captured ? 'Continue' : 'Capture Selfie'}
        </Button>
      </div>
    </motion.div>
  );
};
