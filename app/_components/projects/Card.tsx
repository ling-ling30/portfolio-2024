"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { anton, poppins, spaceMono } from "@/components/font";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  projects: {
    title: string;
    content: () => React.JSX.Element;
    ctaText: string;
    photo: string;
    url: string;
    repository: string;
    techStack: string[];
  }[];
};
export function ProjectCard({ projects }: Props) {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] p-2 h-max-[90%] md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={800}
                  height={800}
                  src={active.photo}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  loading="lazy"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className={cn(
                        "font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center md:text-left ",
                        `${poppins.className}`
                      )}
                    >
                      {active.title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-2 pt-5">
                      {active.techStack.map((stack) => (
                        <motion.p
                          layoutId={`description-${active.title}-${stack}-${id}`}
                          key={`description-${active.title}-${stack}-${id}`}
                          className={cn(
                            "px-2 py-1 bg-neutral-100 rounded-md dark:text-neutral-50 text-neutral-600 dark:bg-slate-700 text-xs",
                            `${spaceMono.className}`
                          )}
                        >
                          {stack}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                  <Button size={"sm"} className="h-8" asChild>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.url}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold text-white dark:bg-slate-800"
                    >
                      {active.ctaText}
                    </motion.a>
                  </Button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-2 text-neutral-600 text-xs md:text-sm  h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
        {projects.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col h-full bg-neutral-200 dark:bg-black/20 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={800}
                  height={800}
                  src={card.photo}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                  loading="lazy"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className={cn(
                    "font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center md:text-left ",
                    `${poppins.className}`
                  )}
                >
                  {card.title}
                </motion.h3>
                <div className="flex flex-wrap gap-2 pt-5">
                  {card.techStack.map((stack) => (
                    <motion.p
                      layoutId={`description-${card.title}-${stack}-${id}`}
                      key={`description-${card.title}-${stack}-${id}`}
                      className={cn(
                        "px-2 py-1 bg-neutral-100 rounded-md dark:text-neutral-50 text-neutral-600 dark:bg-slate-700 text-xs",
                        `${spaceMono.className}`
                      )}
                    >
                      {stack}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
