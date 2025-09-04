/**
 * Footer Component - Black Box for Site Footer
 * 
 * Purpose: Provides site footer with copyright and additional links
 * Interface: No props needed - self-contained
 * Replaceable: Footer content and styling can be completely changed
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ethan Bennett. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed for clarity, performance, and maintainability.
          </p>
        </div>
      </div>
    </footer>
  );
}
