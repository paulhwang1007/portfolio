"use client";

import { Section } from "@/components/home/Section";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const slugs = [
  "java",
  "javascript",
  "python",
  "r",
  "mysql", // Represents SQL
  "swift",
  "html5",
  "css3",
  "react",
  "nextdotjs",
  "tailwindcss",
  "spring",
  "nodedotjs",
  "express",
  "postgresql",
  "mongodb",
  "docker",
  "git",
  "github",
  "figma",
  "vercel",
  "typescript",
  "jira",
  "supabase",
  "adobe"
];

export function Skills() {
  return (
    <Section id="skills" title="Skills">
        <div className="relative flex size-full max-w-lg items-center justify-center rounded-lg mx-auto">
            <IconCloud iconSlugs={slugs} />
        </div>
    </Section>
  );
}
