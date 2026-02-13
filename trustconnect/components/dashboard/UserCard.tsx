'use client';

import { motion } from 'framer-motion';
import { User } from '@/types';
import { TrustBadge } from '../ui/TrustBadge';
import { MapPin, Heart, X, Info } from 'lucide-react';
import Image from 'next/image';

interface UserCardProps {
  user: User;
  onLike?: () => void;
  onSkip?: () => void;
}

export const UserCard = ({ user, onLike, onSkip }: UserCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute top-4 right-4">
          <TrustBadge score={user.trustScore} badge={user.trustBadge} size="sm" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">
            {user.name}, {user.age}
          </h3>
          <p className="flex items-center text-gray-300 text-sm mb-2">
            <MapPin size={14} className="mr-1" />
            {user.location}
          </p>
          <p className="text-gray-300 text-sm line-clamp-2">{user.bio}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {user.intents.slice(0, 2).map((intent) => (
            <span
              key={intent}
              className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium"
            >
              {intent}
            </span>
          ))}
        </div>

        {(onLike || onSkip) && (
          <div className="flex gap-3">
            {onSkip && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSkip}
                className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 font-medium transition-colors flex items-center justify-center gap-2"
              >
                <X size={20} />
                Pass
              </motion.button>
            )}
            {onLike && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLike}
                className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-xl text-white font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Heart size={20} />
                Like
              </motion.button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
