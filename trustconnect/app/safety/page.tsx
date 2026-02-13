'use client';

import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Shield,
  AlertTriangle,
  Phone,
  MapPin,
  FileText,
  Users,
  Lock,
  Bell,
} from 'lucide-react';

const safetyTips = [
  'Always meet in public places for first dates',
  'Share your date details with a trusted friend',
  'Trust your instincts - if something feels off, leave',
  'Never share financial information',
  'Video call before meeting in person',
  'Keep personal information private until trust is established',
];

const emergencyActions = [
  { icon: Phone, label: 'Emergency Call', color: 'red' },
  { icon: MapPin, label: 'Share Live Location', color: 'blue' },
  { icon: Bell, label: 'Alert Trusted Contacts', color: 'yellow' },
];

export default function SafetyPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Shield className="text-indigo-400" size={32} />
            Safety Center
          </h1>
          <p className="text-gray-400">
            Your safety is our top priority. Use these tools to stay protected.
          </p>
        </div>

        {/* Emergency Actions */}
        <Card className="mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-red-400" size={24} />
            Emergency Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyActions.map((action) => (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 bg-${action.color}-600/20 border border-${action.color}-500/30 rounded-xl hover:bg-${action.color}-600/30 transition-colors`}
              >
                <action.icon
                  className={`text-${action.color}-400 mb-3`}
                  size={32}
                />
                <p className={`font-semibold text-${action.color}-300`}>
                  {action.label}
                </p>
              </motion.button>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Report User */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="text-orange-400" size={24} />
              Report a User
            </h2>
            <p className="text-gray-400 mb-4">
              If someone makes you uncomfortable or violates our guidelines, report them
              immediately.
            </p>
            <Button variant="danger" className="w-full">
              Submit Report
            </Button>
          </Card>

          {/* Safety Tips */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lock className="text-green-400" size={24} />
              Safety Tips
            </h2>
            <div className="space-y-3">
              {safetyTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg"
                >
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-300">{tip}</p>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Trusted Contacts */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="text-cyan-400" size={24} />
              Trusted Contacts
            </h2>
            <p className="text-gray-400 mb-4">
              Add people who can be alerted in case of emergency
            </p>
            <div className="space-y-3 mb-4">
              <div className="p-3 bg-gray-800/50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-400">+1 234 567 8900</p>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Add Contact
            </Button>
          </Card>

          {/* Privacy Settings Quick Access */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lock className="text-purple-400" size={24} />
              Privacy Settings
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Show Online Status</span>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Show Location</span>
                <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Allow Messages from Verified Only</span>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </MainLayout>
  );
}
