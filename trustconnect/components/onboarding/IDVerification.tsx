'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Upload, FileCheck, IdCard } from 'lucide-react';

export const IDVerification = ({ onNext }: { onNext: () => void }) => {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    setUploaded(true);
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
            <IdCard className="text-white" size={32} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">ID Verification</h2>
        <p className="text-gray-400 text-center mb-8">
          Upload a government-issued ID for verification
        </p>

        <motion.div
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
            uploaded
              ? 'border-green-500 bg-green-500/10'
              : 'border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/5'
          }`}
          whileHover={{ scale: uploaded ? 1 : 1.02 }}
          onClick={() => !uploaded && document.getElementById('id-upload')?.click()}
        >
          <input
            id="id-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
          {uploaded ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center"
            >
              <FileCheck className="text-green-500 mb-4" size={48} />
              <p className="text-green-500 font-semibold">ID Uploaded Successfully!</p>
            </motion.div>
          ) : (
            <>
              <Upload className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-300 font-medium mb-2">Click to upload your ID</p>
              <p className="text-sm text-gray-500">
                Accepted: Driver's License, Passport, National ID
              </p>
            </>
          )}
        </motion.div>

        <div className="mt-6 space-y-2 text-sm text-gray-400">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Your data is encrypted and secure
          </p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            Verification takes 24-48 hours
          </p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            We never share your ID with other users
          </p>
        </div>

        {uploaded && (
          <Button onClick={onNext} className="w-full mt-6">
            Continue
          </Button>
        )}
      </div>
    </motion.div>
  );
};
