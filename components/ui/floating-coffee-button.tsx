/*
// Floating Coffee Button - Temporarily Commented Out

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FloatingCoffeeButton: React.FC = () => {
  const pathname = usePathname();

  // Don't show on the coffee page itself
  if (pathname === "/coffee") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href="/coffee"
        className="bg-highlight text-background hover:bg-glow hover:scale-110 flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
        title="Buy me a coffee"
      >
        ☕
      </Link>
    </div>
  );
};
*/

// Temporary placeholder - floating coffee button disabled
const FloatingCoffeeButton: React.FC = () => {
  return null;
};

export default FloatingCoffeeButton;