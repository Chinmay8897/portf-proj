import * as React from "react";

interface AppwriteProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Appwrite = ({ width = 40, height = 40, ...props }: AppwriteProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z"
      className="fill-palette-2"
    />
    <path
      d="M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8Z"
      className="fill-palette-1"
    />
    <path
      d="M15.5 15L20 20L24.5 15H27.5L20 23.5L12.5 15H15.5Z"
      className="fill-palette-3"
    />
    <path
      d="M15.5 19L20 24L24.5 19H27.5L20 27.5L12.5 19H15.5Z"
      className="fill-palette-3"
      opacity="0.7"
    />
  </svg>
);

export default Appwrite;
