'use client';

import { useState } from 'react';
import { ContactMessage } from '@/types';

/**
 * useContactForm Hook - Black Box for Contact Form State Management
 * 
 * Purpose: Manages contact form modal state and handles form submission
 * Interface: Returns { isOpen, openForm, closeForm, handleSubmit }
 * 
 * Replaceable: Can change state management approach without affecting consumers
 * Single Responsibility: Only manages contact form UI state
 * 
 * Black Box Principles:
 * - Clean interface: Simple state and actions
 * - Implementation agnostic: Could use different state management
 * - Composable: Can be used in any component that needs contact form
 */

export function useContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  // Handle form submission - placeholder for future database integration
  const handleSubmit = async (message: ContactMessage) => {
    console.log('Contact form submitted:', message);
    
    // TODO: Replace with actual submission logic when Cloudflare D1 is ready
    // This is where you'll integrate with your database
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For now, just log the message
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return {
    isOpen,
    openForm,
    closeForm,
    handleSubmit
  };
}