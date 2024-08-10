"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type Props = {
  text: string;
  delay?: number;
  className?: string;
};

export default function LetterUpCSS({ text, delay = 100, className }: Props) {
  const [animatedLetters, setAnimatedLetters] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const letters = text.split("");
    const animatedLettersArray = letters.map((letter, index) => {
      const isSpace = letter === " ";
      return (
        <span
          key={index}
          className={cn(
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl inline-block animate-move-up scroll-m-20  font-bold tracking-tight bg-gradient-to-t from-blue-900 to bg-red-900 bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-blue-200 dark:to-red-200 dark:bg-clip-text dark:text-transparent",
            className,
            isSpace ? "w-2" : ""
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

  return <div className="flex justify-center">{animatedLetters}</div>;
}
