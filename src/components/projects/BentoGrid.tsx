"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS } from "./data";
import { AnimatePresence } from "framer-motion";

export const BentoGrid = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[225px] gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedId(project.id)}
          />
        ))}
        <div className="md:col-span-4 md:row-span-1 rounded-3xl bg-white/5 border border-white/10 border-dashed flex items-center justify-center p-6 text-neutral-500 font-medium tracking-wider uppercase text-sm hover:bg-white/10 transition-colors cursor-default">
          More work in progress...
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
