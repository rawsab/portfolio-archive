export default function Footer() {
  return (
    <footer className="mt-4 py-6 text-sm text-[var(--foreground)]/70 border-t border-[var(--foreground)]/10">
      <div className="font-acuminpro tracking-[-0.025em] w-full px-4 md:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 lg:w-[60vw] lg:max-w-[947px] lg:min-w-[852px] lg:px-0">
        <p>
          &copy; {new Date().getFullYear()} Rawsab Said. All rights reserved.
        </p>
        <div className="flex space-x-4 gap-4">
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
        </div>
      </div>
    </footer>
  );
}
