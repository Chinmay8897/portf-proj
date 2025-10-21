import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import LenisScrollProvider from "@/providers/lenis-provider";
import FloatingMenuBar from "@/components/ui/floating-menu-bar";
// import FloatingCoffeeButton from "@/components/ui/floating-coffee-button"; // Temporarily commented out

export const metadata: Metadata = {
  title: "Aditya - Software Developer Portfolio",
  description:
    "Web Portfolio of K Aditya Sai Chinmay. Full-stack Software Developer specializing in Web and Mobile Development based in the Philippines.",
  // metadataBase: new URL("https://quinchy.dev"),
  keywords: [
    "K Aditya Sai Chinmay",
    "Full-Stack Software Developer",
    "Web Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "Front End",
    "Back End",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "K Aditya Sai Chinmay" }],
  creator: "K Aditya Sai Chinmay",
  publisher: "K Aditya Sai Chinmay",
  openGraph: {
    title: "K Aditya Sai Chinmay - Developer Portfolio",
    description:
      "Web Portfolio of K Aditya Sai Chinmay, a Full-Stack Software Developer, with experienced in web and mobile development. Expertise in React, Next.js, Tailwind CSS, and TypeScript.",
    images: [
      {
        url: "/images/me.png",
        width: 1000,
        height: 1000,
        alt: "Picture of K Aditya Sai Chinmay",
      },
    ],
    // url: "https://quinchy.dev",
    // siteName: "Quinch",
    // locale: "en_US",
    // type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Aditya Sai Chinmay - Developer Portfolio",
    description:
      "Web Portfolio of K Aditya Sai Chinmay, a Full-Stack Software Developer specializing in Web and Mobile Development.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: "index, follow",
  alternates: {
    // canonical: "https://quinchy.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="YDK4FKni0aKlcMhI_s7VjJAznskAxoUjmBTAEODRLNA"
        />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/personal/profile-picture.webp"
          as="image"
        />
        <link rel="preload" href="/images/personal/avatar.webp" as="image" />
        <link rel="preload" href="/images/noise.webp" as="image" />
        <link
          rel="preload"
          href="/images/thumbnails/ani-quinch.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/thumbnails/only-funds.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/thumbnails/hue-fit-web.webp"
          as="image"
        />
        <link rel="preload" href="/images/thumbnails/pasabuy.webp" as="image" />
        <link rel="preload" href="/images/thumbnails/thryve.webp" as="image" />
        <link
          rel="preload"
          href="/images/thumbnails/smile-care.webp"
          as="image"
        />
      </head>
      <body
        className={`${GeistMono.className} flex flex-col items-center justify-center !font-mono`}
      >
        <LenisScrollProvider>{children}</LenisScrollProvider>
        <FloatingMenuBar />
        {/* <FloatingCoffeeButton /> */} {/* Temporarily commented out */}
      </body>
    </html>
  );
}
