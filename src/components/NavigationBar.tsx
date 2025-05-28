'use client';

import { useState } from 'react';
import ArrowUpRight from '../../public/icons/ArrowUpRight';

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#EFF1F7]/90 backdrop-blur-[4px] pt-2">
      <div className="font-acuminpro tracking-[-0.025em] w-full px-4 md:px-8 mx-auto pb-2 pt-2 flex justify-between items-center border-b border-[#e0e0e0] lg:w-[60vw] lg:max-w-[947px] lg:min-w-[852px] lg:px-0">
        <div className="text-lg font-bold text-[#2D2D2D]">Rawsab Said</div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#2D2D2D] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'
              }
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm text-[#2D2D2D]">
          <a
            href="#experience"
            className="hover:underline inline-flex items-center gap-1"
          >
            Resume
            <ArrowUpRight className="w-3 h-3 text-[#2D2D2D]" />
          </a>
          <a
            href="#projects"
            className="hover:underline inline-flex items-center gap-1"
          >
            Projects
            <ArrowUpRight className="w-3 h-3 text-[#2D2D2D]" />
          </a>
          <a
            href="mailto:rsaid@uwaterloo.ca"
            className="hover:underline inline-flex items-center gap-1"
          >
            Contact
            <ArrowUpRight className="w-3 h-3 text-[#2D2D2D]" />
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
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#EFF1F7] border-b border-[#e0e0e0] lg:hidden">
            <div className="flex flex-col space-y-4 p-4 w-full">
              <a
                href="#experience"
                className="hover:underline inline-flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
                <ArrowUpRight className="w-3 h-3 text-[#2D2D2D]" />
              </a>
              <a
                href="#projects"
                className="hover:underline inline-flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
                <ArrowUpRight className="w-3 h-3 text-[#2D2D2D]" />
              </a>
              <a
                href="mailto:rsaid@uwaterloo.ca"
                className="hover:underline inline-flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                <ArrowUpRight className="w-3 h-3 text-[#2D2D2D]" />
              </a>
              <div className="flex space-x-4">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
