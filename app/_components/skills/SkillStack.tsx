import { anton } from "@/components/font";
import { cn } from "@/lib/utils";
import React from "react";
import SkillMarquee from "./SkillMarquee";
import Game from "../Game/Game";
import RetroGrid from "@/components/magicui/retro-grid";

type Props = {};

export default function SkillStack({}: Props) {
  return (
    <div id="skills" className="relative snap-start w-full h-screen">
      <RetroGrid />
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
