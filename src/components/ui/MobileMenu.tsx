/**
 * MobileMenu Component - Black Box for Mobile Navigation
 * 
 * Purpose: Handles mobile menu state and rendering
 * Interface: 
 *   - items: Array of navigation items
 *   - isOpen: Boolean state
 *   - onToggle: Function to toggle menu
 *   - onClose: Function to close menu (for navigation)
 * 
 * Replaceable: Implementation can be swapped (slide, fade, etc.) without changing interface
 * Single Responsibility: Only handles mobile menu behavior
 */

'use client';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function MobileMenu({ items, isOpen, onToggle, onClose }: MobileMenuProps) {
  const handleItemClick = () => {
    onClose();
  };

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
        onClick={onToggle}
        aria-label="Toggle mobile menu"
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
      <div className={`
        md:hidden 
        transition-all duration-200 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'}
      `}>
        <div className="flex flex-col space-y-2 pt-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 py-2 px-2 rounded hover:bg-gray-800/50"
              onClick={handleItemClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
