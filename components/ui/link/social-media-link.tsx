import React, { forwardRef } from "react";
import Link from "next/link";

interface SocialMediaLinkProps {
  href: string;
  children: React.ReactNode;
  alt?: string;
  className?: string;
}

const SocialMediaLink = forwardRef<HTMLAnchorElement, SocialMediaLinkProps>(
  (
    {
      href,
      children,
      alt = "Social Media Icon",
      className = "w-12 h-12 xl:w-14 xl:h-14",
    },
    ref,
  ) => {
    return (
      <Link href={href} target="_blank" passHref ref={ref}>
        <div
          className={`group hover:bg-muted text-foreground scale-75 rounded-xl p-3 duration-500 ease-in-out hover:brightness-125 ${className}`}
          aria-label={alt}
        >
          <div className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-highlight">
            {children}
          </div>
        </div>
      </Link>
    );
  },
);

SocialMediaLink.displayName = "SocialMediaLink";

export default SocialMediaLink;
