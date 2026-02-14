// Shared types for Kine app

export interface User {
  id: string;
  email: string;
  plan: 'basic' | 'pro' | 'elite';
  createdAt: Date;
}

export interface NutritionLog {
  id: string;
  userId: string;
  text: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  timestamp: Date;
}

export interface WorkoutSession {
  id: string;
  userId: string;
  exercise: string;
  reps: number;
  formScore?: number;
  videoUrl?: string;
  timestamp: Date;
}

export interface CoachingSession {
  id: string;
  userId: string;
  type: 'voice' | 'video';
  duration: number; // in seconds
  timestamp: Date;
}

export interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  videoMinutes: number;
  popular?: boolean;
}
