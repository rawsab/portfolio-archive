import { researchData } from '../data/researchData';
import ExperienceItem from './ExperienceItem';

export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-10 w-full tracking-[-0.020em]">
      <h2 className="text-[1.6rem] font-regular text-[#2D2D2D] mb-2">
        Research
      </h2>
      <div className="h-[1px] bg-[#e0e0e0] mb-5" />

      {researchData.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
}
