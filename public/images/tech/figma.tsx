import * as React from "react";

interface FigmaProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Figma = ({ width = 40, height = 40, ...props }: FigmaProps) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_117_682)">
      <path
        d="M13.3332 40.0004C17.0132 40.0004 19.9999 37.0136 19.9999 33.3336V26.6669H13.3332C9.65318 26.6669 6.6665 29.6536 6.6665 33.3336C6.6665 37.0136 9.65318 40.0004 13.3332 40.0004Z"
        className="fill-palette-2"
      />
      <path
        d="M6.6665 20.0002C6.6665 16.3202 9.65318 13.3335 13.3332 13.3335H19.9999V26.6668H13.3332C9.65318 26.6668 6.6665 23.6802 6.6665 20.0002Z"
        className="fill-palette-4"
      />
      <path
        d="M6.6665 6.66689C6.6665 2.98691 9.65318 0.000244141 13.3332 0.000244141H19.9999V13.3336H13.3332C9.65318 13.3336 6.6665 10.3469 6.6665 6.66689Z"
        className="fill-palette-3"
      />
      <path
        d="M20 0.000244141H26.6667C30.3467 0.000244141 33.3334 2.98691 33.3334 6.66689C33.3334 10.3469 30.3467 13.3336 26.6667 13.3336H20V0.000244141Z"
        className="fill-palette-1"
      />
      <path
        d="M33.3334 20.0002C33.3334 23.6802 30.3467 26.6668 26.6667 26.6668C22.9867 26.6668 20 23.6802 20 20.0002C20 16.3202 22.9867 13.3335 26.6667 13.3335C30.3467 13.3335 33.3334 16.3202 33.3334 20.0002Z"
        className="fill-palette-5"
      />
    </g>
    <defs>
      <clipPath id="clip0_117_682">
        <rect width={40} height={40} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Figma;
