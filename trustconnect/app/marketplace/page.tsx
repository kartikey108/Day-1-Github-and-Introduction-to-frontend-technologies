'use client';

import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { DatePackageCard } from '@/components/marketplace/DatePackageCard';
import { mockDatePackages } from '@/lib/mockData';
import { ShoppingBag, Filter, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Dining', 'Outdoor', 'Wine & Dine', 'Adventure', 'Culture'];

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <ShoppingBag className="text-indigo-400" size={32} />
            Date Package Marketplace
          </h1>
          <p className="text-gray-400">
            Curated experiences with insurance protection and flexible payment
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex items-center gap-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8 mb-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-indigo-400" size={24} />
            <h2 className="text-2xl font-bold">Featured This Week</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Premium Experiences</h3>
              <p className="text-gray-300 mb-4">
                Handpicked dates designed for meaningful connections
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                  Insurance Included
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  EMI Available
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                  Verified Venues
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">20+</div>
                <p className="text-gray-300">Curated Experiences</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDatePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <DatePackageCard package={pkg} />
            </motion.div>
          ))}
        </div>

        {/* Insurance & EMI Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-green-400 text-sm">✓</span>
              </div>
              Date Insurance
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Get protection against no-shows, cancellations, and safety concerns. Full
              refund policy included.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                No-show protection
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                24/7 safety support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Money-back guarantee
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 text-sm">$</span>
              </div>
              Flexible EMI Options
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Split payments into 3 or 6 monthly installments with zero interest for
              premium experiences.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                0% interest on all EMI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Instant approval
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                No hidden charges
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
