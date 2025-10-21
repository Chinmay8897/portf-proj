"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/ui/splash-screen";
import VignetteOverlay from "@/components/ui/vignette-overlay";
import TimelineCinematicOverlay from "@/components/ui/timeline-cinematic-overlay";
import CursorFollower from "@/components/ui/cursor-follower";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/nav-bar";

const HOME_IMAGE_SRCS = [
  "/images/thumbnails/ani-quinch.webp",
  "/images/thumbnails/only-funds.webp",
  "/images/thumbnails/hue-fit-web.webp",
  "/images/thumbnails/pasabuy.webp",
  "/images/thumbnails/thryve.webp",
  "/images/thumbnails/smile-care.webp",
];

// Simple image preloader utility
function preloadImages(srcs: string[]): Promise<void[]> {
  if (typeof window === "undefined") return Promise.resolve([]);
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        }),
    ),
  );
}

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const inRoot = pathname === "/";

  const [showSplash, setShowSplash] = useState(inRoot);
  const [assetsReady, setAssetsReady] = useState(!inRoot);

  useEffect(() => {
    if (!inRoot) {
      setShowSplash(false);
      setAssetsReady(true);
      return;
    }

    let isMounted = true;
    async function loadAssets() {
      // Wait a tick for hydration
      await new Promise((r) => setTimeout(r, 80));
      await preloadImages(HOME_IMAGE_SRCS);
      if (isMounted) setAssetsReady(true);
    }
    loadAssets();
    return () => {
      isMounted = false;
    };
  }, [inRoot]);

  // Show splash if we're on root ("/") and not done prepping assets yet
  if (showSplash || !assetsReady) {
    return <SplashScreen onSlideEnd={() => setShowSplash(false)} />;
  }

  // Main app/page children
  return (
    <>
      <Navbar />
      <CursorFollower />
      <VignetteOverlay />
      <TimelineCinematicOverlay />
      {children}
      <Footer />
    </>
  );
}
