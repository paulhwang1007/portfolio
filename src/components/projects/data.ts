import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "domi",
    title: "Domi",
    category: "Extension + Web App",
    shortDescription: "An AI-powered second brain for your digital life.",
    fullDescription: "Effortlessly save, organize, and chat with your digital memories. The smartest way to bookmark the web. Instantly capture any webpage or snippet using the dedicated Chrome Extension, which automatically syncs and stores your content to your personal dashboard. Domi integrates seamlessly into your browsing workflow, allowing you to retrieve information using natural language queries.",
    techStack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Framer Motion"],
    imageUrl: "/images/domi-landing.png",
    liveLink: "https://domi-ai.vercel.app/",
    githubLink: "https://github.com/paulhwang1007/domi",
    featured: true,
    span: "md:col-span-2 md:row-span-2",
    features: [
        "Instant capture via Extension or shortcuts",
        "Smart auto-tagging and organization",
        "Vector search for semantic retrieval",
        "Unified dashboard with smart category grouping"
    ],
    gallery: [
        "/images/domi-dashboard.png",
        "/images/domi-extension.png", 
        "/images/domi-landing.png"
    ]
  },
  {
    id: "swng",
    title: "Swng",
    category: "Mobile App",
    shortDescription: "Swing analysis for tennis players.",
    fullDescription: "Swng uses computer vision to analyze tennis swings in real-time, providing feedback on form, speed, and trajectory to help players improve their game. It runs entirely on-device for maximum privacy and performance.",
    techStack: ["React Native", "Python", "TensorFlow", "FastAPI"],
    imageUrl: "/images/swng-mockup.png", // Placeholder
    featured: true,
    span: "md:col-span-1 md:row-span-2",
    features: [
        "Real-time skeletal tracking at 60fps",
        "Slow-motion replay analysis",
        "Pro-player comparison overlay",
        "Progress tracking over time"
    ],
    gallery: ["/images/swng-1.png", "/images/swng-2.png"]
  },
  {
    id: "clearly",
    title: "Clearly",
    category: "Extension",
    shortDescription: "Distraction-free reading mode.",
    fullDescription: "A Chrome extension that declutters web pages for a focused reading experience. It removes ads, sidebars, and popups, leaving only the content that matters. Customizable themes and fonts make reading accessible for everyone.",
    techStack: ["Javascript", "Chrome API", "HTML/CSS"],
    imageUrl: "/images/clearly-mockup.png", // Placeholder
    span: "md:col-span-1 md:row-span-1",
    features: [
        "One-click distraction removal",
        "Dark mode and sepia themes",
        "Dyslexia-friendly font options",
        "Print-friendly export"
    ]
  },
  {
    id: "portfolio",
    title: "Portfolio v1",
    category: "Web",
    shortDescription: "My previous portfolio site.",
    fullDescription: "The first iteration of my personal portfolio, built with simple HTML/SCSS before migrating to the modern Next.js stack. Focused on brutalist design and fast load times.",
    techStack: ["HTML", "SCSS", "Gulp"],
    imageUrl: "/images/portfolio-v1.png", // Placeholder
    span: "md:col-span-1 md:row-span-1",
    features: [
        "Zero Javascript dependency core",
        "Custom GSAP animations",
        "Scored 100/100 on Lighthouse"
    ]
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
    features: [
        "Stripe payment integration",
        "Real-time inventory via WebSockets",
        "Admin dashboard with analytics charts",
        "JWT-based persistent authentication"
    ]
  },
];
