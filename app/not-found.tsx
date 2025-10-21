import SiteLink from "@/components/ui/link/site-link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center px-4">
        <div className="flex max-w-2xl flex-col items-center justify-center gap-8 text-center">
          <div className="space-y-4">
            <h1 className="text-foreground text-6xl font-bold sm:text-7xl md:text-8xl">
              404
            </h1>
            <h2 className="text-foreground text-xl font-semibold sm:text-2xl">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-8 sm:flex-row">
            <SiteLink
              href="/"
              className="flex items-center gap-2"
              blank={false}
            >
              <Home size={20} />
              Back to Home
            </SiteLink>
          </div>
        </div>
      </div>
    </>
  );
}
