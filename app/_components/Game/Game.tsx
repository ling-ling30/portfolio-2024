"use client";
import ShinyButton from "@/components/magicui/shiny-button";
import React, { useEffect, useState } from "react";
import ArrowGame from "./ArrowGame";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Game({}: Props) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <>
      <div className="flex gap-2">
        <div
          onClick={() => {
            setIsPlaying(true);
          }}
        >
          <ShinyButton text="Play a game ?" className="cursor-pointer" />
        </div>
        {isPlaying && (
          <Button
            size={"sm"}
            onClick={() => {
              setIsPlaying(false);
            }}
            className="h-9 tracking-wider"
          >
            Done
          </Button>
        )}
      </div>

      {isPlaying && <ArrowGame />}
    </>
  );
}
