"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import SiteLink from "@/components/ui/link/site-link";
import { Project } from "@/features/projects/types";
import ThumbnailViewer from "@/components/ui/thumbnail-viewer";
import { projectGalleries } from "@/utils/helpers";

interface ProjectCardProps {
  thumbnail: string | StaticImageData;
  thumbnailKey: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubLink?: string;
  websiteLink?: string;
  type?: Project["type"];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  thumbnailKey,
  title,
  description,
  longDescription,
  technologies,
  githubLink,
  websiteLink,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group border-border bg-background hover:border-highlight hover:bg-muted relative flex h-96 w-80 flex-col gap-5 overflow-hidden rounded-3xl border-[1px] p-7 duration-500 ease-in-out"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="scan-lines"></div>
        </div>
        <Image
          src={thumbnail}
          alt={title}
          width={1280}
          height={607}
          fetchPriority="high"
          priority={true}
          quality={100}
          className="border-border/50 max-h-[140px] min-h-[140px] rounded-lg border-[1px] transition-all duration-500 ease-in-out group-hover:scale-99"
        />
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <p className="text-highlight text-base font-bold">{title}</p>
          </div>
          <p className="h-28 text-sm">{description}</p>
          <div className="self-end text-xs">{">"} click to expand_</div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="flex h-[70vh] flex-col overflow-hidden lg:min-w-[40rem]">
          <DialogHeader>
            <DialogTitle asChild>
              <div className="text-highlight flex translate-y-0.5 flex-col items-start gap-4 text-xs lg:translate-y-0 lg:flex-row lg:items-center lg:text-base">
                {type && (
                  <>
                    PS C:Users\Aditya\Projects\
                    {type === "company" ? "Company" : "Personal"}\{title}
                  </>
                )}
              </div>
            </DialogTitle>
          </DialogHeader>
          <div
            data-lenis-prevent
            className="custom-scrollbar flex flex-col gap-4 overflow-y-auto"
          >
            <div className="px-5 pt-5">
              {projectGalleries[thumbnailKey] ? (
                <ThumbnailViewer
                  title={title}
                  gallery={projectGalleries[thumbnailKey]}
                />
              ) : (
                <Image
                  src={thumbnail}
                  alt={title}
                  width={600}
                  height={400}
                  quality={100}
                  priority={true}
                  className="border-border h-auto w-full rounded-lg border-[1px]"
                />
              )}
            </div>
            <div className="mb-10 flex flex-col gap-4 px-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-highlight font-mono text-xs lowercase">
                  ├─ {`${title}.description`}:
                </h1>
                <p className="ml-5 text-base">{longDescription}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-highlight font-mono text-xs lowercase">
                  ├─ {`${title}.technologies`}:
                </h1>
                <div className="mt-2 ml-5 flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-muted text-foreground hover:bg-highlight hover:text-background transition-all duration-500 ease-in-out"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {(githubLink || websiteLink) && (
                  <h1 className="text-highlight font-mono text-xs lowercase">
                    ├─ {`${title}.links`}:
                  </h1>
                )}
                <div className="mt-2 flex flex-row gap-2 px-5">
                  {githubLink && (
                    <SiteLink href={githubLink}>
                      <div className="bg-highlight mr-2 h-2 w-2 animate-pulse rounded-full" />
                      Github
                    </SiteLink>
                  )}
                  {websiteLink && (
                    <SiteLink href={websiteLink}>
                      <div className="bg-highlight mr-2 h-2 w-2 animate-pulse rounded-full" />
                      Website
                    </SiteLink>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0">
            <div className="scan-lines"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
