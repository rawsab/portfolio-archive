'use client';

import { useState } from 'react';
import ArrowUpRight from '../../public/icons/ArrowUpRight';
import { AnimatePresence, motion } from 'framer-motion';

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 bg-[#EFF1F7]/90 backdrop-blur-[4px] pt-2">
      <div className="font-acuminpro tracking-[-0.025em] w-full px-4 md:px-8 mx-auto pb-2 pt-2 flex justify-between items-center border-b border-[#e0e0e0] lg:w-[60vw] lg:max-w-[947px] lg:min-w-[852px] lg:px-0">
        <div className="text-lg font-bold text-[#2D2D2D]">Rawsab Said</div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#2D2D2D] p-2 relative w-9 h-9 flex flex-col justify-center items-center focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-0.5 w-6 bg-[#2D2D2D] rounded transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'rotate-45 top-4' : 'top-2'}
            `}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-[#2D2D2D] rounded transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-0 left-2' : 'top-4'}
            `}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-[#2D2D2D] rounded transition-all duration-300 ease-in-out
              ${isMenuOpen ? '-rotate-45 top-4' : 'top-6'}
            `}
          ></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm text-[#2D2D2D]">
          <a
            href="#experience"
            className="hover:underline inline-flex items-center gap-1 group"
          >
            Resume
            <ArrowUpRight className="w-3 h-3 text-[#2D2D2D] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="#projects"
            className="hover:underline inline-flex items-center gap-1 group"
          >
            Projects
            <ArrowUpRight className="w-3 h-3 text-[#2D2D2D] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a
            href="mailto:rsaid@uwaterloo.ca"
            className="hover:underline inline-flex items-center gap-1 group"
          >
            Contact
            <ArrowUpRight className="w-3 h-3 text-[#2D2D2D] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
              className="absolute top-full left-0 right-0 bg-[#EFF1F7] border-b border-[#e0e0e0] backdrop-blur-[4px] lg:hidden"
            >
              <div className="flex flex-col space-y-4 p-4 w-full">
                <motion.a
                  variants={itemVariants}
                  href="#experience"
                  className="hover:underline inline-flex items-center gap-1 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                  <ArrowUpRight className="w-3 h-3 text-[#2D2D2D] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="#projects"
                  className="hover:underline inline-flex items-center gap-1 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                  <ArrowUpRight className="w-3 h-3 text-[#2D2D2D] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="mailto:rsaid@uwaterloo.ca"
                  className="hover:underline inline-flex items-center gap-1 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                  <ArrowUpRight className="w-3 h-3 text-[#2D2D2D] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                      className="w-6 h-6 opacity-90 hover:opacity-100"
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
