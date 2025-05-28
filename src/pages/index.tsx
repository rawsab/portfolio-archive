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
      <main className="w-full px-4 md:px-8 mx-auto min-h-screen pb-20 lg:w-[60vw] lg:max-w-[947px] lg:min-w-[852px] lg:px-0">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ResearchSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
