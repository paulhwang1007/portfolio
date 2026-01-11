"use client";

import { Section } from "@/components/home/Section";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "swift",
  "r",
  "spring",
  "jira",
  "amazonaws",
  "flutter",
  "dart",
  "firebase",
  "nginx",
  "cypress",
  "jest",
  "gitlab",
  "android"
];

export function Skills() {
  return (
    <Section id="skills" title="Skills">
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg mx-auto">
            <IconCloud iconSlugs={slugs} />
        </div>
    </Section>
  );
}
