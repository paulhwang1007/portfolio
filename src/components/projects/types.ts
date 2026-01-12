export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  span?: string; // e.g., "md:col-span-2 md:row-span-2"
}
