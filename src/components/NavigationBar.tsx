'use client';

import { useState, useEffect } from 'react';
import ArrowUpRight from '../../public/icons/ArrowUpRight';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Set dark mode by default
  useEffect(() => {
    setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.18,
        when: 'beforeChildren',
        staggerChildren: 0.07,
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.13 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-[4px] pt-2 transition-colors duration-300">
      <div className="font-acuminpro tracking-[-0.025em] w-full px-4 md:px-8 mx-auto pb-2 pt-2 flex justify-between items-center border-b border-[var(--foreground)]/20 lg:max-w-full lg:px-8">
        <a
          href="#"
          className="text-lg font-bold text-[var(--foreground)] cursor-pointer hover:text-[#7B7B7B] outline-none"
          aria-label="Scroll to top of page"
        >
          Rawsab Said
        </a>

        {/* Mobile/tablet right controls */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
            className="p-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors mr-1"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-[#f4d35e]" />
            ) : (
              <Moon className="w-5 h-5 text-[var(--foreground)]" />
            )}
          </button>
          <button
            className="text-[var(--foreground)] p-2 relative w-9 h-9 flex flex-col justify-center items-center focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block absolute h-0.5 w-6 bg-[var(--foreground)] rounded transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'rotate-45 top-4' : 'top-2'}
              `}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-[var(--foreground)] rounded transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-0 left-2' : 'top-4'}
              `}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-[var(--foreground)] rounded transition-all duration-300 ease-in-out
                ${isMenuOpen ? '-rotate-45 top-4' : 'top-6'}
              `}
            ></span>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-6 text-sm text-[var(--foreground)]">
          <a
            href="#experience"
            className="hover:underline inline-flex items-center gap-1 group"
          >
            Resume
            <ArrowUpRight className="w-3 h-3 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="#projects"
            className="hover:underline inline-flex items-center gap-1 group"
          >
            Projects
            <ArrowUpRight className="w-3 h-3 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="mailto:rsaid@uwaterloo.ca"
            className="hover:underline inline-flex items-center gap-1 group"
          >
            Contact
            <ArrowUpRight className="w-3 h-3 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="https://github.com/rawsab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/github-icon.svg"
              alt="GitHub"
              className="w-5 h-5 opacity-90 hover:opacity-100"
            />
          </a>
          <a
            href="https://linkedin.com/in/rawsabsaid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/linkedin-icon.svg"
              alt="LinkedIn"
              className="w-6 h-6 opacity-90 hover:opacity-100"
            />
          </a>
          <a
            href="https://instagram.com/rrawsab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 opacity-90 hover:opacity-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://dribbble.com/rawsab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/dribbble-icon.svg"
              alt="Dribbble"
              className="w-5 h-5 opacity-90 hover:opacity-100 transition-colors"
            />
          </a>
          <div
            className="h-6 w-px bg-[var(--foreground)]/20 -ml-2 mr-4"
            aria-hidden="true"
          ></div>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
            className="p-2 -ml-[10px] rounded-full hover:bg-[var(--foreground)]/10 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-[#f4d35e]" />
            ) : (
              <Moon className="w-5 h-5 text-[var(--foreground)]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="dropdown"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--foreground)]/20 backdrop-blur-[4px] lg:hidden"
            >
              <div className="flex flex-col space-y-4 p-4 w-full">
                <motion.a
                  variants={itemVariants}
                  href="#experience"
                  className="hover:underline inline-flex items-center gap-1 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                  <ArrowUpRight className="w-3 h-3 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="#projects"
                  className="hover:underline inline-flex items-center gap-1 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                  <ArrowUpRight className="w-3 h-3 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="mailto:rsaid@uwaterloo.ca"
                  className="hover:underline inline-flex items-center gap-1 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                  <ArrowUpRight className="w-3 h-3 text-[var(--foreground)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
                <motion.div className="flex space-x-4" variants={itemVariants}>
                  <a
                    href="https://github.com/rawsab"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src="/icons/github-icon.svg"
                      alt="GitHub"
                      className="w-5 h-5 opacity-90 hover:opacity-100"
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/rawsabsaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src="/icons/linkedin-icon.svg"
                      alt="LinkedIn"
                      className="w-6 h-6 opacity-90 hover:opacity-100 -translate-y-[1.5px]"
                    />
                  </a>
                  <a
                    href="https://instagram.com/rrawsab"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      className="w-5 h-5 opacity-90 hover:opacity-100"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://dribbble.com/rawsab"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src="/icons/dribbble-icon.svg"
                      alt="Dribbble"
                      className="w-5 h-5 opacity-90 hover:opacity-100 transition-colors"
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
