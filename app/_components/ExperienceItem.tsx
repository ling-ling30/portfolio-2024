import { spaceMono } from "@/components/font";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  company: string;
  date: string;
  role: string;
  children: React.ReactNode;
};

export const ExperienceItem = ({ company, date, children, role }: Props) => {
  return (
    <section className="space-y-2">
      <div>
        <h1 className="text-xl font-bold">{company}</h1>
        <h3 className="text-sm">{role}</h3>
        <h3 className="text-sm">{date}</h3>
      </div>

      <div className="text-sm">{children}</div>
    </section>
  );
};
