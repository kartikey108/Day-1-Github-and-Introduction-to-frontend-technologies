'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { PhoneVerification } from '@/components/onboarding/PhoneVerification';
import { IDVerification } from '@/components/onboarding/IDVerification';
import { SelfieVerification } from '@/components/onboarding/SelfieVerification';
import { TrustProgress } from '@/components/onboarding/TrustProgress';
import { Shield } from 'lucide-react';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Shield className="text-white" size={28} />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          TrustConnect
        </h1>
      </motion.div>

      <div className="w-full max-w-2xl">
        <TrustProgress currentStep={step} totalSteps={totalSteps} />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="phone"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <PhoneVerification onNext={handleNext} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="id"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <IDVerification onNext={handleNext} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="selfie"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <SelfieVerification onNext={handleNext} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
