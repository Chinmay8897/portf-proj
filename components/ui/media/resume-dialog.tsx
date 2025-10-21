"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ResumeDialog: React.FC = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1O9cq7p7P7ytd5lT8YC-ilDSZPy0R408i/view?usp=sharing", "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleResumeClick}
            className="group group hover:bg-muted text-foreground hover:text-highlight h-12 w-12 scale-75 rounded-xl p-3 duration-500 ease-in-out hover:scale-80 hover:brightness-125 xl:h-14 xl:w-14"
            aria-label="Resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ResumeDialog;
