'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { ChatInput } from '@/components/chat/ChatInput';
import { mockUsers, mockMessages } from '@/lib/mockData';
import { Message } from '@/types';
import { Video, Phone, MoreVertical } from 'lucide-react';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [selectedUser] = useState(mockUsers[1]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: String(Date.now()),
      senderId: '1',
      receiverId: selectedUser.id,
      content,
      timestamp: new Date(),
      read: false,
    };
    setMessages([...messages, newMessage]);
  };

  const handleReport = () => {
    alert('Safety report initiated. Our team will review this conversation.');
  };

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto h-[calc(100vh-12rem)]"
      >
        <Card className="h-full flex flex-col p-0 overflow-hidden">
          {/* Chat Header */}
          <div className="glass border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{selectedUser.name}</h3>
                  <p className="text-sm text-green-400">Online</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <Phone size={20} className="text-gray-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <Video size={20} className="text-gray-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <MoreVertical size={20} className="text-gray-400" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isOwn={message.senderId === '1'}
                senderName={message.senderId === '1' ? 'You' : selectedUser.name}
              />
            ))}
          </div>

          {/* Chat Input */}
          <ChatInput onSend={handleSendMessage} onReport={handleReport} />
        </Card>
      </motion.div>
    </MainLayout>
  );
}
