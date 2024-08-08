"use client";

import ShineBorder from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "./gamepad";
import { ResetIcon } from "@radix-ui/react-icons";
import { LeaderboardSheet } from "./Leaderboard/Sheet";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
type Props = {};

type Sequence = ("ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight")[];

type Difficulty = "easy" | "medium" | "hard";

const difficulties = {
  easy: { characters: 5 },
  medium: { characters: 8 },
  hard: { characters: 12 },
};

export default function ArrowGame({}: Props) {
  const [name, setName] = useState<string | undefined>(undefined);
  const [sequence, setSequence] = useState<Sequence>([]);
  const [isDone, setIsDone] = useState(false);
  const [needGamepad, setNeedGamepad] = useState(false);
  const [correctInput, setCorrectInput] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [openLeaderboard, setOpenLeaderboard] = useState<boolean>(false);

  const leaderboard = useQuery(api.leaderboard.getLeaderboard);
  const createLeaderboardEntry = useMutation(api.leaderboard.create);

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

  const submitScore = useCallback(() => {
    if (!name) {
      toast.error("Please enter your name before submitting your score!");
      return;
    }
    if (startTime && endTime) {
      const time = formatTime(endTime - startTime);
      createLeaderboardEntry({
        name: name,
        time: time,
        difficulty: difficulty,
      });
      toast.success("Score submitted successfully!");
    } else {
      toast.error("Unable to submit score. Please try again.");
    }
  }, [startTime, endTime, difficulty, createLeaderboardEntry, name]);
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
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Delete"].includes(
          input
        )
      ) {
        if (!isDone && input === "Delete") {
          return;
        }
        if (isDone) {
          if (input === "Delete") {
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
        }
      }
    },
    [correctInput, sequence, isDone, startTime, difficulty]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Delete"].includes(
          event.key
        )
      ) {
        event.preventDefault();
        handleInput(event.key);
      }
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
    <section className="relative w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1000px] dark:text-white">
      <Input
        placeholder="Enter your name"
        value={name}
        maxLength={10}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
      />
      {needGamepad && <Gamepad onButtonPress={handleInput} />}
      <div className="flex gap-2 py-2">
        <Button
          className="h-6 sm:h-8 md:h-10"
          size={"sm"}
          onClick={() => setNeedGamepad((prev) => !prev)}
        >
          Gamepad
        </Button>
        <LeaderboardSheet data={leaderboard} />
      </div>
      <ShineBorder
        className="relative flex h-[250px] sm:h-[300px] md:h-[450px] lg:h-[400px] w-full flex-col items-center space-y-4 overflow-hidden rounded-lg border bg-background md:shadow-xl z-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        {/* Instruction */}
        <section className="tracking-wide text-center z-50">
          <h1 className="text-xs sm:text-lg md:text-xl lg:text-3xl ">
            Press down the keys as fast as you can!
          </h1>
          <p className="text-xs">
            Timer will start when you press the first key
          </p>
          <div className="mt-2 tracking-wider">
            <Button
              size={"sm"}
              onClick={() => setDifficulty("easy")}
              variant={difficulty === "easy" ? "default" : "outline"}
              className="mr-2 h-6 sm:h-8 md:h-10"
            >
              <p className="text-[10px] sm:text-sm md:text-md rounded-sm">
                Easy
              </p>
            </Button>
            <Button
              size={"sm"}
              onClick={() => setDifficulty("medium")}
              variant={difficulty === "medium" ? "default" : "outline"}
              className="mr-2 h-6 sm:h-8 md:h-10"
            >
              <p className="text-[10px] sm:text-sm md:text-med rounded-sm">
                Medium
              </p>
            </Button>
            <Button
              asChild
              size={"sm"}
              onClick={() => setDifficulty("hard")}
              variant={difficulty === "hard" ? "default" : "outline"}
              className="h-6 sm:h-8 md:h-10"
            >
              <p className="text-[10px] sm:text-sm md:text-md rounded-sm">
                Hard
              </p>
            </Button>
          </div>
        </section>
        {/* Arrow */}
        <section className="flex flex-wrap justify-center items-center w-full h-[50%] px-4 z-10">
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
        {/* END */}
        {isDone && (
          <section className="tracking-wide text-center z-50">
            <p className="text-xs sm:text-md">
              Your time:
              <span className="mx-2">
                {startTime && endTime && formatTime(endTime - startTime)}
              </span>
            </p>
            <div className="flex flex-col justify-center items-center gap-2">
              <Button
                onClick={submitScore}
                className="px-2 py-0 text-xs h-6 sm:h-8 md:h-10 rounded-sm"
              >
                Add to leaderboard
              </Button>
              <div className="flex items-center">
                <Button
                  onClick={() => handleInput("Delete")}
                  variant="outline"
                  size="sm"
                  className="px-2 py-1 mr-2 "
                >
                  <ResetIcon />
                </Button>
                <p className="text-xs">
                  Press{" "}
                  <kbd className="px-1 py-0.5 text-xs font-mono font-medium text-muted-foreground bg-muted rounded">
                    Delete
                  </kbd>{" "}
                  to reset
                </p>
              </div>
            </div>
          </section>
        )}
      </ShineBorder>
    </section>
  );
}
