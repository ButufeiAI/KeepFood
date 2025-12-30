// Types pour la gamification

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  requirement: {
    type: 'orders' | 'visits' | 'spending' | 'reviews' | 'loyalty' | 'social';
    value: number;
  };
  earnedAt?: string;
  progress?: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'daily' | 'weekly' | 'monthly' | 'special';
  startDate: string;
  endDate: string;
  requirement: {
    action: string;
    target: number;
    current: number;
  };
  reward: {
    type: 'points' | 'badge' | 'discount';
    value: number | string;
  };
  completed: boolean;
  claimed: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  clientId: string;
  clientName: string;
  avatar?: string;
  score: number;
  badges: number;
  level: number;
  trend: 'up' | 'down' | 'same';
}

export interface GamificationProfile {
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalOrders: number;
  totalSpent: number;
  badges: Badge[];
  activeChallenges: Challenge[];
  completedChallenges: Challenge[];
  rank: number;
  achievements: {
    firstOrder: boolean;
    loyalCustomer: boolean;
    foodie: boolean;
    socialButterfly: boolean;
    reviewer: boolean;
  };
}

// Badges prédéfinis
export const BADGES: Omit<Badge, 'id' | 'earnedAt' | 'progress'>[] = [
  {
    name: 'Premier Pas',
    description: 'Passez votre première commande',
    icon: '🎯',
    rarity: 'common',
    requirement: { type: 'orders', value: 1 },
  },
  {
    name: 'Client Régulier',
    description: 'Passez 10 commandes',
    icon: '⭐',
    rarity: 'common',
    requirement: { type: 'orders', value: 10 },
  },
  {
    name: 'Fidèle',
    description: 'Passez 25 commandes',
    icon: '💎',
    rarity: 'rare',
    requirement: { type: 'orders', value: 25 },
  },
  {
    name: 'VIP',
    description: 'Passez 50 commandes',
    icon: '👑',
    rarity: 'epic',
    requirement: { type: 'orders', value: 50 },
  },
  {
    name: 'Légende',
    description: 'Passez 100 commandes',
    icon: '🏆',
    rarity: 'legendary',
    requirement: { type: 'orders', value: 100 },
  },
  {
    name: 'Gourmet',
    description: 'Dépensez 100€',
    icon: '🍽️',
    rarity: 'common',
    requirement: { type: 'spending', value: 10000 }, // en centimes
  },
  {
    name: 'Fin Connaisseur',
    description: 'Dépensez 500€',
    icon: '🥂',
    rarity: 'rare',
    requirement: { type: 'spending', value: 50000 },
  },
  {
    name: 'Mécène',
    description: 'Dépensez 1000€',
    icon: '💰',
    rarity: 'epic',
    requirement: { type: 'spending', value: 100000 },
  },
  {
    name: 'Critique Gastronomique',
    description: 'Laissez 10 avis',
    icon: '📝',
    rarity: 'rare',
    requirement: { type: 'reviews', value: 10 },
  },
  {
    name: 'Explorateur',
    description: 'Commandez dans 5 restaurants différents',
    icon: '🗺️',
    rarity: 'rare',
    requirement: { type: 'visits', value: 5 },
  },
  {
    name: 'Ambassadeur',
    description: 'Parrainez 5 amis',
    icon: '🤝',
    rarity: 'epic',
    requirement: { type: 'social', value: 5 },
  },
  {
    name: 'Marathonien',
    description: 'Commandez 7 jours d\'affilée',
    icon: '🏃',
    rarity: 'epic',
    requirement: { type: 'visits', value: 7 },
  },
];

// Calcul du niveau et de l'XP
export const calculateLevel = (xp: number): { level: number; xpToNextLevel: number } => {
  // Formule: Level = floor(sqrt(XP / 100))
  // XP nécessaire pour level N = N² * 100
  const level = Math.floor(Math.sqrt(xp / 100)) + 1;
  const xpForCurrentLevel = Math.pow(level - 1, 2) * 100;
  const xpForNextLevel = Math.pow(level, 2) * 100;
  const xpToNextLevel = xpForNextLevel - xp;
  
  return { level, xpToNextLevel };
};

// XP gagné par action
export const XP_REWARDS = {
  ORDER_PLACED: 10,
  ORDER_COMPLETED: 20,
  REVIEW_SUBMITTED: 50,
  BADGE_EARNED: 100,
  CHALLENGE_COMPLETED: 150,
  DAILY_LOGIN: 5,
  FRIEND_REFERRED: 200,
};

// Couleurs par rareté
export const RARITY_COLORS = {
  common: '#9ca3af',
  rare: '#3b82f6',
  epic: '#a855f7',
  legendary: '#f59e0b',
};

