import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "recall",
    title: "Recall",
    category: "Web App",
    shortDescription: "A second brain for your digital life.",
    fullDescription: "Recall is a powerful knowledge management tool that acts as your second brain. It helps you capture, organize, and retrieve information instantly using vector search and AI summarization.",
    techStack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    imageUrl: "/images/recall-mockup.png", // Placeholder
    liveLink: "https://recall.ai",
    featured: true,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "swng",
    title: "Swng",
    category: "Mobile App",
    shortDescription: "Swing analysis for tennis players.",
    fullDescription: "Swng uses computer vision to analyze tennis swings in real-time, providing feedback on form, speed, and trajectory to help players improve their game.",
    techStack: ["React Native", "Python", "TensorFlow", "FastAPI"],
    imageUrl: "/images/swng-mockup.png", // Placeholder
    featured: true,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "clearly",
    title: "Clearly",
    category: "Extension",
    shortDescription: "Distraction-free reading mode.",
    fullDescription: "A Chrome extension that declutters web pages for a focused reading experience. It removes ads, sidebars, and popups, leaving only the content that matters.",
    techStack: ["Javascript", "Chrome API", "HTML/CSS"],
    imageUrl: "/images/clearly-mockup.png", // Placeholder
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "portfolio",
    title: "Portfolio v1",
    category: "Web",
    shortDescription: "My previous portfolio site.",
    fullDescription: "The first iteration of my personal portfolio, built with simple HTML/SCSS before migrating to the modern Next.js stack.",
    techStack: ["HTML", "SCSS", "Gulp"],
    imageUrl: "/images/portfolio-v1.png", // Placeholder
    span: "md:col-span-1 md:row-span-1",
  },
   {
    id: "shop-online",
    title: "Shop Online",
    category: "E-commerce",
    shortDescription: "Full-stack e-commerce platform.",
    fullDescription: "A feature-rich e-commerce platform with real-time inventory management, secure payments, and an admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/images/shop-online.png", // Placeholder
    span: "md:col-span-2 md:row-span-1",
  },
];
