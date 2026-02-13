'use client';

import { MainLayout } from '@/components/layout/MainLayout';
import { Filters } from '@/components/dashboard/Filters';
import { UserCard } from '@/components/dashboard/UserCard';
import { mockUsers } from '@/lib/mockData';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Filters />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <UserCard
                user={user}
                onLike={() => console.log('Liked', user.name)}
                onSkip={() => console.log('Skipped', user.name)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
}
