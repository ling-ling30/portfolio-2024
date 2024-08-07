import { anton, spaceMono } from "@/components/font";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import LetterPullup from "@/components/magicui/letter-pullup";
import WordPullUp from "@/components/magicui/word-pull-up";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import React from "react";

type Props = {};

export default function Welcome({}: Props) {
  return (
    <div>
      <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-b from-slate-100 from-0% via-gray-100 to-stone-100 dark:bg-gradient-to-t dark:from-stone-900 dark:to-gray-900 ">
        <div className="absolute w-full h-full z-100 ">
          <Spline scene="https://draft.spline.design/ReOTt7rvc2y-GBZF/scene.splinecode" />
        </div>
        <div className="">
          <GradualSpacing
            className={cn(
              `${spaceMono.className}`,
              "align-middle text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-[0.1em] sm:tracking-[0.2em] flex items-center bg-gradient-to-t from-blue-900 to bg-red-900 bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-blue-200 dark:to-red-200 dark:bg-clip-text dark:text-transparent  md:leading-[5rem]"
            )}
            text=" Hi, I'm Ricky"
            duration={0.5}
            delayMultiple={0.1}
          />
          <LetterPullup
            delay={0.2}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-t from-blue-900 to bg-red-900 bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-blue-200 dark:to-red-200 dark:bg-clip-text dark:text-transparent pt-10"
            words="Full Stack Developer"
          />
          <p className={cn(`${anton.className} text-4xl tracking-[0.3em]`)}></p>
        </div>
      </div>
    </div>
  );
}
