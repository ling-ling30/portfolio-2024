"use client";

import ShineBorder from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "./gamepad";

type Props = {};

type Sequence = ("ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight")[];

type Difficulty = "easy" | "medium" | "hard";

const difficulties = {
  easy: { characters: 5 },
  medium: { characters: 8 },
  hard: { characters: 12 },
};

export default function ArrowGame({}: Props) {
  const [sequence, setSequence] = useState<Sequence>([]);
  const [isDone, setIsDone] = useState(false);
  const [needGamepad, setNeedGamepad] = useState(false);
  const [correctInput, setCorrectInput] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  const generateSequence = (difficulty: Difficulty) => {
    const { characters } = difficulties[difficulty];
    const length = characters;
    const arrows: Sequence = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];
    return Array.from(
      { length },
      () => arrows[Math.floor(Math.random() * arrows.length)]
    );
  };

  useEffect(() => {
    setSequence(generateSequence(difficulty));
    setIsDone(false);
    setCorrectInput(0);
    setStartTime(null);
    setEndTime(null);
  }, [difficulty]);

  const handleInput = useCallback(
    (input: string) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(input)
      ) {
        if (isDone) {
          if (input === " ") {
            setIsDone(false);
            setCorrectInput(0);
            setStartTime(null);
            setEndTime(null);
            setSequence(generateSequence(difficulty));
          }
          return;
        }

        if (startTime === null) {
          setStartTime(Date.now());
        }

        const keyToStroke = sequence[correctInput];
        const keyStroked = input;

        if (keyToStroke === keyStroked) {
          setCorrectInput((prev) => prev + 1);
          if (correctInput + 1 === sequence.length) {
            setIsDone(true);
            setEndTime(Date.now());
          }
        } else {
          setCorrectInput(0);
          setStartTime(null);
        }
      }
    },
    [correctInput, sequence, isDone, startTime, difficulty]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      handleInput(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInput]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = ms % 1000;
    return `${seconds}.${milliseconds.toString().padStart(3, "0")}s`;
  };

  return (
    <section className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] xl:w-[1000px] h-full">
      {needGamepad && <Gamepad onButtonPress={handleInput} />}
      <div>
        <Button size={"sm"} onClick={() => setNeedGamepad((prev) => !prev)}>
          Gamepad
        </Button>
        <p className="font-sans text-xs">Gamepad just work on touchscreen.</p>
      </div>
      <ShineBorder
        className="relative flex h-[400px] w-full flex-col items-center space-y-4 overflow-hidden rounded-lg border bg-background md:shadow-xl z-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <section className="tracking-wide text-center z-50">
          <h1 className="text-xs sm:text-lg md:text-xl lg:text-3xl ">
            Press down the keys as fast as you can!
          </h1>
          <p className="text-xs">
            Timer will start when you press the first key
          </p>
          <div className="mt-2">
            <Button
              size={"sm"}
              onClick={() => setDifficulty("easy")}
              variant={difficulty === "easy" ? "default" : "outline"}
              className="mr-2 text-xs"
            >
              Easy
            </Button>
            <Button
              size={"sm"}
              onClick={() => setDifficulty("medium")}
              variant={difficulty === "medium" ? "default" : "outline"}
              className="mr-2 text-xs"
            >
              Medium
            </Button>
            <Button
              size={"sm"}
              onClick={() => setDifficulty("hard")}
              variant={difficulty === "hard" ? "default" : "outline"}
              className="text-xs"
            >
              Hard
            </Button>
          </div>
        </section>
        <section className="flex flex-wrap justify-center items-center w-full h-[60%] px-4">
          <div className="flex px-2">
            {sequence.map((key, index) => {
              return (
                <div key={index} className="m-1">
                  {(() => {
                    switch (key) {
                      case "ArrowDown":
                        return (
                          <ArrowDown
                            className={cn(
                              "size-4 sm:size-6 md:size-9",
                              index < correctInput && "text-red-600"
                            )}
                          />
                        );
                      case "ArrowUp":
                        return (
                          <ArrowUp
                            className={cn(
                              "size-4 sm:size-6 md:size-9",
                              index < correctInput && "text-red-600"
                            )}
                          />
                        );
                      case "ArrowLeft":
                        return (
                          <ArrowLeft
                            className={cn(
                              "size-4 sm:size-6 md:size-9",
                              index < correctInput && "text-red-600"
                            )}
                          />
                        );
                      case "ArrowRight":
                        return (
                          <ArrowRight
                            className={cn(
                              "size-4 sm:size-6 md:size-9",
                              index < correctInput && "text-red-600"
                            )}
                          />
                        );
                    }
                  })()}
                </div>
              );
            })}
          </div>
        </section>

        {isDone && (
          <>
            <p>
              Your time:{" "}
              {startTime && endTime && formatTime(endTime - startTime)}
            </p>
            <p>
              Press
              <kbd className="text-xs font-mono font-medium text-muted-foreground opacity-100 mx-1">
                SPACE
              </kbd>
              to reset
            </p>
          </>
        )}
      </ShineBorder>
    </section>
  );
}
