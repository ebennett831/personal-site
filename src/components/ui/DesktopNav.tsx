/**
 * DesktopNav Component - Black Box for Desktop Navigation
 * 
 * Purpose: Renders desktop navigation links
 * Interface: items - Array of navigation items
 * Replaceable: Styling and behavior can be completely changed
 * Single Responsibility: Only handles desktop navigation rendering
 */

interface NavItem {
  label: string;
  href: string;
}

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <div className="hidden md:flex space-x-8">
      {items.map((item) => (
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
