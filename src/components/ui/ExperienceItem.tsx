"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TechBadge } from "@/components/ui/TechBadge";

interface ExperienceItemProps {
  logo: string;
  logoAlt: string;
  title: string;
  company: string;
  startPeriod: string;
  endPeriod?: string; // Optional if "present" is part of start or merged
  location: string;
  skills?: string[];
  children: React.ReactNode;
}

export function ExperienceItem({
  logo,
  logoAlt,
  title,
  company,
  startPeriod,
  location,
  skills,
  children,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-[background-color,border-color,box-shadow] duration-300"
    >
      <motion.div 
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        className="flex items-start gap-4 mb-6"
      >
        <div className="relative h-12 w-12 md:h-16 md:w-16 flex-shrink-0 bg-white rounded-lg p-1 overflow-hidden">
          <Image
            src={logo}
            alt={logoAlt}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold text-white">
            {title}
          </h4>
          <p className="text-lg md:text-xl text-white">
            {company}
          </p>
          <p className="text-lg md:text-xl text-neutral-400">
            {startPeriod}
          </p>
          <p className="text-lg md:text-xl text-neutral-400">
            {location}
          </p>
        </div>
      </motion.div>
      
      <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
      >
        {children}
        
        {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
                {skills.map((skill, index) => (
                    <TechBadge key={index} name={skill} />
                ))}
            </div>
        )}
      </motion.div>
    </motion.div>
  );
}
