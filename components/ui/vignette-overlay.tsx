"use client";

export default function VignetteOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Side-only vignette: keep center fully transparent/bright */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,14,18,0.65) 0%, rgba(8,14,18,0.45) 6%, rgba(8,14,18,0.25) 12%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 76%, rgba(8,14,18,0.25) 88%, rgba(8,14,18,0.45) 94%, rgba(8,14,18,0.65) 100%)",
        }}
      />
    </div>
  );
}
