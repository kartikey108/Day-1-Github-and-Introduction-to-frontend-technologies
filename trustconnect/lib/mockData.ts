import { User, DatePackage, ActivityPartner, Message, Feedback } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 28,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    location: 'New York, NY',
    bio: 'Coffee enthusiast, yoga lover, and aspiring photographer. Looking for genuine connections.',
    verified: true,
    trustScore: 92,
    trustBadge: 'gold',
    intents: ['Serious Dating', 'Long-term Relationship'],
    interests: ['Photography', 'Yoga', 'Travel', 'Coffee'],
    verificationStatus: {
      phone: true,
      id: true,
      selfie: true,
      social: true,
    },
    reputation: {
      reliability: 95,
      communication: 90,
      safety: 98,
      punctuality: 88,
    },
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 32,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    location: 'San Francisco, CA',
    bio: 'Tech entrepreneur and foodie. Let\'s explore the city together!',
    verified: true,
    trustScore: 88,
    trustBadge: 'silver',
    intents: ['Casual Dating', 'Friendship'],
    interests: ['Technology', 'Food', 'Hiking', 'Music'],
    verificationStatus: {
      phone: true,
      id: true,
      selfie: true,
      social: false,
    },
    reputation: {
      reliability: 85,
      communication: 92,
      safety: 95,
      punctuality: 80,
    },
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    age: 26,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    location: 'Los Angeles, CA',
    bio: 'Artist and adventure seeker. Life is too short for fake connections.',
    verified: true,
    trustScore: 95,
    trustBadge: 'platinum',
    intents: ['Serious Dating', 'Activity Partner'],
    interests: ['Art', 'Adventure', 'Music', 'Dance'],
    verificationStatus: {
      phone: true,
      id: true,
      selfie: true,
      social: true,
    },
    reputation: {
      reliability: 98,
      communication: 95,
      safety: 100,
      punctuality: 92,
    },
  },
];

export const mockDatePackages: DatePackage[] = [
  {
    id: '1',
    title: 'Rooftop Dinner Experience',
    venue: 'SkyHigh Restaurant',
    description: 'An unforgettable dinner under the stars with panoramic city views',
    price: 150,
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'],
    category: 'Dining',
    rating: 4.8,
    insuranceAvailable: true,
    emiAvailable: true,
  },
  {
    id: '2',
    title: 'Sunset Beach Walk & Picnic',
    venue: 'Marina Beach',
    description: 'Romantic beach walk with curated picnic basket',
    price: 75,
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'],
    category: 'Outdoor',
    rating: 4.6,
    insuranceAvailable: true,
    emiAvailable: false,
  },
  {
    id: '3',
    title: 'Wine Tasting Evening',
    venue: 'Vintage Cellars',
    description: 'Premium wine tasting session with expert sommelier',
    price: 120,
    images: ['https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800'],
    category: 'Wine & Dine',
    rating: 4.9,
    insuranceAvailable: true,
    emiAvailable: true,
  },
];

export const mockActivityPartners: ActivityPartner[] = [
  {
    id: '1',
    name: 'Alex Turner',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    activity: 'Hiking',
    intents: ['Activity Partner', 'Friendship'],
    rating: 4.7,
    location: 'Seattle, WA',
  },
  {
    id: '2',
    name: 'Jessica Lee',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    activity: 'Gym Buddy',
    intents: ['Activity Partner'],
    rating: 4.9,
    location: 'Boston, MA',
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '2',
    receiverId: '1',
    content: 'Hey! I saw your profile and would love to connect. Your photography work looks amazing!',
    timestamp: new Date('2024-01-15T10:30:00'),
    read: true,
  },
  {
    id: '2',
    senderId: '1',
    receiverId: '2',
    content: 'Thank you! I checked out your profile too. Love that you\'re into hiking!',
    timestamp: new Date('2024-01-15T10:35:00'),
    read: true,
  },
];

export const mockFeedback: Feedback[] = [
  {
    id: '1',
    fromUserId: '1',
    toUserId: '2',
    dateId: 'date1',
    rating: 5,
    categories: {
      punctuality: 5,
      communication: 5,
      behavior: 5,
      safety: 5,
    },
    comments: 'Great conversation and very respectful. Would definitely meet again!',
    timestamp: new Date('2024-01-10T20:00:00'),
  },
];

export const trustScoreLevels = [
  { min: 0, max: 50, badge: 'bronze', color: '#CD7F32' },
  { min: 51, max: 75, badge: 'silver', color: '#C0C0C0' },
  { min: 76, max: 90, badge: 'gold', color: '#FFD700' },
  { min: 91, max: 100, badge: 'platinum', color: '#E5E4E2' },
];
