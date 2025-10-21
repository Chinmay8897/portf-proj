// Shared types for the application

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  technologies: string[];
  githubLink?: string;
  websiteLink?: string;
  type?: "personal" | "company";
}