type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
};

export default function ProjectCard({
  name,
  description,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-[var(--foreground)]/20 p-4 transition-transform hover:scale-[1.02] hover:shadow-md/5 duration-300"
    >
      <div className="flex items-center gap-1 mb-2">
        <h3 className="text-lg font-semibold text-[var(--foreground)] tracking-[-0.025em]">
          {name}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-[var(--foreground)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      <p className="text-sm text-[var(--foreground)]/70">{description}</p>
    </a>
  );
}
