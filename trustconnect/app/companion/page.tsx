'use client';

import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { mockActivityPartners } from '@/lib/mockData';
import { Users, MapPin, Star, Filter, Calendar } from 'lucide-react';

const activities = ['All', 'Hiking', 'Gym', 'Coffee', 'Movies', 'Sports', 'Art', 'Music'];

export default function CompanionPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Users className="text-indigo-400" size={32} />
            Companion Mode
          </h1>
          <p className="text-gray-400">
            Find activity partners for shared experiences
          </p>
        </div>

        {/* Activity Filter */}
        <div className="mb-6 flex items-center gap-4 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg">
            <Filter size={18} className="text-gray-400" />
            <span className="text-sm text-gray-400 whitespace-nowrap">Filter by:</span>
          </div>
          {activities.map((activity) => (
            <motion.button
              key={activity}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-800/50 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 text-gray-400 hover:text-white rounded-lg text-sm font-medium whitespace-nowrap transition-all"
            >
              {activity}
            </motion.button>
          ))}
        </div>

        {/* Activity Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockActivityPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={partner.avatar}
                    alt={partner.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{partner.name}</h3>
                    <p className="flex items-center text-sm text-gray-400">
                      <MapPin size={14} className="mr-1" />
                      {partner.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                    <span className="text-sm font-semibold text-yellow-400">
                      {partner.rating}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 font-medium text-sm">
                    {partner.activity}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {partner.intents.map((intent) => (
                    <span
                      key={intent}
                      className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs"
                    >
                      {intent}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Connect
                  </Button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 transition-colors"
                  >
                    <Calendar size={18} />
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <Card>
          <h2 className="text-xl font-bold mb-6">How Companion Mode Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Choose Activity</h3>
              <p className="text-sm text-gray-400">
                Select what you'd like to do - from hiking to coffee meetups
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Find Partners</h3>
              <p className="text-sm text-gray-400">
                Browse verified users interested in the same activities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Connect & Meet</h3>
              <p className="text-sm text-gray-400">
                Schedule activities and build trust through shared experiences
              </p>
            </motion.div>
          </div>
        </Card>

        {/* Rating System Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 glass-card rounded-xl p-6 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border-yellow-500/20"
        >
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Star className="text-yellow-400" size={24} />
            Rating System
          </h3>
          <p className="text-gray-300 mb-4">
            After each activity, both participants can rate their experience. This helps
            maintain a safe and reliable community.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400 mb-1">4.5+</div>
              <p className="text-xs text-gray-400">Excellent</p>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-green-400 mb-1">4.0+</div>
              <p className="text-xs text-gray-400">Good</p>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-blue-400 mb-1">3.5+</div>
              <p className="text-xs text-gray-400">Average</p>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-gray-400 mb-1">&lt;3.5</div>
              <p className="text-xs text-gray-400">Review Needed</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
