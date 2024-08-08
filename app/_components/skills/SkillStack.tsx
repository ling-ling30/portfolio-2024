import { anton } from "@/components/font";
import Marquee from "@/components/magicui/marquee";
import ShinyButton from "@/components/magicui/shiny-button";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import React from "react";
import SkillMarquee from "./SkillMarquee";
import Game from "../Game/Game";

type Props = {};

export default function SkillStack({}: Props) {
  return (
    <div className="snap-start w-full h-screen bg-gradient-to-tr from-red-100 from-0% via-orange-100 to-yellow-100 dark:from-[#FD6F3B] dark:from-0% dark:via-[#b44e29] dark:to-yellow-800">
      <div
        className={cn(
          "w-full h-full flex flex-col items-center space-y-5",
          `${anton.className}`
        )}
      >
        <h1 className="text-4xl lg:text-6xl pt-5">Technical Skills.</h1>
        <SkillMarquee />
        <Game />
      </div>
    </div>
  );
}
