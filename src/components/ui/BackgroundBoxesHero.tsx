"use client";

import React from 'react';
import { Boxes } from './background-boxes';

interface BackgroundBoxesHeroProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Background Boxes Hero Wrapper - Black Box Component for Hero Sections
 * 
 * Purpose: Provides animated grid background specifically for hero sections
 * Interface: Simple wrapper that takes children and optional className
 * Replaceable: Can swap boxes for any other background effect
 * 
 * Design Principles:
 * - Single responsibility: Only handles background grid animation
 * - Clean interface: Just children and optional styling
 * - Encapsulates complexity: Hides motion/animation implementation details
 * - Performance optimized: Uses proper layering and z-index management
 * - Responsive: Works well on both desktop and mobile
 * 
 * Architecture Notes:
 * - Uses Aceternity's Boxes component with responsive grid
 * - Content uses pointer-events-none to allow background interaction
 * - Individual interactive elements restore pointer events as needed
 * - Maintains clean separation between background and content
 */
export function BackgroundBoxesHero({ children, className = "" }: BackgroundBoxesHeroProps) {
  return (
    <div className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-slate-900 ${className}`}>
      {/* Animated background boxes */}
      <Boxes />
      
      {/* Content layer - allows pointer events to pass through to boxes */}
      <div className="relative z-20 w-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}
