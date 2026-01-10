"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
          Available for hire
        </span>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Paul Hwang
        </h1>
        <h2 className="mb-8 text-2xl font-light text-gray-400 md:text-3xl">
          Full Stack Developer
        </h2>
        <p className="mb-10 text-lg text-gray-400 leading-relaxed">
          I build digital experiences that blend minimal aesthetics with powerful functionality. 
          Focused on creating intuitive, user-centric web applications.
        </p>
        
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
            View Work
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Contact Me
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
