
import React, { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem('bizforher-notification-seen');

    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as seen in localStorage so it doesn't show again
    localStorage.setItem('bizforher-notification-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl shadow-2xl max-w-lg mx-4 p-8 border border-primary/20 animate-scale-in">
        {/* Celebration icon in corner */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-2xl">🎉</span>
        </div>

        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 w-8 h-8 text-gray-400 hover:text-gray-600"
          onClick={handleClose}
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Content */}
        <div className="pt-4 text-center">
          <div className="mb-6">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text animate-fade-in mb-2">
              FINALISTS ANNOUNCED!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-fade-in"></div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in font-medium">
            🎉 The finalists have been announced! Check out the top 10 teams below.
          </p>

          <div className="flex justify-center">
            <Button
              onClick={handleClose}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Let's Go! 🎯
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
