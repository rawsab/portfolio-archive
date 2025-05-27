export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#EFF1F7]/90 backdrop-blur-sm pt-2">
      <div className="font-acuminpro tracking-[-0.025em] w-[60vw] max-w-[947px] mx-auto px-2 pb-2 pt-2 flex justify-between items-center border-b border-[#e0e0e0]">
        <div className="text-lg font-bold text-[#2D2D2D]">Rawsab Said</div>

        <div className="flex items-center space-x-8 text-sm text-[#2D2D2D]">
          <a
            href="#resume"
            className="hover:underline inline-flex items-center gap-1"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
            href="#projects"
            className="hover:underline inline-flex items-center gap-1"
          >
            Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="hover:underline inline-flex items-center gap-1"
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
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
      </div>
    </nav>
  );
}
