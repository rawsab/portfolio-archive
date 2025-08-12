import { useEffect, useState } from 'react';

const FloatingBottomGradient = () => {
  const [opacity, setOpacity] = useState(1);
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
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate opacity based on footer visibility
      // Full opacity (1) when footer is not visible
      // Fade to 0 when footer becomes visible
      if (footerRect.top > windowHeight) {
        setOpacity(1);
      } else {
        const fadeStart = windowHeight;
        const fadeEnd = windowHeight - footerRect.height;
        const fadeProgress = Math.max(0, Math.min(1, (fadeStart - footerRect.top) / (fadeStart - fadeEnd)));
        setOpacity(1 - fadeProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 w-full h-[150px] pointer-events-none z-50"
      style={{
        background: isDarkMode 
          ? 'linear-gradient(to bottom, rgba(7, 7, 7, 0) 0%, rgba(7, 7, 7, 1) 100%)'
          : 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 100%)',
        opacity: opacity,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
};

export default FloatingBottomGradient;
