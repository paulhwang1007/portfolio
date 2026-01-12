"use client";

import { motion } from "framer-motion";
import { SocialIcons } from "@/components/ui/social-icons";


export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Paul Hwang
        </h1>
        <h2 className="mb-8 text-2xl font-light text-gray-400 md:text-3xl">
          Full Stack Developer
        </h2>

        <div className="flex justify-center mb-10">
          <SocialIcons />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-sm text-gray-400 font-light tracking-widest uppercase">Scroll to learn more</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer text-gray-500 hover:text-white transition-colors"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth'})}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
