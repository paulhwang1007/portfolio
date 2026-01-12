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
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedId(project.id)}
          />
        ))}
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
