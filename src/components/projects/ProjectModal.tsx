"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./types";
import { X, ExternalLink, Github } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { TechBadge } from "@/components/ui/TechBadge";
import Image from "next/image";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const [mounted, setMounted] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
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
                 <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10" />
                 
                 <div className="absolute bottom-0 left-0 p-8 z-20">
                     <motion.p 
                        layoutId={`category-${project.id}`}
                        className="text-sm font-medium text-blue-400 mb-2 uppercase tracking-wider"
                    >
                        {project.category}
                    </motion.p>
                    <div className="flex items-center gap-4 mb-4">
                        {project.logoUrl && (
                             <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-black/20 backdrop-blur-md p-2">
                                 <Image 
                                    src={project.logoUrl}
                                    alt={`${project.title} logo`}
                                    fill
                                    className="object-contain p-1"
                                 />
                             </div>
                        )}
                        <motion.h3 
                            layoutId={`title-${project.id}`}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                        {project.title}
                        </motion.h3>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-3"
                    >
                        {project.liveLink && (
                            <a 
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors text-sm"
                            >
                                <ExternalLink size={16} />
                                Visit Site
                            </a>
                        )}
                        {project.githubLink && (
                            <a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-md text-white rounded-xl font-medium transition-colors text-sm"
                            >
                                <Github size={16} />
                                View Code
                            </a>
                        )}
                        {project.repoLinks?.map((link, i) => (
                             <a 
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-md text-white rounded-xl font-medium transition-colors text-sm"
                            >
                                <Github size={16} />
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                 </div>
            </div>

            {/* Content Body */}
            <motion.div 
                className="p-8 pt-4 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                <motion.p 
                    layoutId={`desc-${project.id}`}
                    className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                    {project.fullDescription}
                </motion.p>
                
                {project.features && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                    >
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                    <span className="text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {project.gallery && (
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-8"
                     >
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Images</h4>
                         {/* Simple horizontal scroll for now */}
                        <div className="flex gap-4 overflow-x-auto pb-4 snap-x pl-1">
                            {project.gallery.map((img, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setSelectedImage(img)}
                                    className="shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden bg-neutral-800 border border-white/10 snap-center relative group shadow-lg cursor-zoom-in"
                                >
                                     <Image
                                         src={img}
                                         alt={`Gallery image ${i+1}`}
                                         fill
                                         className="object-cover transition-transform duration-500 group-hover:scale-110"
                                     />
                                </div>
                            ))}
                        </div>
                     </motion.div>
                )}
            
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                 >
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <TechBadge key={tech} name={tech} />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            >
                <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                     <Image
                        src={selectedImage}
                        alt="Project screenshot"
                        fill
                        className="object-contain"
                        quality={100}
                     />
                </div>
                 <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-[120]"
                >
                    <X size={24} />
                </button>
            </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
};
