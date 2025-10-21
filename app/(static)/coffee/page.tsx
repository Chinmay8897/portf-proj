/*
// Coffee Page - Temporarily Commented Out

import { Metadata } from "next";
import FadeInSection from "@/components/ui/fade-in-section";
import CoffeeSupport from "@/components/ui/coffee-support";

export const metadata: Metadata = {
  title: "Coffee - K Aditya Sai Chinmay | Support My Work",
  description:
    "Support K Aditya Sai Chinmay's work by buying a coffee. Your contribution helps me continue creating awesome open-source projects and learning new technologies.",
  keywords: [
    "coffee",
    "support",
    "donation",
    "K Aditya Sai Chinmay",
    "software developer",
    "open source",
  ],
  openGraph: {
    title: "Coffee - K Aditya Sai Chinmay | Support My Work",
    description:
      "Support K Aditya Sai Chinmay's work by buying a coffee. Your contribution helps me continue creating awesome open-source projects and learning new technologies.",
    type: "website",
    url: "https://quinchy.dev/coffee",
  },
};

export default function Coffee() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-4">
      <FadeInSection className="text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="text-6xl">☕</div>
          <h1 className="text-highlight text-shadow-highlight text-4xl font-bold tracking-tight md:text-5xl">
            Buy Me a Coffee
          </h1>
          <p className="text-foreground max-w-2xl text-lg leading-relaxed opacity-90">
            If you enjoyed my work or found my projects helpful, consider
            supporting me!
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <CoffeeSupport />
      </FadeInSection>
    </div>
  );
}
*/

// Temporary placeholder page
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - K Aditya Sai Chinmay",
  description: "This page is temporarily unavailable.",
};

export default function Coffee() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-4">
      <div className="text-center">
        <h1 className="text-highlight text-4xl font-bold mb-4">Page Temporarily Unavailable</h1>
        <p className="text-foreground opacity-75">This page is currently under maintenance.</p>
      </div>
    </div>
  );
}