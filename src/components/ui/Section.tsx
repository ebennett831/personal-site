import { SectionProps } from '@/types';

/**
 * Section Component - Black Box for Content Sections
 * 
 * Purpose: Provides consistent spacing, styling, and structure for page sections
 * Interface: Takes id, className, and children - nothing else
 * Replaceable: Can be completely rewritten without affecting any parent/child components
 */
export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
}
