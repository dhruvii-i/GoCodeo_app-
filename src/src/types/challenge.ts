export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: number;
  type: 'daily' | 'weekly' | 'monthly';
  progress: number;
  completed: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}
