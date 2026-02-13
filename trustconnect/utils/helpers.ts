export const getTrustBadgeColor = (badge: string): string => {
  const colors: Record<string, string> = {
    bronze: 'from-amber-700 to-amber-900',
    silver: 'from-gray-400 to-gray-600',
    gold: 'from-yellow-400 to-yellow-600',
    platinum: 'from-purple-400 to-purple-600',
  };
  return colors[badge] || colors.bronze;
};

export const formatDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
};

export const calculateTrustScore = (reputation: {
  reliability: number;
  communication: number;
  safety: number;
  punctuality: number;
}): number => {
  const { reliability, communication, safety, punctuality } = reputation;
  return Math.round((reliability + communication + safety + punctuality) / 4);
};
