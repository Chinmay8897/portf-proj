import { Metadata } from "next";
import ProjectCard from "@/components/ui/project-card";
import ProjectData from "@/data/projects.json";
import { Project } from "@/features/projects/types";
import { thumbnails } from "@/utils/helpers";
import TypewriterText from "@/components/ui/typewriter-text";
import FadeInSection from "@/components/ui/fade-in-section";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HTML from "@/public/images/tech/html";
import CSS from "@/public/images/tech/css";
import NextJS from "@/public/images/tech/nextjs";
import AndroidStudio from "@/public/images/tech/android-studio";
import CSharp from "@/public/images/tech/csharp";
import Cursor from "@/public/images/tech/cursor";
import FastAPI from "@/public/images/tech/fastapi";
import Figma from "@/public/images/tech/figma";
import Firebase from "@/public/images/tech/firebase";
import Heroku from "@/public/images/tech/heroku";
import Java from "@/public/images/tech/java";
import JavaScript from "@/public/images/tech/javascript";
import Laravel from "@/public/images/tech/laravel";
import MySQL from "@/public/images/tech/mysql";
import PHP from "@/public/images/tech/php";
import Python from "@/public/images/tech/python";
import React from "@/public/images/tech/react";
import Supabase from "@/public/images/tech/supabase";
import Tailwind from "@/public/images/tech/tailwind";
import TypeScript from "@/public/images/tech/typescript";
import Vercel from "@/public/images/tech/vercel";
import VSCode from "@/public/images/tech/vscode";
import Appwrite from "@/public/images/tech/appwrite";

export const metadata: Metadata = {
  title: "Projects - K Aditya Sai Chinmay",
  description:
    "Explore the projects and work of K Aditya Sai Chinmay. Full-stack Software Developer showcasing web and mobile development projects.",
  keywords: [
    "projects",
    "portfolio",
    "web development",
    "mobile development",
    "software projects",
  ],
  openGraph: {
    title: "Projects - K Aditya Sai Chinmay",
    description:
      "Explore the projects and work of K Aditya Sai Chinmay. Full-stack Software Developer showcasing web and mobile development projects.",
    type: "website",
    // url: "https://quinchy.dev/projects",
  },
};

export default function Projects() {
  return (
    <>
      <FadeInSection className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {(ProjectData as Project[]).map((project, index) => (
          <ProjectCard
            key={index}
            thumbnail={thumbnails[project.thumbnail]}
            thumbnailKey={project.thumbnail}
            title={project.title}
            description={project.description}
            longDescription={project.longDescription}
            technologies={project.technologies}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            type={project.type}
          />
        ))}
      </FadeInSection>
      <FadeInSection className="flex flex-col gap-10">
        <TypewriterText label="tech:used" />
        <TooltipProvider>
          <div className="border-border flex flex-col rounded-2xl border-[1px]">
            {/* Front-end */}
            <section className="border-border flex flex-col gap-2 border-b pb-2">
              <h1 className="border-border w-full border-b px-4 py-2 font-bold sm:px-8">
                {"> Front-end"}
              </h1>
              <div className="flex flex-row flex-wrap gap-4 px-4 py-4 sm:gap-8 sm:px-12">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <HTML />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <CSS />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Tailwind />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind CSS</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <React />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>
            {/* Back-end */}
            <section className="border-border flex flex-col gap-2 border-b pb-2">
              <h1 className="border-border w-full border-b px-4 py-2 font-bold sm:px-8">
                {"> Back-end"}
              </h1>
              <div className="flex flex-row flex-wrap gap-4 px-4 py-4 sm:gap-8 sm:px-12">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <TypeScript />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TypeScript</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <JavaScript />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>JavaScript</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <PHP />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>PHP</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Python />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Python</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <CSharp />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>C#</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Java />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Java</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>
            {/* Framework */}
            <section className="border-border flex flex-col gap-2 border-b pb-2">
              <h1 className="border-border w-full border-b px-4 py-2 font-bold sm:px-8">
                {"> Framework"}
              </h1>
              <div className="flex flex-row flex-wrap gap-4 px-4 py-4 sm:gap-8 sm:px-12">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <NextJS />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Next.js</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Laravel />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Laravel</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <FastAPI />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>FastAPI</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>
            {/* Database */}
            <section className="border-border flex flex-col gap-2 border-b pb-2">
              <h1 className="border-border w-full border-b px-4 py-2 font-bold sm:px-8">
                {"> Database"}
              </h1>
              <div className="flex flex-row flex-wrap gap-4 px-4 py-4 sm:gap-8 sm:px-12">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Supabase />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Supabase</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <MySQL />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MySQL</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Firebase />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Firebase</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Appwrite />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Appwrite</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>
            {/* Tool */}
            <section className="flex flex-col gap-2 pb-2">
              <h1 className="border-border w-full border-b px-4 py-2 font-bold sm:px-8">
                {"> Tool"}
              </h1>
              <div className="flex flex-row flex-wrap gap-4 px-4 py-4 sm:gap-8 sm:px-12">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Cursor />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Cursor</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <VSCode />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>VS Code</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <AndroidStudio />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Android Studio</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Figma />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Figma</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Vercel />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Vercel</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-border hover:bg-muted hover:border-highlight flex h-16 w-16 items-center justify-center rounded-2xl border-[1px] transition-all duration-300 ease-in-out sm:h-20 sm:w-20">
                      <Heroku />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Heroku</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>
          </div>
        </TooltipProvider>
      </FadeInSection>
    </>
  );
}
