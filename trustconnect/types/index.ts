export interface User {
  id: string;
  name: string;
  age: number;
  avatar: string;
  location: string;
  bio: string;
  verified: boolean;
  trustScore: number;
  trustBadge: 'bronze' | 'silver' | 'gold' | 'platinum';
  intents: string[];
  interests: string[];
  profileVideo?: string;
  verificationStatus: {
    phone: boolean;
    id: boolean;
    selfie: boolean;
    social: boolean;
  };
  reputation: {
    reliability: number;
    communication: number;
    safety: number;
    punctuality: number;
  };
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface DatePackage {
  id: string;
  title: string;
  venue: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  insuranceAvailable: boolean;
  emiAvailable: boolean;
}

export interface ActivityPartner {
  id: string;
  name: string;
  avatar: string;
  activity: string;
  intents: string[];
  rating: number;
  location: string;
}

export interface SafetyReport {
  id: string;
  reporterId: string;
  reportedUserId: string;
  reason: string;
  description: string;
  timestamp: Date;
  status: 'pending' | 'reviewed' | 'resolved';
}

export interface Feedback {
  id: string;
  fromUserId: string;
  toUserId: string;
  dateId: string;
  rating: number;
  categories: {
    punctuality: number;
    communication: number;
    behavior: number;
    safety: number;
  };
  comments: string;
  timestamp: Date;
}
