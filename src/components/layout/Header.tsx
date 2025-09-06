'use client';

import { useState } from 'react';

/**
 * Navigation Item Type - Core primitive for navigation
 */
type NavItem = {
  label: string;
  href: string;
};

/**
 * Mobile Menu Component - Black Box for Mobile Navigation State
 * 
 * Purpose: Manages mobile menu visibility and interaction
 * Interface: 
 *   - navItems: Array of navigation items
 *   - isOpen: Current open state
 *   - onToggle: Function to toggle state
 *   - onItemClick: Function called when nav item is clicked
 * Replaceable: Can be swapped with any mobile menu implementation
 */
interface MobileMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: () => void;
}

function MobileMenu({ navItems, isOpen, onToggle, onItemClick }: MobileMenuProps) {
  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
        onClick={onToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onItemClick}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Desktop Navigation Component - Black Box for Desktop Navigation
 * 
 * Purpose: Displays navigation items for desktop screens
 * Interface: navItems array
 * Replaceable: Can be swapped with any desktop nav implementation
 */
interface DesktopNavProps {
  navItems: NavItem[];
}

function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <div className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

/**
 * Header Component - Black Box for Site Navigation
 * 
 * Purpose: Provides site navigation and branding
 * Interface: No props needed - self-contained
 * Replaceable: Navigation logic and styling can be completely changed
 * 
 * Architecture: Composed of replaceable sub-components:
 *   - DesktopNav: Handles desktop navigation display
 *   - MobileMenu: Handles mobile navigation state and display
 */
export function Header() {
  // Navigation data - core primitive
  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  // Mobile menu state - encapsulated within this black box
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#" 
            className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Ethan Bennett
          </a>
          
          <DesktopNav navItems={navItems} />
          
          <MobileMenu 
            navItems={navItems}
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
            onItemClick={closeMobileMenu}
          />
        </div>
      </nav>
    </header>
  );
}
