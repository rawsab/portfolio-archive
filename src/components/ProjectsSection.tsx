import ProjectCard from './ProjectCard';
import { projects } from '@/data/projectData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-16 w-full tracking-[-0.020em]">
      <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-2">Projects</h2>
      <div className="h-[1px] bg-[#e0e0e0] mb-5" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
