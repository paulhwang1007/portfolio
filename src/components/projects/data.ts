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
    logoUrl: "/images/domi-logo.png",
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
    id: "perk",
    title: "Perk",
    category: "Full-Stack CRUD App",
    shortDescription: "Optimize your credit card setup.",
    fullDescription: "A robust credit card management application designed to help users optimize their financial rewards. Perk allows users to track their credit card portfolio, compare benefits side-by-side, and manage card details including fees, bonuses, and opening dates. Built with a scalable Java Spring Boot backend and a modern React frontend using shadcn/ui.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "shadcn/ui", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    imageUrl: "/images/perk-dashboard.png",
    logoUrl: "/images/perk-logo.png",
    featured: true,
    repoLinks: [
       { label: "Frontend", url: "https://github.com/paulhwang1007/credit-card-tracker-frontend" },
       { label: "Backend", url: "https://github.com/paulhwang1007/credit-card-tracker" }
    ],
    span: "md:col-span-2 md:row-span-1",
    features: [
        "Comprehensive card details & bonus tracking",
        "Side-by-side card comparison tool",
        "Full CRUD wallet management",
        "Visual dashboard for portfolio overview"
    ],
    gallery: ["/images/perk-dashboard.png", "/images/perk-compare.png", "/images/perk-add-card.png"]
  },
  {
    id: "cornell-roster",
    title: "Cornell Roster",
    category: "Web App",
    shortDescription: "Browse Cornell classes in a more refined UI.",
    fullDescription: "A minimal, responsive frontend web app that allows users to explore Cornell University courses by semester, using the official Cornell Roster API. It provides a seamless experience for students to find and track their courses.",
    techStack: ["React", "Tailwind CSS", "HTML/CSS", "Cornell Roster API", "Aceternity UI", "Framer Motion"],
    imageUrl: "/images/cornell-roster-landing.png", 
    logoUrl: "/images/cornell-roster-logo.png",
    liveLink: "https://cornell-roster.vercel.app/SP26",
    githubLink: "https://github.com/paulhwang1007/cornell-roster",
    featured: true,
    span: "md:col-span-2 md:row-span-1",
    features: [
        "Search for courses by subject and semester",
        "Filter courses by 6+ categories",
        "Animated UI using Framer motion",
        "Course details including 10+ fields"
    ],
    gallery: [
        "/images/cornell-roster-landing.png", 
        "/images/cornell-roster-subjects.png", 
        "/images/cornell-roster-courses.png", 
        "/images/cornell-roster-details.png"
    ]
  },
  {
    id: "cusd-website",
    title: "CUSD Website",
    category: "Web App",
    shortDescription: "Official Website for Cornell University Sustainable Design (2025-2026).",
    fullDescription: "The official website for the project team Cornell University Sustainable Design constructed for 2025-2026 following a provided Figma design and restricted to vanilla HTML, CSS, and Javascript.",
    techStack: ["HTML/CSS", "JavaScript", "Figma"],
    imageUrl: "/images/cusd-landing.png",
    logoUrl: "/images/cusd-logo.png",
    liveLink: "https://cusd.cornell.edu/pages/apply.html",
    githubLink: "https://github.com/paulhwang1007/cusd-website",
    featured: true,
    span: "md:col-span-2 md:row-span-1",
    features: [
        "Pixel-perfect implementation from Figma",
        "Responsive vanilla Layout",
        "Custom timeline and project gallery components",
        "Zero-dependency lightweight architecture"
    ],
    gallery: [
        "/images/cusd-landing.png", 
        "/images/cusd-projects.png", 
        "/images/cusd-timeline.png"
    ]
  },
];
