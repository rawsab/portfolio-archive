type ExperienceItemProps = {
  company: string;
  position: string;
  location: string;
  date: string;
  logo: string;
  focus: string;
  tools: string;
  link: string;
};

export default function EducationItem({
  company,
  position,
  location,
  date,
  logo,
  focus,
  tools,
  link,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 md:gap-x-2 mb-5">
      <div className="flex items-center gap-x-2 w-full md:w-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-12 h-12 rounded-[12px] overflow-hidden mr-[5px] transition-transform duration-320 ease-in-out hover:scale-110"
          >
            <img
              src={logo}
              alt={`${company} Logo`}
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Company / Position */}
        <div className="flex flex-col justify-center flex-shrink-0 mr-[10px]">
          <span className="text-[#2D2D2D] font-bold">{company}</span>
          <span className="text-sm text-[#7B7B7B] mt-[0px]">{position}</span>
        </div>

        {/* Location / Date - Moved up on mobile */}
        <div className="flex flex-col justify-center flex-shrink-0 text-right ml-auto md:hidden">
          <span className="text-[#2D2D2D] font-regular">{location}</span>
          <span className="text-sm text-[#7B7B7B] mt-[0px]">{date}</span>
        </div>
      </div>

      {/* Highlight */}
      <div className="flex-1 w-full md:w-auto">
        <div className="min-h-[60px] px-4 py-2 flex items-center rounded-[12px] border border-[#d5d5d5] text-sm text-[#2D2D2D] max-w-[480px]">
          <div>
            <p className="text-[#7B7B7B] whitespace-pre-wrap">{focus}</p>
          </div>
        </div>
      </div>

      {/* Location / Date - Desktop */}
      <div className="hidden md:flex flex-col justify-center flex-shrink-0 text-right ml-[10px] min-w-[100px]">
        <span className="text-[#2D2D2D] font-regular">{location}</span>
        <span className="text-sm text-[#7B7B7B] mt-[0px]">{date}</span>
      </div>
    </div>
  );
}
