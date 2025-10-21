"use client";

import React, { useState } from "react";
import { Settings, Palette, RotateCcw } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const FloatingMenuBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { randomizeTheme, resetTheme } = useTheme();

  const handleSettingsClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRandomizeTheme = () => {
    randomizeTheme();
    // Menu stays open
  };

  const handleResetTheme = () => {
    resetTheme();
    // Menu stays open
  };

  return (
    <div className="fixed right-6 bottom-6 z-9999">
      {/* Settings Button */}
      <button
        onClick={handleSettingsClick}
        className="bg-background border-border text-foreground hover:bg-muted flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Settings"
      >
        <Settings size={20} />
      </button>

      {/* Menu */}
      {isMenuOpen && (
        <div className="bg-background border-border absolute right-0 bottom-16 min-w-[300px] rounded-lg border p-2 shadow-xl">
          <div className="flex flex-col gap-2">
            <button
              onClick={handleRandomizeTheme}
              className="text-foreground hover:bg-muted flex items-center gap-3 rounded-md px-4 py-3 transition-colors duration-200"
            >
              <Palette size={18} />
              <span className="text-sm font-medium">Randomize Theme</span>
            </button>
            <button
              onClick={handleResetTheme}
              className="text-foreground hover:bg-muted flex items-center gap-3 rounded-md px-4 py-3 transition-colors duration-200"
            >
              <RotateCcw size={18} />
              <span className="text-sm font-medium">Default Theme</span>
            </button>
          </div>
        </div>
      )}

      {/* Backdrop to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default FloatingMenuBar;
