"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type ThumbnailViewerProps = {
  title: string;
  gallery: {
    thumbnail: StaticImageData;
    images: StaticImageData[];
  };
};

export default function ThumbnailViewer({
  title,
  gallery,
}: ThumbnailViewerProps) {
  const { thumbnail, images } = gallery;
  const [activeIndex, setActiveIndex] = useState<number>(-1); // -1 shows main thumbnail

  const current = activeIndex === -1 ? thumbnail : images[activeIndex];

  return (
    <div className="flex flex-col gap-2">
      <Image
        src={current}
        alt={title}
        priority
        quality={100}
        className="border-border h-auto w-full rounded-lg border-[1px]"
      />
      {images?.length > 0 && (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          <button
            aria-label="Show main thumbnail"
            onClick={() => setActiveIndex(-1)}
            className={`border-border hover:border-highlight rounded-md border-[1px] p-0.5 ${
              activeIndex === -1 ? "border-highlight" : ""
            }`}
          >
            <Image
              src={thumbnail}
              alt={`${title} main`}
              className="h-16 w-full rounded object-cover"
            />
          </button>
          {images.map((img, idx) => (
            <button
              key={idx}
              aria-label={`Show image ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 ease-in-out border-border hover:border-highlight rounded-md border-[1px] p-0.5 ${
                activeIndex === idx ? "border-highlight" : ""
              }`}
            >
              <Image
                src={img}
                alt={`${title} ${idx + 1}`}
                className="h-16 w-full rounded object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
