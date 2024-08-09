import dynamic from "next/dynamic";

import ThemeToggler from "@/components/ui/theme-toggler";
import { NavigatioDock } from "./_components/NavigatioDock";
import Welcome from "./_components/Welcome";
import Experience from "./_components/experience/Experience";
import SkillStack from "./_components/skills/SkillStack";
import Projects from "./_components/projects/Projects";

export default function Home() {
  return (
    <main className="transition-colors duration-500 snap-y snap-mandatory h-screen overflow-hidden overflow-y-auto no-scrollbar">
      {/* theme toggler */}
      <div className="absolute right-0 bg-transparent z-10">
        <ThemeToggler />
      </div>

      {/* navigation */}
      <div className="fixed z-10">
        <NavigatioDock />
      </div>

      {/* Welcome Section */}
      <Welcome />

      {/* Introduction & experience */}
      <Experience />

      <SkillStack />

      <Projects />
    </main>
  );
}
