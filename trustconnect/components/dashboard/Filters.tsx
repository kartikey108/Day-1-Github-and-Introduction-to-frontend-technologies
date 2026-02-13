'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const intents = [
  'All',
  'Serious Dating',
  'Casual Dating',
  'Long-term Relationship',
  'Friendship',
  'Activity Partner',
];

const locations = ['All Locations', 'Nearby', 'Same City', 'Same State'];

const trustLevels = ['All Levels', 'Bronze+', 'Silver+', 'Gold+', 'Platinum'];

interface FiltersProps {
  onFilterChange?: (filters: any) => void;
}

export const Filters = ({ onFilterChange }: FiltersProps) => {
  const [selectedIntent, setSelectedIntent] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedTrustLevel, setSelectedTrustLevel] = useState('All Levels');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Discover</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-lg text-indigo-300 transition-colors"
        >
          <Filter size={18} />
          Filters
        </motion.button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="glass-card rounded-xl p-6 space-y-6">
          {/* Intent Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Intent
            </label>
            <div className="flex flex-wrap gap-2">
              {intents.map((intent) => (
                <motion.button
                  key={intent}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedIntent(intent)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedIntent === intent
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {intent}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Location
            </label>
            <div className="flex flex-wrap gap-2">
              {locations.map((location) => (
                <motion.button
                  key={location}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLocation(location)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedLocation === location
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {location}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Trust Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Trust Level
            </label>
            <div className="flex flex-wrap gap-2">
              {trustLevels.map((level) => (
                <motion.button
                  key={level}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTrustLevel(level)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTrustLevel === level
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {level}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
