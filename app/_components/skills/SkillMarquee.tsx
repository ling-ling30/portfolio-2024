import Marquee from "@/components/magicui/marquee";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  label: string;
};

const data = [
  {
    image: "/authJS.png",
    label: "AuthJS / NextAuth",
  },
  {
    image: "/aws.svg",
    label: "AWS",
  },
  {
    image: "/css.svg",
    label: "CSS",
  },
  {
    image: "/docker.svg",
    label: "Docker",
  },
  {
    image: "/express.svg",
    label: "Express",
  },
  {
    image: "/js.svg",
    label: "Javascript",
  },
  {
    image: "/mongo.svg",
    label: "MongoDB",
  },
  {
    image: "/next-js.svg",
    label: "NextJS",
  },
  {
    image: "/prisma.svg",
    label: "Prisma",
  },
  {
    image: "/py.svg",
    label: "Python",
  },
  {
    image: "/nodejs.svg",
    label: "NodeJS",
  },
  {
    image: "/react.svg",
    label: "React",
  },
  {
    image: "/redis.svg",
    label: "Redis",
  },
  {
    image: "/sql.svg",
    label: "Postgresql",
  },
  {
    image: "/tailwind.svg",
    label: "Tailwind",
  },
  {
    image: "/typescript.svg",
    label: "Typescript",
  },
  {
    image: "/vercel.svg",
    label: "Vercel",
  },
];

const SkillCard = ({ image, label }: Props) => {
  return (
    <Card className="w-20 sm:w-24 md:w-36 lg:w-40  bg-gradient-to-r from-violet-200 to-pink-200  dark:from-[#213a41] dark:to-[#182c31]">
      <CardHeader className="w-full flex items-center justify-center">
        <div className="size-7 sm:size-10 md:size-14 lg:size-18 flex items-center justify-center">
          <Image
            className=""
            src={image}
            alt=""
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-center pb-2">
        <p className="text-sm lg:text-lg font-sans text-center font-bold">
          {label}
        </p>
      </CardContent>
    </Card>
  );
};

export default function SkillMarquee() {
  return (
    <Marquee pauseOnHover className="[--duration:20s] overflow-hidden">
      {data.map((data) => {
        return (
          <SkillCard key={data.label} image={data.image} label={data.label} />
        );
      })}
    </Marquee>
  );
}
