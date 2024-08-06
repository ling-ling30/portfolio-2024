import { BorderBeam } from "@/components/magicui/border-beam";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { Separator } from "@/components/ui/separator";
import ThemeToggler from "@/components/ui/theme-toggler";
import Spline from "@splinetool/react-spline/next";
import { NavigatioDock } from "./_components/NavigatioDock";
import { anton, spaceMono } from "@/components/font";
import { cn } from "@/lib/utils";
import WordPullUp from "@/components/magicui/word-pull-up";
import Welcome from "./_components/Welcome";
import Experience from "./_components/Experience";

export default function Home() {
  return (
    <main className="transition-colors duration-500 snap-y snap-mandatory h-screen overflow-y-auto no-scrollbar ">
      {/* theme toggler */}
      <div className="absolute right-0 bg-transparent z-10">
        <ThemeToggler />
      </div>

      {/* navigation */}
      <div className="fixed z-10">
        <NavigatioDock />
      </div>

      {/* Welcome Section */}
      <section className="snap-start">
        <Welcome />
      </section>

      {/* Introduction & experience */}

      <Experience />
      <div className="snap-start w-full h-screen bg-gradient-to-tr from-red-100 from-0% via-orange-100 to-yellow-100"></div>
      <div className="snap-start w-full h-screen bg-green-500"></div>

      <Separator />
      <div className="relative h-[200px] w-[200px] rounded-xl">
        <BorderBeam />
      </div>
    </main>
  );
}
