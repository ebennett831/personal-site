/**
 * useMobileMenu Hook - Black Box for Menu State Management
 * 
 * Purpose: Manages mobile menu open/close state
 * Interface: Returns { isOpen, toggle, close }
 * Replaceable: State management logic can be swapped (localStorage, URL state, etc.)
 * Single Responsibility: Only handles menu state
 */

'use client';

import { useState, useEffect } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      // Close mobile menu when switching to desktop view
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      window.addEventListener('resize', handleResize);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen]);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
}
