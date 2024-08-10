"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { spaceMono } from "../font";

type Props = { text: string; delay?: number; className?: string };

export const GradualSpacingCSS = ({ text, delay = 100, className }: Props) => {
  const [animatedLetters, setAnimatedLetters] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const letters = text.split("");
    const animatedLettersArray = letters.map((letter, index) => {
      const isSpace = letter === " ";
      return (
        <span
          key={index}
          className={cn(
            `${spaceMono.className}`,
            "text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl inline-block animate-move-right scroll-m-20  font-extrabold tracking-tight bg-gradient-to-t from-blue-900 to bg-red-900 bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-blue-200 dark:to-red-200 dark:bg-clip-text dark:text-transparent",
            className,
            isSpace ? "w-4 lg:w-10 xl:w-14" : "mr-1"
          )}
          style={{
            animationDelay: `${index * delay}ms`,
            opacity: 0,
            ...(isSpace && { fontSize: "1rem" }), // Adjust font size for space to control width
          }}
        >
          {isSpace ? <span>&nbsp;</span> : letter}
        </span>
      );
    });
    setAnimatedLetters(animatedLettersArray);
  }, [text, delay, className]);

  return (
    <div className="overflow-hidden whitespace-nowrap">{animatedLetters}</div>
  );
};
