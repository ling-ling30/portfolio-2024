import { anton, spaceMono } from "@/components/font";
import { cn } from "@/lib/utils";
import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import Spline from "@splinetool/react-spline";

type Props = {};

function Experience({}: Props) {
  return (
    <div
      id="about"
      className="relative snap-start w-full h-screen bg-gradient-to-bl from-cyan-100 from-0% via-sky-200 to-sky-300 dark:bg-gradient-to-b dark:from-cyan-900 dark:from-0% dark:via-sky-800 dark:to-sky-900"
    >
      <div
        className={cn(
          "w-full h-full flex flex-col items-center space-y-5",
          `${anton.className}`
        )}
      >
        <h1 className="text-6xl pt-5">ABOUT.</h1>
        {/* introduction */}
        <section
          className={cn(
            `${spaceMono.className}`,
            "mx-2 text-xs sm:text-md lg:text-lg p-4 max-w-[400px] sm:max-w-[600px] md:max-w-[800px] border border-white"
          )}
        >
          <p>
            Hello! Since the beginning of 2023, I&apos;ve been deeply immersed
            in coding, focusing on mastering the NEXT.js framework for frontend
            development and Express.js for the backend. I constantly seek out
            best practices to improve my code daily, primarily working with
            TypeScript.
          </p>
        </section>
        {/* Experience */}
        <h1 className="text-2xl">Experience</h1>
        <section>
          <section
            className={cn(
              `${spaceMono.className}`,
              "mx-2 text-sm sm:text-md lg:text-lg p-4 min-w-[300px] sm:min-w-[500px] md:min-w-[600px] max-w-[400px] sm:max-w-[600px] md:max-w-[800px] border border-white"
            )}
          >
            <ExperienceItem
              company="Anugerah Lestari"
              date="November 2023 - now"
              role="Full Stack Developer"
            >
              I worked in a team of two on building an ERP application that
              covers inventory management, production, product management,
              orders, purchasing, and accounting . The application utilizes a
              microservice architecture. We used PostgreSQL as the database,
              NEXT.js for the frontend, and Express.js for the backend. It is
              deployed on AWS EC2 wrapped in Docker with S3 for file storage.
            </ExperienceItem>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Experience;
