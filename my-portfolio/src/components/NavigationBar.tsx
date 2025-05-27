export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#EFF1F7] py-2">
      <div className="font-acuminpro tracking-[-0.025em] w-[60vw] max-w-[947px] mx-auto px-4 py-2 flex justify-between items-center border-b border-[#e0e0e0]">
        <div className="text-lg font-bold text-[#2D2D2D]">
          Rawsab Said
        </div>

        <div className="space-x-6 text-sm text-[#2D2D2D]">
          <a href="#about" className="hover:underline">Resume</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
