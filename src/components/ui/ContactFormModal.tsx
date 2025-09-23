'use client';

import { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactMessage } from '@/types';

/**
 * ContactFormModal Component - Black Box for Modal UI
 * 
 * Purpose: Provides modal container for contact form with backdrop and animations
 * Interface:
 *   - isOpen: boolean (controls modal visibility)
 *   - onClose: () => void (callback when modal should close)
 *   - onSubmit: (message: ContactMessage) => void (callback for form submission)
 * 
 * Replaceable: Modal implementation can be completely changed (could use different animation library, etc.)
 * Single Responsibility: Only handles modal display and user interactions
 * 
 * Black Box Principles:
 * - Clean interface: Simple boolean and callbacks
 * - Implementation agnostic: Could be replaced with any modal library
 * - Composable: Can contain any content, not just ContactForm
 */

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: ContactMessage) => void;
}

export function ContactFormModal({ isOpen, onClose, onSubmit }: ContactFormModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle form submission and close modal
  const handleFormSubmit = async (message: ContactMessage) => {
    await onSubmit(message);
    onClose();
  };

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleBackdropClick}
      />
      
      {/* Modal Content */}
      <div className="relative bg-gray-800 rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <p className="text-gray-400 mb-6">
            I&apos;d love to hear from you! Whether it&apos;s about a project, opportunity, or just to say hello.
          </p>
          
          <ContactForm 
            onSubmit={handleFormSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}