export default function Footer() {
  return (
    <footer className="mt-4 py-6 text-sm text-[var(--foreground)]/70 border-t border-[var(--foreground)]/10">
      <div className="font-acuminpro tracking-[-0.025em] w-full px-4 md:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 lg:w-full lg:min-w-[852px] lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} Rawsab Said. All rights reserved.
        </p>
        <div className="flex space-x-4 gap-2 md:gap-4">
          <a
            href="https://github.com/rawsab"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#2D2D2D] dark:hover:text-[#f4f4f5]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rawsabsaid"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#2D2D2D] dark:hover:text-[#f4f4f5]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rsaid@uwaterloo.ca"
            className="transition-colors hover:text-[#2D2D2D] dark:hover:text-[#f4f4f5]"
          >
            Email
          </a>
          <a
            href="https://se-webring.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-colors hover:text-[#2D2D2D] dark:hover:text-[#f4f4f5] ml-1"
            aria-label="Software Engineering Webring"
          >
            <img
              src="/icons/webring_logo.svg"
              alt="SE Webring"
              className="w-5 h-5"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            />
          </a>
          {/* Updated timestamp with green ping */}
          <div className="items-center gap-3 pl-2 hidden min-[790px]:flex">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs text-[var(--foreground)]/60 font-google-sans-code">UPDATED 12/08/2025</span>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
}
