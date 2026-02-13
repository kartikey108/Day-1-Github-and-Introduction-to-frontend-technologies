'use client';

import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { mockFeedback } from '@/lib/mockData';
import {
  TrendingUp,
  Award,
  Star,
  MessageSquare,
  Clock,
  ThumbsUp,
  Activity,
} from 'lucide-react';

const trustMetrics = [
  { label: 'Reliability', value: 95, icon: ThumbsUp, color: 'green' },
  { label: 'Communication', value: 90, icon: MessageSquare, color: 'cyan' },
  { label: 'Safety', value: 98, icon: Award, color: 'indigo' },
  { label: 'Punctuality', value: 88, icon: Clock, color: 'yellow' },
];

const recentActivity = [
  { type: 'date', label: 'Completed date with Sarah', score: '+5', time: '2 days ago' },
  { type: 'feedback', label: 'Received positive feedback', score: '+3', time: '5 days ago' },
  { type: 'verification', label: 'Verified social media', score: '+10', time: '1 week ago' },
];

export default function TrustPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <TrendingUp className="text-indigo-400" size={32} />
            Trust Dashboard
          </h1>
          <p className="text-gray-400">
            Monitor your reputation and behavior analytics
          </p>
        </div>

        {/* Overall Trust Score */}
        <Card className="mb-6" gradient>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Overall Trust Score</h2>
              <p className="text-gray-300">
                Your reputation across all categories
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  92
                </div>
                <p className="text-sm text-gray-400 mt-2">Out of 100</p>
              </div>
              <div className="w-32 h-32 relative">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-700"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.92)}`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trust Metrics */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity className="text-indigo-400" size={24} />
              Reputation Metrics
            </h2>
            <div className="space-y-4">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <metric.icon size={18} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-300">
                      {metric.label}
                    </span>
                  </div>
                  <ProgressBar
                    value={metric.value}
                    color={metric.color}
                    showValue={true}
                  />
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="text-cyan-400" size={24} />
              Recent Activity
            </h2>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-white mb-1">
                        {activity.label}
                      </p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                    <span className="text-green-400 font-bold text-lg">
                      {activity.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Feedback Summary */}
          <Card className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="text-yellow-400" size={24} />
              Recent Feedback
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockFeedback.map((feedback) => (
                <div
                  key={feedback.id}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < feedback.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {new Date(feedback.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">"{feedback.comments}"</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(feedback.categories).map(([key, value]) => (
                      <span
                        key={key}
                        className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs"
                      >
                        {key}: {value}/5
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Trust Badge Progress */}
          <Card className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-purple-400" size={24} />
              Badge Progress
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Bronze', 'Silver', 'Gold', 'Platinum'].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl text-center ${
                    index <= 2
                      ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30'
                      : 'bg-gray-800/50 border border-gray-700'
                  }`}
                >
                  <Award
                    size={32}
                    className={`mx-auto mb-3 ${
                      index <= 2 ? 'text-green-400' : 'text-gray-600'
                    }`}
                  />
                  <p className={`font-bold ${index <= 2 ? 'text-green-400' : 'text-gray-500'}`}>
                    {badge}
                  </p>
                  {index <= 2 && (
                    <p className="text-xs text-gray-400 mt-1">Achieved</p>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </MainLayout>
  );
}
