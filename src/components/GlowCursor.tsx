'use client';

import { useEffect, useState } from 'react';

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add a small delay for smooth trailing effect
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50); // 50ms delay
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      setIsPointer(computedStyle.cursor === 'pointer');
    };

    const handleMouseOut = () => {
      setIsPointer(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[60] transition-transform duration-700 ease-in-out"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate3d(-50%, -50%, 0)',
        willChange: 'transform',
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 ease-in-out ${
          isPointer ? 'w-22 h-22' : 'w-16 h-16'
        }`}
        style={{
          background: isPointer 
            ? isDarkMode 
              ? 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0) 70%)'
              : 'radial-gradient(circle, rgba(11, 11, 233, 0.2) 0%, rgba(11, 11, 233, 0.1) 20%, rgba(11, 11, 233, 0) 70%)'
            : isDarkMode
              ? 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)'
              : 'radial-gradient(circle, rgba(11, 11, 233, 0.1) 0%, rgba(11, 11, 233, 0) 70%)',
        }}
      />
    </div>
  );
}
