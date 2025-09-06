/**
 * Smooth Scroll Utility - Black Box for Navigation Behavior
 * 
 * Purpose: Handles smooth scrolling to page sections
 * Interface: Simple function that takes a target ID
 * Replaceable: Can swap scroll behavior (instant, smooth, animated) without changing callers
 * 
 * Black Box Principles:
 * - Single responsibility: Only handles scroll navigation
 * - Clean interface: Simple target parameter
 * - Implementation agnostic: Can change scroll method without breaking consumers
 */

export function scrollToSection(targetId: string): void {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/**
 * Enhanced Scroll Hook - Black Box for Scroll State Management
 * 
 * Purpose: Provides scroll functionality with state management
 * Interface: Returns scroll function
 * Replaceable: Can add features like scroll tracking, analytics, etc.
 */
export function useScrollToSection() {
  const scrollTo = (targetId: string) => {
    // Remove the # if present
    const cleanId = targetId.replace('#', '');
    scrollToSection(cleanId);
  };

  return { scrollTo };
}
