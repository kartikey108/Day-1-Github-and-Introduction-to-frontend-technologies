'use client';

import { motion } from 'framer-motion';
import { DatePackage } from '@/types';
import { MapPin, Star, Shield, CreditCard, DollarSign } from 'lucide-react';
import { Button } from '../ui/Button';

interface DatePackageCardProps {
  package: DatePackage;
}

export const DatePackageCard = ({ package: pkg }: DatePackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.images[0]}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          {pkg.insuranceAvailable && (
            <span className="px-2 py-1 bg-green-500/80 rounded-lg text-white text-xs font-medium flex items-center gap-1">
              <Shield size={12} />
              Insurance
            </span>
          )}
          {pkg.emiAvailable && (
            <span className="px-2 py-1 bg-blue-500/80 rounded-lg text-white text-xs font-medium flex items-center gap-1">
              <CreditCard size={12} />
              EMI
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-yellow-400 mb-2">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">{pkg.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
        <p className="flex items-center text-gray-400 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          {pkg.venue}
        </p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {pkg.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">${pkg.price}</span>
            <span className="text-gray-400 text-sm ml-2">per person</span>
          </div>
          <Button size="sm">Book Now</Button>
        </div>

        {pkg.emiAvailable && (
          <div className="mt-3 pt-3 border-t border-gray-700">
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <DollarSign size={12} />
              EMI starting from ${Math.round(pkg.price / 3)}/month
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
