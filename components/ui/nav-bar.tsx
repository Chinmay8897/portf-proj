"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [timelineActive, setTimelineActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timeline detection logic
  useEffect(() => {
    if (pathname !== "/about") {
      setTimelineActive(false);
      return;
    }

    const handleTimelineScroll = () => {
      const timelineElement = document.querySelector("[data-timeline]");
      if (!timelineElement) return;

      const rect = timelineElement.getBoundingClientRect();
      const isTimelineInView =
        rect.top <= 0 && rect.bottom >= window.innerHeight;

      setTimelineActive(isTimelineInView);
    };

    // Check on scroll
    window.addEventListener("scroll", handleTimelineScroll, { passive: true });

    // Initial check
    handleTimelineScroll();

    return () => window.removeEventListener("scroll", handleTimelineScroll);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-1/2 z-50 max-w-[18rem] -translate-x-1/2 rounded-2xl py-2 transition-all duration-500 ease-in-out select-none sm:max-w-[24rem] md:max-w-[32rem] lg:max-w-[42rem] xl:max-w-[48rem] ${
        timelineActive
          ? "pointer-events-none -translate-y-4 opacity-0"
          : scrolled
            ? "bg-nav/75 border-b-highlight mt-2 w-[18rem] border-b-[1px] backdrop-blur-lg sm:w-[24rem] md:w-[32rem] lg:w-[42rem] xl:w-[48rem]"
            : "mt-0 w-[18rem] border-b-0 border-b-transparent bg-transparent shadow-none sm:w-[24rem] md:w-[32rem] lg:w-[42rem] xl:w-[48rem]"
      }`}
    >
      <nav className="flex items-center justify-center gap-2 text-sm font-semibold tracking-tighter sm:gap-4 sm:text-base md:gap-8 md:text-lg lg:gap-12 xl:gap-16 xl:px-4">
        <Link
          href="/"
          className={`hover:bg-muted/90 rounded-2xl px-2 py-2 duration-300 ease-in-out sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 ${
            pathname === "/"
              ? "text-highlight text-shadow-highlight text-shadow-lg/35"
              : ""
          }`}
        >
          <span className="whitespace-nowrap">{"/home"}</span>
        </Link>
        <Link
          href="/about"
          prefetch={true}
          className={`hover:bg-muted/90 rounded-2xl px-2 py-2 duration-300 ease-in-out sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 ${
            pathname === "/about"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          <span className="whitespace-nowrap">{"/about"}</span>
        </Link>
        <Link
          href="/projects"
          prefetch={true}
          className={`hover:bg-muted/90 rounded-2xl px-2 py-2 duration-300 ease-in-out sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 ${
            pathname === "/projects"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          <span className="whitespace-nowrap">{"/projects"}</span>
        </Link>
        {/* Coffee link temporarily commented out
        <Link
          href="/coffee"
          prefetch={true}
          className={`hover:bg-muted/90 rounded-2xl px-2 py-2 duration-300 ease-in-out sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 ${
            pathname === "/coffee"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          <span className="whitespace-nowrap">{"/caffine"}</span>
        </Link>
        */}
      </nav>
    </div>
  );
}
