import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="w-[60vw] max-w-[947px] mx-auto min-h-screen pb-20 px-4">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ResearchSection />
        <ProjectsSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
