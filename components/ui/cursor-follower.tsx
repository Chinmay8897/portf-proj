"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Only show the custom cursor if the device supports a fine pointer
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setShowCursor(true);
    }
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      // Ensure e.target is an Element before getting its computed style
      if (e.target instanceof Element) {
        const computedStyle = window.getComputedStyle(e.target);
        setIsPointer(computedStyle.cursor === "pointer");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showCursor]);

  // Add a subtle click expansion effect with opacity change and play sound
  useEffect(() => {
    if (!showCursor) return;

    const handleClick = () => {
      setIsClicked(true);
      // Create and play the audio from the public folder
      const audio = new Audio("/sounds/mouse-click.wav");
      audio.play();
      setTimeout(() => setIsClicked(false), 150);
    };

    window.addEventListener("click", handleClick, { passive: true });
    return () => window.removeEventListener("click", handleClick);
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <motion.div
      initial={{ width: 20, height: 20, scale: 1, opacity: 1 }}
      animate={{
        left: pos.x - 20,
        top: pos.y - 18,
        scale: isClicked ? 1.2 : 1,
        opacity: isClicked ? 0.35 : 1,
      }}
      transition={{
        type: "tween",
        duration: 0.15,
      }}
      className="border-border pointer-events-none fixed z-10 rounded-full border-[1px] p-4 mix-blend-difference"
    />
  );
}
