"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TimelineCinematicOverlay() {
  const pathname = usePathname();
  const [timelineActive, setTimelineActive] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/about") {
      setTimelineActive(false);
      return;
    }

    const handleTimelineScroll = () => {
      const timelineElement = document.querySelector("[data-timeline]");
      if (!timelineElement) {
        setTimelineActive(false);
        return;
      }
      const rect = (timelineElement as HTMLElement).getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      setTimelineActive(isInView);
    };

    window.addEventListener("scroll", handleTimelineScroll, { passive: true });
    // Initial check
    handleTimelineScroll();
    return () => window.removeEventListener("scroll", handleTimelineScroll);
  }, [pathname]);

  // Mount/unmount with fade
  useEffect(() => {
    if (timelineActive) {
      setIsRendering(true);
      // Next frame to ensure transition applies
      const id = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(id);
    }
    setIsVisible(false);
    const timeout = setTimeout(() => setIsRendering(false), 350);
    return () => clearTimeout(timeout);
  }, [timelineActive]);

  if (!isRendering) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[10000] transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Top cinematic fade */}
      <div
        className="absolute top-0 right-0 left-0 h-[18vh]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,14,18,0.65), rgba(8,14,18,0.45) 30%, rgba(8,14,18,0.25) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Bottom cinematic fade */}
      <div
        className="absolute right-0 bottom-0 left-0 h-[18vh]"
        style={{
          background:
            "linear-gradient(to top, rgba(8,14,18,0.65), rgba(8,14,18,0.45) 30%, rgba(8,14,18,0.25) 55%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
}
