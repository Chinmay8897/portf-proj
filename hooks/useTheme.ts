import { useCallback } from "react";

// Default colors (your original theme)
const defaultColors = {
  border: "#8abeae50",
  scanlines: "#8abeae10",
  background: "#13171d",
  shadow: "#080e12",
  foreground: "#8abeae",
  highlight: "#83ffc0",
  muted: "#1f282b",
  nav: "#1b2226",
  glow: "#baffea",
  palette1: "#4EB69C",
  palette2: "#7BCBC2",
  palette3: "#338A74",
  palette4: "#338A74",
  palette5: "#81E7DB",
};

export const useTheme = () => {
  const updateCursor = useCallback((foregroundColor: string) => {
    // Create the cursor SVG with the new foreground color
    const cursorSvg = `data:image/svg+xml,%3Csvg width='15' height='23' viewBox='0 0 15 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.7263 19.665C11.9567 20.2158 11.7353 22.3016 10.5132 22.7851C9.29116 23.2686 7.72979 22.7851 7.72979 22.7851L4.89659 17.1434L0 22.0187V0L15 14.9346H9.41131C9.68559 15.4582 11.4335 18.9653 11.7263 19.665Z' fill='${foregroundColor.replace("#", "%23")}'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.31415 3.15881V18.8598L5.2566 14.9346L8.54198 21.4767C8.54198 21.4767 9.43075 21.759 9.85613 21.4767C10.2815 21.1943 10.7046 20.6257 10.5132 20.1683C9.6095 18.0088 7.22783 13.6262 7.22783 13.6262H11.8274L1.31415 3.15881Z' fill='${foregroundColor.replace("#", "%23")}'/%3E%3C/svg%3E`;

    // Update the cursor for all elements
    document.documentElement.style.setProperty(
      "--cursor-url",
      `url("${cursorSvg}"), auto`,
    );

    // Apply the cursor to all elements
    const style = document.createElement("style");
    style.id = "dynamic-cursor-style";
    style.textContent = `
      * {
        cursor: var(--cursor-url) !important;
      }
    `;

    // Remove existing style if it exists
    const existingStyle = document.getElementById("dynamic-cursor-style");
    if (existingStyle) {
      existingStyle.remove();
    }

    document.head.appendChild(style);
  }, []);

  const rotateHue = useCallback((hexColor: string, degrees: number) => {
    // Extract alpha value if present (8 characters = rgba, 6 characters = rgb)
    const hasAlpha = hexColor.length === 9;
    const alpha = hasAlpha ? hexColor.slice(7, 9) : null;
    const rgbHex = hasAlpha ? hexColor.slice(0, 7) : hexColor;

    // Convert hex to HSL
    const hex = rgbHex.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    // Rotate hue
    h = (h + degrees / 360) % 1;

    // Convert back to hex
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let r1, g1, b1;
    if (s === 0) {
      r1 = g1 = b1 = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r1 = hue2rgb(p, q, h + 1 / 3);
      g1 = hue2rgb(p, q, h);
      b1 = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = (c: number) => {
      const hex = Math.round(c * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    const result = `#${toHex(r1)}${toHex(g1)}${toHex(b1)}`;

    // Add alpha back if it was present
    return alpha ? `${result}${alpha}` : result;
  }, []);

  const randomizeTheme = useCallback(() => {
    // Generate a random hue offset (0-360 degrees)
    const hueOffset = Math.floor(Math.random() * 360);

    // Update CSS custom properties
    const root = document.documentElement;
    const newForeground = rotateHue(defaultColors.foreground, hueOffset);

    root.style.setProperty(
      "--color-border",
      rotateHue(defaultColors.border, hueOffset),
    );
    root.style.setProperty(
      "--color-scanlines",
      rotateHue(defaultColors.scanlines, hueOffset),
    );
    root.style.setProperty(
      "--color-background",
      rotateHue(defaultColors.background, hueOffset),
    );
    root.style.setProperty(
      "--color-shadow",
      rotateHue(defaultColors.shadow, hueOffset),
    );
    root.style.setProperty("--color-foreground", newForeground);
    root.style.setProperty(
      "--color-highlight",
      rotateHue(defaultColors.highlight, hueOffset),
    );
    root.style.setProperty(
      "--color-muted",
      rotateHue(defaultColors.muted, hueOffset),
    );
    root.style.setProperty(
      "--color-nav",
      rotateHue(defaultColors.nav, hueOffset),
    );
    root.style.setProperty(
      "--color-glow",
      rotateHue(defaultColors.glow, hueOffset),
    );
    root.style.setProperty(
      "--color-palette-1",
      rotateHue(defaultColors.palette1, hueOffset),
    );
    root.style.setProperty(
      "--color-palette-2",
      rotateHue(defaultColors.palette2, hueOffset), 
    );
    root.style.setProperty(
      "--color-palette-3",
      rotateHue(defaultColors.palette3, hueOffset),
    );
    root.style.setProperty(
      "--color-palette-4",
      rotateHue(defaultColors.palette4, hueOffset),
    );
    root.style.setProperty(
      "--color-palette-5",
      rotateHue(defaultColors.palette5, hueOffset),
    );
    // Update cursor with new foreground color
    updateCursor(newForeground);
  }, [rotateHue, updateCursor]);

  const resetTheme = useCallback(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-border", defaultColors.border);
    root.style.setProperty("--color-scanlines", defaultColors.scanlines);
    root.style.setProperty("--color-background", defaultColors.background);
    root.style.setProperty("--color-shadow", defaultColors.shadow);
    root.style.setProperty("--color-foreground", defaultColors.foreground);
    root.style.setProperty("--color-highlight", defaultColors.highlight);
    root.style.setProperty("--color-muted", defaultColors.muted);
    root.style.setProperty("--color-nav", defaultColors.nav);
    root.style.setProperty("--color-glow", defaultColors.glow);
    root.style.setProperty("--color-palette-1", defaultColors.palette1);
    root.style.setProperty("--color-palette-2", defaultColors.palette2);
    root.style.setProperty("--color-palette-3", defaultColors.palette3);
    root.style.setProperty("--color-palette-4", defaultColors.palette4);
    root.style.setProperty("--color-palette-5", defaultColors.palette5);
    // Reset cursor to default color
    updateCursor(defaultColors.foreground);
  }, [updateCursor]);

  return {
    randomizeTheme,
    resetTheme,
  };
};
