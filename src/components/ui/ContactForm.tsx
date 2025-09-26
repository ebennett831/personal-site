'use client';

import { useState } from 'react';
// Declare window.turnstile type for TypeScript
declare global {
  interface Turnstile {
    render: (el: HTMLElement, options: TurnstileOptions) => void;
    reset: (el: HTMLElement) => void;
  }
  interface Window {
    turnstile?: Turnstile;
  }
  interface TurnstileOptions {
    sitekey: string;
    callback: (token: string) => void;
    'error-callback'?: () => void;
    theme?: 'light' | 'dark';
  }
}
import { useEffect, useRef } from 'react';
import { ContactMessage } from '@/types';

/**
 * ContactForm Component - Black Box for Contact Form Logic
 * 
 * Purpose: Handles contact form state, validation, and submission
 * Interface: 
 *   - onSubmit: (message: ContactMessage) => void (callback for form submission)
 *   - onCancel?: () => void (optional callback for cancellation)
 *   - className?: string (styling customization)
 * 
 * Replaceable: Form logic and validation can be completely rewritten
 * Single Responsibility: Only manages form state and validation
 * 
 * Black Box Principles:
 * - Clean interface: Simple callbacks for actions
 * - Implementation agnostic: Can change validation/submission logic
 * - Composable: Can be used in modals, pages, or anywhere
 */

interface ContactFormProps {
  onSubmit: (message: ContactMessage, token: string) => void;
  onCancel?: () => void;
  className?: string;
}

export function ContactForm({ onSubmit, onCancel, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactMessage>>({});
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // Load Turnstile script
  useEffect(() => {
    if (window.turnstile) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Render Turnstile widget
  useEffect(() => {
    if (!scriptLoaded || !turnstileRef.current || !window.turnstile) return;
    turnstileRef.current.innerHTML = '';
    window.turnstile.render(turnstileRef.current, {
      sitekey: '0x4AAAAAAB3SSXBg0n9RGYzR',
      callback: (token: string) => {
        setToken(token);
        setTokenError(null);
      },
      'error-callback': () => {
        setToken(null);
        setTokenError('Please complete the CAPTCHA');
      },
      theme: 'dark',
    });
    // Only run once after script loads
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded]);

  // Validation logic - encapsulated within this black box
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactMessage> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactMessage, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (!token) {
      setTokenError('Please complete the CAPTCHA');
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(formData, token);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setToken(null);
      if (turnstileRef.current && window.turnstile) {
        window.turnstile.reset(turnstileRef.current);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your full name"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="(555) 123-4567"
          disabled={isSubmitting}
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          placeholder="Tell me about your project, question, or how I can help..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Turnstile CAPTCHA - always visible, placed after questions, before submit */}
      <div className="pt-2 flex flex-col items-center min-h-[80px]">
        <div ref={turnstileRef} className="w-full flex justify-center" />
        {tokenError && (
          <p className="mt-1 text-sm text-red-400 text-center">{tokenError}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}