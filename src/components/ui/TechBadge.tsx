"use client";

import { createElement } from "react";
import { 
  FaReact, 
  FaHtml5, 
  FaJs, 
  FaJava, 
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFigma, // Design
  SiNodedotjs,
  SiVercel,
  SiSpringboot,
  SiJira,
  SiSwift,
  SiR,
  SiSupabase,
  SiFramer,
  SiPostgresql,
  SiDocker,
  SiShadcnui
} from "react-icons/si";
import { TbComponents, TbSeo } from "react-icons/tb"; // Generic
import { LuFileCode } from "react-icons/lu";

interface TechConfig {
  icon: React.ElementType;
  color: string; // Tailwind border/text color class
}

const techMap: Record<string, TechConfig> = {
  "React": { icon: FaReact, color: "text-blue-400" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  "Next.js 14": { icon: SiNextdotjs, color: "text-white" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-400" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-500" },
  "JavaScript": { icon: FaJs, color: "text-yellow-400" },
  "Javascript": { icon: FaJs, color: "text-yellow-400" }, // Handle case variant
  "HTML/CSS": { icon: FaHtml5, color: "text-orange-500" },
  "Java": { icon: FaJava, color: "text-red-500" },
  "Python": { icon: FaPython, color: "text-blue-300" },
  "Vercel": { icon: SiVercel, color: "text-white" },
  "Figma": { icon: SiFigma, color: "text-pink-500" },
  "Git": { icon: FaGitAlt, color: "text-orange-600" },
  "Github": { icon: FaGithub, color: "text-white" },
  "Jira": { icon: SiJira, color: "text-blue-500" },
  "Swift": { icon: SiSwift, color: "text-orange-500" },
  "R": { icon: SiR, color: "text-blue-600" },
  "Supabase": { icon: SiSupabase, color: "text-emerald-400" },
  "PostgreSQL": { icon: SiPostgresql, color: "text-blue-400" },
  "Framer Motion": { icon: SiFramer, color: "text-purple-500" },
  "Spring Boot": { icon: SiSpringboot, color: "text-green-500" },
  "Springboot": { icon: SiSpringboot, color: "text-green-500" },
  "Docker": { icon: SiDocker, color: "text-blue-500" },
  "shadcn": { icon: SiShadcnui, color: "text-white" },
  "shadcn/ui": { icon: SiShadcnui, color: "text-white" },
  // Generic fallbacks or specific other tools
  "SEO": { icon: TbSeo, color: "text-green-400" },
  "CI/CD": { icon: SiVercel, color: "text-white" }, // Using Vercel icon for CI/CD context here or generic
  "Component Library": { icon: TbComponents, color: "text-purple-400" },
  "Responsive Design": { icon: LuFileCode, color: "text-indigo-400" },
  "Web Dev": { icon: FaHtml5, color: "text-orange-400" },
  "Data Structures": { icon: LuFileCode, color: "text-gray-400" },
  "OOP": { icon: LuFileCode, color: "text-gray-400" },
};

export function TechBadge({ name }: { name: string }) {
  const config = techMap[name] || { icon: LuFileCode, color: "text-gray-400" };
  const Icon = config.icon;

  return (
    <span 
      className={`
        flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium 
        bg-white/5 border border-white/10 text-neutral-300 
        hover:bg-white/10 hover:border-white/20 hover:text-white 
        hover:shadow-[0_0_10px_-2px_rgba(255,255,255,0.1)] 
        transition-all cursor-default group
      `}
    >
      <Icon className={`text-base ${config.color} group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all`} />
      <span className="opacity-90">{name}</span>
    </span>
  );
}
