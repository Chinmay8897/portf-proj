import React from "react";

interface HTMLProps {
  width?: number;
  height?: number;
}

const HTML: React.FC<HTMLProps> = ({
  width = 40,
  height = 40,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.60846 36.0138L2.3999 0.000183105H37.6746L34.466 35.9944L20.0081 40"
        className="fill-palette-1"
      />
      <path
        d="M20.0371 36.9378V2.95624H34.4562L31.7046 33.6806"
        className="fill-palette-2"
      />
      <path
        d="M8.95312 7.36053H20.0372V11.7747H13.7951L14.2035 16.2959H20.0372V20.7003H10.1588L8.95312 7.36053ZM10.3532 22.9172H14.7868L15.098 26.4466L20.0372 27.7689V32.3775L10.9755 29.8496"
        className="fill-[#EBEBEB]"
      />
      <path
        d="M31.0822 7.36053H20.0176V11.7747H30.6739L31.0822 7.36053ZM30.2752 16.2959H20.0176V20.7101H25.4624L24.9471 26.4466L20.0176 27.7689V32.3581L29.0599 29.8496"
        className="fill-[#FFFFFF]"
      />
    </svg>
  );
};

export default HTML;