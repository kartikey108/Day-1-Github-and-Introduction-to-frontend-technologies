'use client';

import { motion } from 'framer-motion';
import { Message } from '@/types';
import { formatDate } from '@/utils/helpers';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  senderName?: string;
}

export const MessageBubble = ({ message, isOwn, senderName }: MessageBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`max-w-[70%] ${isOwn ? 'items-end' : 'items-start'}`}>
        {!isOwn && senderName && (
          <p className="text-xs text-gray-400 mb-1 ml-3">{senderName}</p>
        )}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`rounded-2xl px-4 py-3 ${
            isOwn
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-sm'
              : 'bg-gray-800/80 text-gray-200 rounded-bl-sm'
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </motion.div>
        <p className="text-xs text-gray-500 mt-1 mx-3">
          {formatDate(message.timestamp)}
        </p>
      </div>
    </motion.div>
  );
};
