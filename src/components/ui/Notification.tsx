import React from 'react';

/**
 * Notification Component - Black Box for temporary messages
 * Purpose: Displays a message for a short time
 * Interface: { message: string, onClose: () => void }
 * Replaceable: Can swap out for any notification system
 */
export function Notification({ message, onClose }: { message: string; onClose: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
      {message}
    </div>
  );
}
