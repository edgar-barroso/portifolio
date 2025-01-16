import { HeroSection } from "./components/HeroSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { ResumeSection } from "./components/ResumeSection";
import { ProjectsSection } from "./components/ProjectsSection";
export default function Home() {
  

  return (
    <main className="text-gray-600">
      <HeroSection/>
      <ExpertiseSection/>
      <ResumeSection/>
      <ProjectsSection/>
    </main>
  );
}
