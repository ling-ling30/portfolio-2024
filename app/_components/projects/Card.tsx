"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { anton } from "@/components/font";

type Props = {
  title: string;
  description: string;
  photo: string;
  url: string;
  repository: string;
  techStack: string[];
};
export function ProjectCard({
  title,
  description,
  photo,
  url,
  techStack,
}: Props) {
  const tilt = {
    initial: {},
    hover: { y: 20, rotate: [] },
  };
  return (
    <>
      <Card className="w-full max-w-[1500px]">
        <CardContent className="flex justify-between w-full p-4 md:p-8 lg:px-20 lg:py-10 max-lg:flex-wrap-reverse gap-2 ">
          <CardHeader className="p-2 space-y-4">
            <CardTitle className="text-[18px] sm:text-xl md:text-3xl">
              {title}
            </CardTitle>
            <CardDescription className="h-full lg:w-[600px] lg:pt-8 text-[12px] sm:text-sm md:text-md">
              {description}
            </CardDescription>
            <div className="flex gap-2 flex-wrap">
              {techStack.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-xs dark:bg-gray-600 dark:text-slate-100 bg-gray-100 rounded-sm py-1 px-2 text-center"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </CardHeader>
          <motion.div
            whileHover={{
              scale: 1.2,
              rotateY: 0,
              transition: {
                duration: 0.3,
              },
            }} // Scale and straighten on hover
            transition={{ type: "spring", stiffness: 300 }}
            className="z-10"
          >
            <div className="h-full lg:max-w-[600px] flex items-center justify-center">
              <Link href={url} target="_blank">
                <Image
                  src={photo}
                  alt={title}
                  width={1000}
                  height={700}
                  className="w-full h-full"
                />
              </Link>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </>
  );
}
