"use client";

import { motion } from "framer-motion";
import { Project } from "./types";
import { cn } from "@/lib/utils";

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
        "group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors cursor-pointer",
        project.span || "md:col-span-1 md:row-span-1"
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
        {/* Background Image / Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      
      {/* Placeholder for Image - in real app would use project.imageUrl */}
      <div className="absolute inset-0 bg-neutral-900 z-0">
         {/* Use a colored gradient placeholder based on ID hash or something simple */}
         <div className={`w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
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
