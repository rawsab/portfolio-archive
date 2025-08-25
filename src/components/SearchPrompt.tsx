'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchPromptProps {
  isHovered: boolean;
}

export default function SearchPrompt({ isHovered }: SearchPromptProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isWindows, setIsWindows] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detect Windows device
    const userAgent = navigator.userAgent.toLowerCase();
    setIsWindows(userAgent.includes('windows'));
  }, []);

  useEffect(() => {
    // Clear any existing timeouts to prevent race conditions
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isHovered) {
      // Show the prompt when hovering
      setIsVisible(true);
      
      if (isInitialLoad) {
        // On initial load with hover state, show immediately without animation
        setTextOpacity(1);
        setIsInitialLoad(false);
      } else {
        // Fade in text while banner is growing (over 500ms)
        timeoutRef.current = setTimeout(() => {
          setTextOpacity(1);
        }, 250); // Halfway through the 500ms banner growth
      }
    } else {
      // Start fading out text while banner is shrinking
      setTextOpacity(0);
      // Hide banner after text fades out
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        // Ensure text opacity is reset when banner closes
        setTextOpacity(0);
      }, 200); // Wait for text fade out
    }

    // Cleanup function to clear timeout if component unmounts or effect re-runs
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isHovered, isInitialLoad]);

  return (
    <div
      className={`hidden lg:block absolute top-full left-0 right-0 z-30 bg-[var(--background)]/95 border-b border-[var(--foreground)]/20 transition-all duration-500 ease-out ${
        isVisible ? 'h-9' : 'h-0'
      }`}
      style={{
        transform: `translateY(${isVisible ? '0' : '-100%'})`,
      }}
    >
      <div className="flex items-center justify-center h-full px-4">
        <div 
          className="flex items-center space-x-2 text-[var(--foreground)]/70 text-xs transition-opacity duration-700 ease-out"
          style={{ opacity: textOpacity }}
        >
          <span>Press</span>
          <kbd className="px-1 py-0.5 text-[10px] font-mono bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 rounded">
            {isWindows ? 'Ctrl + K' : '⌘K'}
          </kbd>
          <span>to search site</span>
        </div>
      </div>
    </div>
  );
}
