"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center py-4"
    >
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-md shadow-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
