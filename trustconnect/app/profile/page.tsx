'use client';

import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { TrustBadge } from '@/components/ui/TrustBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { mockUsers } from '@/lib/mockData';
import {
  Shield,
  Check,
  MapPin,
  Briefcase,
  Heart,
  Camera,
  Settings,
  Share2,
} from 'lucide-react';

export default function ProfilePage() {
  const user = mockUsers[0];

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Profile Header */}
        <Card className="mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-2xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2">
                <TrustBadge score={user.trustScore} badge={user.trustBadge} size="sm" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">
                    {user.name}, {user.age}
                  </h1>
                  <p className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-1" />
                    {user.location}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Settings size={20} />
                </motion.button>
              </div>

              <p className="text-gray-300 mb-4">{user.bio}</p>

              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trust Score Dashboard */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="text-indigo-400" size={24} />
              Trust Score
            </h2>
            <div className="space-y-4">
              <ProgressBar
                value={user.reputation.reliability}
                label="Reliability"
                color="green"
              />
              <ProgressBar
                value={user.reputation.communication}
                label="Communication"
                color="cyan"
              />
              <ProgressBar
                value={user.reputation.safety}
                label="Safety"
                color="indigo"
              />
              <ProgressBar
                value={user.reputation.punctuality}
                label="Punctuality"
                color="yellow"
              />
            </div>
          </Card>

          {/* Verification Status */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Check className="text-green-400" size={24} />
              Verification Status
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Phone Verified', status: user.verificationStatus.phone },
                { label: 'ID Verified', status: user.verificationStatus.id },
                { label: 'Selfie Verified', status: user.verificationStatus.selfie },
                { label: 'Social Verified', status: user.verificationStatus.social },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                >
                  <span className="text-gray-300">{item.label}</span>
                  {item.status ? (
                    <Check className="text-green-400" size={20} />
                  ) : (
                    <span className="text-gray-500 text-sm">Pending</span>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Intro Video Placeholder */}
          <Card className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Camera className="text-purple-400" size={24} />
              Intro Video
            </h2>
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Camera className="mx-auto text-gray-600 mb-4" size={48} />
                <p className="text-gray-400">Upload your intro video</p>
                <p className="text-sm text-gray-500 mt-2">
                  Show your personality in 30 seconds
                </p>
              </div>
            </div>
          </Card>

          {/* Intent Tags */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-pink-400" size={24} />
              Looking For
            </h2>
            <div className="space-y-2">
              {user.intents.map((intent) => (
                <div
                  key={intent}
                  className="p-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-lg text-indigo-300 font-medium"
                >
                  {intent}
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium flex items-center justify-center gap-2"
              >
                <Share2 size={18} />
                Share Profile
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 font-medium transition-colors"
              >
                View Public Profile
              </motion.button>
            </div>
          </Card>
        </div>
      </motion.div>
    </MainLayout>
  );
}
