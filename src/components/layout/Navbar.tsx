"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsOpen(false);
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      const element = document.querySelector("#hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 py-4"
    >
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md shadow-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="rounded-full px-4 py-2 text-base font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-[#fbd9ae]"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile nav */}
      <div className="w-full max-w-sm md:hidden">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg">
          <span className="pl-2 text-sm font-medium text-gray-300">Paul Hwang</span>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="rounded-full p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-[#fbd9ae]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex w-full flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-lg"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-[#fbd9ae]"
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
