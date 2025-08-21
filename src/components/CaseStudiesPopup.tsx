'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Toggle this to true for testing (shows popup every time)
  // Toggle this to false for production (shows popup only once)
  const TESTING_MODE = false;
  
  // Toggle this to true to test the video loading state
  // Toggle this to false for normal video loading
  const TEST_VIDEO_LOADING = false;

  useEffect(() => {
    if (TESTING_MODE) {
      // Testing mode: show popup every time
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Production mode: check if user has seen the popup before
      const hasSeenPopup = localStorage.getItem('hasSeenCaseStudiesPopup');
      
      // Only show popup if user hasn't seen it before
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Test video loading state
  useEffect(() => {
    if (TEST_VIDEO_LOADING && isVisible) {
      // Force loading state to be visible for testing
      setVideoLoaded(false);
      
      // Simulate video loading delay for testing
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 5000); // 5 second delay to see the loading state
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (TESTING_MODE) {
      // Testing mode: show popup every time
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Production mode: check if user has seen the popup before
      const hasSeenPopup = localStorage.getItem('hasSeenCaseStudiesPopup');
      
      // Only show popup if user hasn't seen it before
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as seen in localStorage
    localStorage.setItem('hasSeenCaseStudiesPopup', 'true');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the popup content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-[var(--background)]/75 backdrop-blur-lg rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden shadow-gray-500/20 border border-gray-400/20"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[var(--foreground)]/10 hover:cursor-pointer hover:bg-[var(--foreground)]/20 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 text-[var(--foreground)]" />
            </button>

            {/* Content */}
            <div className="sm:p-8 p-4">
              {/* Text content */}
              <div className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl font-menocondensed-important text-[var(--foreground)] mb-2 mt-0">
                  Introducing Case Studies
                </h2>
                <p className="text-md sm:text-lg text-[var(--foreground)]/70 tracking-normal">
                  Take a deeper dive into my projects with the new case studies page.
                </p>
              </div>

              {/* Video */}
              <div className="relative rounded-lg overflow-hidden bg-black" style={{ maxHeight: '400px' }}>
                {/* Placeholder */}
                {!videoLoaded && (
                  <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-t from-black/70 to-black/30">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4 mt-20"></div>
                      <p className="text-white/70 text-sm">Loading video...</p>
                    </div>
                  </div>
                )}
                
                {/* Video */}
                <video
                  autoPlay={!TEST_VIDEO_LOADING}
                  loop
                  muted
                  playsInline
                  className={`w-full h-auto transition-opacity duration-300 ${
                    videoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                  onLoadedData={() => !TEST_VIDEO_LOADING && setVideoLoaded(true)}
                >
                  <source src="/video/CaseFeatureDemo_15FPS.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={handleClose}
                  className="flex-1 px-auto py-2 bg-[var(--foreground)]/10 hover:cursor-pointer hover:bg-[var(--foreground)]/15 text-[var(--foreground)] rounded-lg transition-colors font-medium tracking-tight"
                >
                  Continue to Site
                </button>
                <Link
                  href="/case-studies"
                  onClick={handleClose}
                  className="flex-1 px-auto py-2 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--foreground)]/85 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 tracking-tight"
                >
                  Explore Case Studies
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudiesPopup;
