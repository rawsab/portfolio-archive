import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="scroll-smooth w-full px-4 md:px-8 mx-auto min-h-screen pb-20 lg:w-[60vw] lg:max-w-[947px] lg:min-w-[852px] lg:px-0">
        <section id="hero" className="scroll-mt-20">
          <HeroSection />
        </section>
        <section id="experience" className="scroll-mt-20">
          <ExperienceSection />
        </section>
        <section id="education" className="scroll-mt-20">
          <EducationSection />
        </section>
        <section id="research" className="scroll-mt-20">
          <ResearchSection />
        </section>
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
