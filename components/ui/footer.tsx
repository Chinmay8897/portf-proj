import React from "react";
import SocialMediaList from "@/components/ui/media/media-list";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-[43rem]" role="contentinfo">
      <div className="border-muted flex flex-col items-center justify-center gap-1 border-t py-5 pb-8 sm:gap-[2rem] lg:flex-row lg:gap-[9rem] lg:pb-5">
        <SocialMediaList />
        <p className="flex flex-col text-center text-xs lg:mb-0 lg:items-end">
          {`© ${currentYear} K Aditya Sai Chinmay.`}
          <br className="block lg:hidden" />
          {" All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
