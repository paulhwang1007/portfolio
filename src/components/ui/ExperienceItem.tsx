"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  logo: string;
  logoAlt: string;
  title: string;
  company: string;
  startPeriod: string;
  endPeriod?: string; // Optional if "present" is part of start or merged
  location: string;
  children: React.ReactNode;
}

export function ExperienceItem({
  logo,
  logoAlt,
  title,
  company,
  startPeriod,
  location,
  children,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.1 }}
      className="mb-12"
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
      </motion.div>
    </motion.div>
  );
}
