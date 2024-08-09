import dynamic from "next/dynamic";
const Experience = dynamic(
  () => import("./_components/experience/Experience"),
  {
    ssr: false,
  }
);
const SkillStack = dynamic(() => import("./_components/skills/SkillStack"), {
  ssr: false,
});
const Projects = dynamic(() => import("./_components/projects/Projects"), {
  ssr: false,
});
import ThemeToggler from "@/components/ui/theme-toggler";
import { NavigatioDock } from "./_components/NavigatioDock";
import Welcome from "./_components/Welcome";

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
      <section id="home" className="snap-start">
        <Welcome />
      </section>

      {/* Introduction & experience */}
      <Experience />

      <SkillStack />

      <Projects />
    </main>
  );
}
