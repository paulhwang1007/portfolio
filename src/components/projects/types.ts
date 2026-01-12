export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  imageUrl: string;
  logoUrl?: string;
  liveLink?: string;
  githubLink?: string;
  repoLinks?: { label: string; url: string }[];
  featured?: boolean;
  span?: string; // e.g., "md:col-span-2 md:row-span-2"
  gallery?: string[];
  features?: string[];
}
