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
      description:
        "In this project, I am building a Notion clone. Authentication is handled with Clerk, the backend with Convex, file storage with EdgeStore, and the UI with Tailwind CSS. I am undertaking this project as a learning opportunity with CodewithAntonio.",
      photo: "/projects/Juzzy.png",
      url: "https://juzzy.ric-portfolio.web.id/",
      repository: "https://github.com/ling-ling30/Notion-Clone",

      techStack: ["Convex", "Edgestore", "Tailwind", "NextJS"],
    },
    {
      title: "NextAuth",
      description:
        "In this project, I delved into the authentication system using NextAuth/authjs. After previous attempts to create my authentication system from scratch, I decided to learn NextAuth/authjs, which builds upon best practices in the authentication domain. Thanks to CodeWithAntonio for providing the materials and guidance. I documented my thought proccess, development and improvements made in this project in my GitHub repository",
      photo: "/projects/NextAuth.png",
      url: "https://authentication.ric-portfolio.web.id/",
      repository: "https://github.com/ling-ling30/next-auth",
      techStack: ["NextJS", "AuthJS", "OAuth"],
    },
    {
      title: "WhatToEat",
      description:
        "This was a fun project that stemmed from a common argument about where to eat. The application allows users to input restaurant details such as name, city, price range, and photo, and saves the information. The data is then displayed in a gallery, and the app can randomly select a restaurant for you. It also has the capability to filter and choose restaurants based on the city.",
      photo: "/projects/WhatToEat.png",
      url: "https://eatery.ric-portfolio.web.id/",
      repository: "https://github.com/ling-ling30/Gacha-Resto",
      techStack: ["NextJS", "Convex", "Edgestore"],
    },
  ];
  return (
    <div
      id="projects"
      className="snap-start p-4 w-full  scroll-smooth bg-slate-200 dark:bg-neutral-950 relative flex flex-col items-center antialiased space-y-2 md:space-y-4"
    >
      <h1
        className={cn(
          `${anton.className}`,
          "relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600 from-neutral-500 to-neutral-900  text-center font-sans font-bold"
        )}
      >
        Projects
      </h1>
      {/* <div className="p-10 w-full space-y-2 "> */}
      {projects.map((project, index) => (
        <div key={project.title}>
          <ProjectCard {...project} />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}
