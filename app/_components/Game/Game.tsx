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
      <div
        onClick={() => {
          setIsPlaying(true);
        }}
      >
        <ShinyButton text="Play a game ?" className=" cursor-pointer" />
      </div>
      {isPlaying && <ArrowGame />}
      {isPlaying && (
        <Button
          size={"sm"}
          onClick={() => {
            setIsPlaying(false);
          }}
        >
          Done
        </Button>
      )}
    </>
  );
}
