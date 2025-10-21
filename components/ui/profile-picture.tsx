"use client";

import { useState } from "react";
import Image from "next/image";
import FrontImage from "@/public/images/personal/profile-picture.webp";
import BackImage from "@/public/images/personal/avatar.webp";

export default function ProfilePicture() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div
      className="perspective relative h-[250px] w-[250px] cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute h-full w-full backface-hidden rounded-full overflow-hidden">
          <Image
            src={FrontImage}
            alt="Profile Picture Front"
            fill
            quality={100}
            className="object-cover"
            placeholder="blur"
            priority={true}
            fetchPriority="high"
          />
        </div>

        {/* Back */}
        <div className="absolute h-full w-full rotate-y-180 backface-hidden rounded-full overflow-hidden">
          <Image
            src={BackImage}
            alt="Profile Picture Back"
            fill
            placeholder="blur"
            priority={true}
            fetchPriority="high"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
