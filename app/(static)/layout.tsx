import { ReactNode } from "react";
import MainLayout from "@/components/layouts/main-layout";

export default function StaticLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainLayout>
        <main
          id="main-content"
          className="mt-[9rem] mb-[9rem] flex flex-col items-center justify-center gap-64 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48"
        >
          {children}
        </main>
      </MainLayout>
    </>
  );
}
