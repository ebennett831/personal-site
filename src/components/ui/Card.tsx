import { CardProps } from '@/types';

/**
 * Card Component - Black Box for Content Cards
 * 
 * Purpose: Provides consistent card styling and hover effects
 * Interface: Takes className and children - completely flexible content
 * Replaceable: Can change styling/animation without affecting card content
 */
export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:border-gray-600 ${className}`}>
      {children}
    </div>
  );
}
