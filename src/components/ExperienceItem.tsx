import ArrowUpRight from '../../public/icons/ArrowUpRight';

type ExperienceItemProps = {
  company: string;
  position: string;
  location: string;
  date: string;
  logo: string;
  focus: string;
  tools: string;
};

export default function ExperienceItem({
  company,
  position,
  location,
  date,
  logo,
  focus,
  tools,
}: ExperienceItemProps) {
  return (
    <div className="flex items-center w-full gap-x-4 mb-5">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-[12px] overflow-hidden mr-[5px]">
          <img
            src={logo}
            alt={`${company} Logo`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Company / Position */}
      <div className="flex flex-col justify-center flex-shrink-0 mr-[10px]">
        <span className="text-[#2D2D2D] font-bold">{company}</span>{' '}
        <span className="text-sm text-[#7B7B7B] mt-[0px]">{position}</span>
      </div>

      {/* Highlight */}
      <div className="flex-1">
        <div className="h-15 px-4 flex items-center rounded-[12px] border border-[#d5d5d5] text-sm text-[#2D2D2D] max-w-[460px]">
          <div>
            <p className="font-bold text-[#7B7B7B]">{focus}</p>
            <p className="text-[#7B7B7B]">{tools}</p>
          </div>
        </div>
      </div>

      {/* Location / Date */}
      <div className="flex flex-col justify-center flex-shrink-0 text-right ml-[10px]">
        <span className="text-[#2D2D2D] font-regular">{location}</span>
        <span className="text-sm text-[#7B7B7B] mt-[0px]">{date}</span>
      </div>
    </div>
  );
}
