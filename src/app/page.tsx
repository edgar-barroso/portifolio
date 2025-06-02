import { HeroSection } from "./components/HeroSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { ResumeSection } from "./components/ResumeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ParticlesComponent } from "./components/ParticlesComponent";
export default function Home() {
  

  return (
    <main>
      <div className="relative">
        <HeroSection/>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm z-0" />
        <ParticlesComponent />
      </div>
      <ExpertiseSection/>
      <ResumeSection/>
      <ProjectsSection/>
    </main>
  );
}
