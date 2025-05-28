export default function Footer() {
  return (
    <footer className="mt-4 py-6 text-sm text-[#7B7B7B] border-t border-[#e0e0e0]">
      <div className="font-acuminpro tracking-[-0.025em] max-w-[947px] w-[60vw] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>
          &copy; {new Date().getFullYear()} Rawsab Said. All rights reserved.
        </p>
        <div className="flex space-x-4 gap-4">
          <a
            href="https://github.com/rawsab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2D2D2D] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rawsabsaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2D2D2D] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rsaid@uwaterloo.ca"
            className="hover:text-[#2D2D2D] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
