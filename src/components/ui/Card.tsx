"use client";

import { HTMLMotionProps, motion } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <motion.div
      className={`relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
