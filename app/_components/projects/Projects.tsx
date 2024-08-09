"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectCard } from "./Card";
import { cn } from "@/lib/utils";
import { anton } from "@/components/font";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      title: "Juzzy",
      content: () => {
        return (
          <p>
            In this project, I am building a Notion clone. Authentication is
            handled with Clerk, the backend with Convex, file storage with
            EdgeStore, and the UI with Tailwind CSS. I am undertaking this
            project as a learning opportunity with CodewithAntonio.
          </p>
        );
      },
      photo: "/projects/Juzzy.png",
      url: "https://juzzy.ric-portfolio.web.id/",
      repository: "https://github.com/ling-ling30/Notion-Clone",
      ctaText: "Visit",
      techStack: ["Convex", "Edgestore", "Tailwind", "NextJS"],
    },
    {
      title: "NextAuth",
      content: () => {
        return (
          <p>
            In this project, I delved into the authentication system using
            NextAuth/authjs. After previous attempts to create my authentication
            system from scratch, I decided to learn NextAuth/authjs, which
            builds upon best practices in the authentication domain. Thanks to
            CodeWithAntonio for providing the materials and guidance. I
            documented my thought proccess, development and improvements made in
            this project in my GitHub repository.
          </p>
        );
      },
      photo: "/projects/NextAuth.png",
      ctaText: "Visit",
      url: "https://authentication.ric-portfolio.web.id/",
      repository: "https://github.com/ling-ling30/next-auth",
      techStack: ["NextJS", "AuthJS", "OAuth"],
    },
    {
      title: "WhatToEat",
      content: () => {
        return (
          <p>
            This was a fun project that stemmed from a common argument about
            where to eat. The application allows users to input restaurant
            details such as name, city, price range, and photo, and saves the
            information. The data is then displayed in a gallery, and the app
            can randomly select a restaurant for you. It also has the capability
            to filter and choose restaurants based on the city.
          </p>
        );
      },
      photo: "/projects/WhatToEat.png",
      ctaText: "Visit",
      url: "https://eatery.ric-portfolio.web.id/",
      repository: "https://github.com/ling-ling30/Gacha-Resto",
      techStack: ["NextJS", "Convex", "Edgestore"],
    },
  ];
  return (
    <div
      id="projects"
      className="snap-start min-h-screen p-4 w-full scroll-smooth bg-gradient-to-r dark:from-slate-900 dark:to-slate-800  from-neutral-300 to-stone-400 relative flex flex-col items-center antialiased space-y-2 md:space-y-4"
    >
      <h1
        className={cn(
          `${anton.className}`,
          "relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600 from-neutral-500 to-neutral-900  text-center font-sans font-bold"
        )}
      >
        Projects
      </h1>
      <ProjectCard projects={projects} />
    </div>
  );
}
