import { BorderBeam } from "@/components/magicui/border-beam";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { Separator } from "@/components/ui/separator";
import ThemeToggler from "@/components/ui/theme-toggler";
import Spline from "@splinetool/react-spline/next";
import { DockDemo } from "./_components/Dock";

export default function Home() {
  return (
    <main>
      <div className="fixed">
        <DockDemo />
      </div>
      {/* Welcoming Viewer */}
      <div className="w-screen flex justify-center items-center min-h-screen">
        <div className="">
          <GradualSpacing
            className="align-middle text-center text-2xl sm:text-4xl font-bold tracking-[0.0em] sm:tracking-[1.1em] flex items-center text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="WELCOME"
            duration={1}
            delayMultiple={0.3}
          />
        </div>
      </div>

      <Separator />
      <ThemeToggler />
      <div className="relative h-[200px] w-[200px] rounded-xl">
        <BorderBeam />
      </div>

      <figure className="size-96 border-1 border bg-red-50">
        <Spline scene="https://prod.spline.design/GO4KM5tjWj6Zi7gX/scene.splinecode" />
      </figure>
    </main>
  );
}
