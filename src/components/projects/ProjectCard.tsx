"use client";

import { motion } from "framer-motion";
import { Project } from "./types";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all cursor-pointer",
        project.span || "md:col-span-1 md:row-span-1"
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
        {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="relative z-20 h-full p-6 flex flex-col justify-end">
        <motion.p 
            layoutId={`category-${project.id}`}
            className="text-xs font-medium text-blue-400 mb-2 uppercase tracking-wider"
        >
            {project.category}
        </motion.p>
        <motion.h3 
            layoutId={`title-${project.id}`}
            className="text-2xl font-bold text-white mb-2"
        >
          {project.title}
        </motion.h3>
        <motion.p 
            layoutId={`desc-${project.id}`}
            className="text-gray-300 text-sm line-clamp-2"
        >
          {project.shortDescription}
        </motion.p>
      </div>
    </motion.div>
  );
};
