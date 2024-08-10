import { anton, spaceMono } from "@/components/font";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import LetterPullup from "@/components/magicui/letter-pullup";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GradualSpacingCSS } from "@/components/ui/GradualSpacing";
import LetterUpCSS from "@/components/ui/LetterUpCSS";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

export default function Welcome({}: Props) {
  return (
    <section
      id="home"
      className="relative flex snap-start justify-center items-center min-h-screen bg-gradient-to-b from-slate-100 from-0% via-gray-100 to-stone-100 dark:bg-gradient-to-t dark:from-stone-900 dark:to-gray-900 "
    >
      <div className="">
        <GradualSpacingCSS className="" delay={150} text="Hi, I'm Ricky" />

        <LetterUpCSS
          className="bg-gradient-to-t from-blue-900 to bg-red-900 bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-blue-200 dark:to-red-200 dark:bg-clip-text dark:text-transparent pt-10"
          delay={100}
          text="Full Stack Developer"
        />
      </div>
      {/* <BackgroundBeams /> */}
    </section>
  );
}
