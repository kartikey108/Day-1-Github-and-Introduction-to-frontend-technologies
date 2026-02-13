'use client';

import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Settings as SettingsIcon,
  User,
  Lock,
  Bell,
  CreditCard,
  Shield,
  LogOut,
  ChevronRight,
  Eye,
  MapPin,
  Globe,
} from 'lucide-react';

const settingsSections = [
  {
    title: 'Account',
    icon: User,
    items: [
      { label: 'Edit Profile', description: 'Update your personal information' },
      { label: 'Change Password', description: 'Secure your account' },
      { label: 'Email Preferences', description: 'Manage email notifications' },
    ],
  },
  {
    title: 'Privacy',
    icon: Lock,
    items: [
      { label: 'Profile Visibility', description: 'Control who can see your profile' },
      { label: 'Location Settings', description: 'Manage location sharing' },
      { label: 'Blocked Users', description: 'View and manage blocked accounts' },
    ],
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: [
      { label: 'Push Notifications', description: 'Manage app notifications' },
      { label: 'Message Alerts', description: 'Control message notifications' },
      { label: 'Safety Alerts', description: 'Emergency notification settings' },
    ],
  },
  {
    title: 'Payment',
    icon: CreditCard,
    items: [
      { label: 'Payment Methods', description: 'Manage saved payment methods' },
      { label: 'Billing History', description: 'View transaction history' },
      { label: 'Subscription', description: 'Manage your premium plan' },
    ],
  },
];

const privacyToggles = [
  { label: 'Show Online Status', enabled: true },
  { label: 'Show Last Seen', enabled: false },
  { label: 'Show Location Distance', enabled: true },
  { label: 'Allow Profile Screenshot', enabled: false },
];

export default function SettingsPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <SettingsIcon className="text-indigo-400" size={32} />
            Settings & Privacy
          </h1>
          <p className="text-gray-400">Manage your account and privacy preferences</p>
        </div>

        {/* Verification Status Card */}
        <Card className="mb-6 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Verification Complete</h3>
                <p className="text-sm text-gray-400">All verification badges earned</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              View Status
            </Button>
          </div>
        </Card>

        {/* Quick Privacy Toggles */}
        <Card className="mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Eye className="text-cyan-400" size={24} />
            Quick Privacy Controls
          </h2>
          <div className="space-y-3">
            {privacyToggles.map((toggle) => (
              <div
                key={toggle.label}
                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
              >
                <span className="text-gray-300">{toggle.label}</span>
                <div
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
                    toggle.enabled ? 'bg-indigo-600' : 'bg-gray-700'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      toggle.enabled ? 'right-1' : 'left-1'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            <Card className="mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <section.icon className="text-indigo-400" size={24} />
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ scale: 1.01, x: 5 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <p className="font-medium text-white mb-1">{item.label}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <ChevronRight
                      className="text-gray-500 group-hover:text-gray-300 transition-colors"
                      size={20}
                    />
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Account Actions */}
        <Card>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="text-orange-400" size={24} />
            Account Actions
          </h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-between">
              <span>Download My Data</span>
              <ChevronRight size={20} />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span>Deactivate Account</span>
              <ChevronRight size={20} />
            </Button>
            <Button variant="danger" className="w-full justify-center gap-2">
              <LogOut size={20} />
              Log Out
            </Button>
          </div>
        </Card>

        {/* App Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>TrustConnect v1.0.0</p>
          <p className="mt-2">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Terms of Service
            </a>
            {' • '}
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </a>
            {' • '}
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Help Center
            </a>
          </p>
        </div>
      </motion.div>
    </MainLayout>
  );
}
