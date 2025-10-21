"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SiteLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  blank?: boolean;
}

const SiteLink: React.FC<SiteLinkProps> = ({
  href = "",
  children,
  className,
  blank = true,
}) => {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      className={`hover group text-foreground hover:text-highlight inline-flex items-center rounded-lg text-base font-medium underline transition-all duration-300 ease-in-out ${className || ""}`}
    >
      {children}
      <ArrowUpRight
        width={18}
        height={18}
        className="transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
};

export default SiteLink;
