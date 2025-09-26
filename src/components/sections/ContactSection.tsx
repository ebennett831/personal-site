'use client';

import { PersonalInfo } from '@/types';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/ui/ContactForm';
import { Notification } from '@/components/ui/Notification';
import React from 'react';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

/**
 * ContactSection Component - Black Box for Contact Information
 * 
 * Purpose: Displays contact information and call-to-action
 * Interface: Takes PersonalInfo object for contact details
 * Replaceable: Design and layout can change without affecting contact data
 */
export function ContactSection({ personalInfo }: ContactSectionProps) {
  const [notification, setNotification] = React.useState<string | null>(null);

  return (
    <>
      <Section id="contact" className="bg-gray-800">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          I&apos;m always interested in new opportunities, collaborations, and conversations about technology
        </p>

        <div className="max-w-md mx-auto space-y-6">
          {/* Email */}
          <div className="flex items-center justify-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center space-x-4 p-4 bg-gray-700/50 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Contact Form Section - Black Box */}
        <div className="mt-12 max-w-lg mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Me</h3>
          <ContactForm
            onSubmit={async (formData, token) => {
              // Black box API call
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  Name: formData.name,
                  Email: formData.email,
                  Phone: formData.phone,
                  Description: formData.message,
                  token,
                }),
              });
              if (res.ok) setNotification("Thank you for your message! I'll get back to you soon.");
              else setNotification("There was an error sending your message. Please try again.");
            }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </Section>
    
  {/* Removed Contact Form Modal - replaced by inline form */}
  {notification && (
    <Notification message={notification} onClose={() => setNotification(null)} />
  )}
  </>
  );
}
