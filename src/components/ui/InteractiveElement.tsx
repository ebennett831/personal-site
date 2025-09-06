"use client";

import { ReactNode } from 'react';

interface InteractiveElementProps {
  children: ReactNode;
  className?: string;
}

/**
 * Interactive Element Wrapper - Black Box Component for Clickable Content
 * 
 * Purpose: Ensures interactive elements work over background animations
 * Interface: Simple wrapper that takes children and optional className
 * Replaceable: Can swap pointer event handling strategy
 * 
 * Design Principles:
 * - Single responsibility: Only handles pointer event restoration
 * - Clean interface: Just children and optional styling
 * - Encapsulates complexity: Hides pointer-events implementation
 * - Composable: Works with any interactive element
 * 
 * Architecture Notes:
 * - Restores pointer events for elements in pointer-events-none containers
 * - Maintains accessibility and interaction functionality
 * - Clean separation between background and interactive concerns
 */
export function InteractiveElement({ children, className = "" }: InteractiveElementProps) {
  return (
    <div className={`pointer-events-auto ${className}`}>
      {children}
    </div>
  );
}
