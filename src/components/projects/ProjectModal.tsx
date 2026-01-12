"use client";

import { motion } from "framer-motion";
import { Project } from "./types";
import { X, ExternalLink, Github } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
      />
      <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 md:p-10">
        <motion.div
          layoutId={`card-${project.id}`}
          className="w-full max-w-3xl bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col max-h-[90vh]"
        >
             {/* Close Button */}
             <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors z-30"
            >
                <X size={20} />
            </button>

            {/* Header / Image Area */}
            <div className="relative h-64 md:h-80 w-full shrink-0">
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />
                 <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                 
                 <div className="absolute bottom-0 left-0 p-8 z-20">
                     <motion.p 
                        layoutId={`category-${project.id}`}
                        className="text-sm font-medium text-blue-400 mb-2 uppercase tracking-wider"
                    >
                        {project.category}
                    </motion.p>
                    <motion.h3 
                        layoutId={`title-${project.id}`}
                        className="text-4xl md:text-5xl font-bold text-white mb-2"
                    >
                    {project.title}
                    </motion.h3>
                 </div>
            </div>

            {/* Content Body */}
            <div className="p-8 pt-4 overflow-y-auto">
                <motion.p 
                    layoutId={`desc-${project.id}`}
                    className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                    {project.fullDescription}
                </motion.p>
            
                 <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                    {project.liveLink && (
                        <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors"
                        >
                            <ExternalLink size={18} />
                            Visit Site
                        </a>
                    )}
                    {project.githubLink && (
                        <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-colors"
                        >
                            <Github size={18} />
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
      </div>
    </>,
    document.body
  );
};
