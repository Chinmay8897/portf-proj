import { Metadata } from "next";
import ProfilePicture from "@/components/ui/profile-picture";
import SocialMediaList from "@/components/ui/media/media-list";
import MoveToProjectButton from "@/features/home/components/move-to-project-button";
import TypewriterText from "@/components/ui/typewriter-text";
import ProjectCard from "@/components/ui/project-card";
import ViewMoreProjectsLink from "@/components/ui/link/view-more-projects-link";
import FadeInSection from "@/components/ui/fade-in-section";

import ProjectData from "@/data/projects.json";
import { Project } from "@/features/projects/types";
import { thumbnails } from "@/utils/helpers";

export const metadata: Metadata = {
  title: "Aditya Sai Chinmay - Software Developer Portfolio",
  description:
    "Web Portfolio of K Aditya Sai Chinmay. Full-stack Software Developer specializing in Web and Mobile Development based in the Philippines.",
  keywords: [
    "software developer",
    "web development",
    "mobile development",
    "portfolio",
    "Philippines",
  ],
  openGraph: {
    title: "Aditya Sai Chinmay - Software Developer Portfolio",
    description:
      "Web Portfolio of K Aditya Sai Chinmay. Full-stack Software Developer specializing in Web and Mobile Development.",
    type: "website",
    url: "https://adityasaichinmay.vercel.app/",
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <FadeInSection className="flex items-center gap-5 md:items-start">
        <div className="flex flex-col items-center gap-10 lg:items-start">
          <figure className="flex flex-col items-center gap-4 md:flex-row md:items-start lg:gap-8 xl:gap-8">
            <ProfilePicture />
            <figcaption>
              <div className="flex min-w-[10.75rem] flex-col items-center gap-1 select-none md:items-start lg:min-w-[20rem] lg:gap-4">
                <h1
                  lang="en"
                  aria-label="kwinch"
                  className="text-highlight text-shadow-highlight flex text-[3rem] leading-none font-semibold tracking-[-0.08em] text-shadow-lg/25 md:text-[4.5rem]"
                >
                  ad<p className="tracking-[-0.55rem]">i</p>tya
                </h1>
                <p className="ml-1 text-[1rem] tracking-tighter opacity-90 md:text-[1.40rem] lg:ml-2">
                  Software Developer
                </p>
                <SocialMediaList />
              </div>
            </figcaption>
          </figure>
          <article>
            <p className="max-w-[20rem] text-center text-base sm:max-w-[25rem] md:max-w-[32rem] lg:max-w-[40rem] xl:text-start">
              Hi! My name is{" "}
              <span className="text-highlight">K Aditya Sai Chinmay</span> and
              I'm a Full-stack Software Developer that specializes in Web Development based in India.
              <br />
              <br />
              I am a Developer with a passion for creating stunning visuals and
              solving problems. Whether it's a website, or mobile application, I
              strive to deliver software that's both stunning and effective to
              use.
              <br />
              <br />
              Aside from coding and tech, I enjoy Films, Gaming, Videography,
              Editing, and more.
            </p>
          </article>
          <MoveToProjectButton />
        </div>
      </FadeInSection>
      {/* 2. Projects Section */}
      <FadeInSection
        id="projects-section"
        className="flex w-full scroll-mt-40 flex-col items-center gap-5"
      >
        <TypewriterText label="code:projects" />
        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
          {(ProjectData as Project[]).slice(0, 4).map((project, index) => (
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
        </div>
        <ViewMoreProjectsLink href="/projects" label="View more projects" />
      </FadeInSection>
    </>
  );
}
