'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Smartphone, Check } from 'lucide-react';

export const PhoneVerification = ({ onNext }: { onNext: () => void }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState<'phone' | 'otp'>('phone');

  const handleSendOTP = () => {
    if (phone) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerify = () => {
    if (otp.every((digit) => digit !== '')) {
      onNext();
    }
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
            <Smartphone className="text-white" size={32} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Phone Verification</h2>
        <p className="text-gray-400 text-center mb-8">
          {step === 'phone'
            ? 'Enter your phone number to receive an OTP'
            : 'Enter the 6-digit code sent to your phone'}
        </p>

        {step === 'phone' ? (
          <>
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Phone Number"
              required
            />
            <Button onClick={handleSendOTP} className="w-full mt-6">
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <div className="flex justify-center gap-2 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg text-center text-white text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              ))}
            </div>
            <Button onClick={handleVerify} className="w-full">
              Verify OTP
            </Button>
            <button
              onClick={() => setStep('phone')}
              className="w-full mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Change phone number
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};
