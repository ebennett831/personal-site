/**
 * ContactButton Component - Black Box for Contact Navigation
 * 
 * Purpose: Provides a consistent contact call-to-action across the site
 * Interface: 
 *   - variant: 'navigate' | 'email' | 'form' (behavior type)
 *   - email?: string (for email variant)
 *   - className?: string (for styling customization)
 * 
 * Replaceable: Can swap entire contact behavior without changing consumers
 * Single Responsibility: Only handles contact action
 * 
 * Black Box Principles:
 * - Clean interface: Simple props define behavior
 * - Implementation agnostic: Can change contact method easily
 * - Composable: Can be used in different contexts
 */

interface ContactButtonProps {
  variant?: 'navigate' | 'email' | 'form';
  email?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ContactButton({ 
  variant = 'navigate', 
  email = '',
  className = '',
  children = 'Get In Touch'
}: ContactButtonProps) {
  // Determine href based on variant - this is where behavior is encapsulated
  const getHref = () => {
    switch (variant) {
      case 'email':
        return `mailto:${email}?subject=Let's Connect&body=Hi Ethan, I'd like to discuss...`;
      case 'navigate':
        return '#contact';
      case 'form':
        return '#contact-form'; // Future enhancement
      default:
        return '#contact';
    }
  };

  const baseClasses = "inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium";

  return (
    <a
      href={getHref()}
      className={`${baseClasses} ${className}`}
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      {children}
    </a>
  );
}
