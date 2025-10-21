import * as React from "react";

interface NextJSProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const NextJS = ({ width = 40, height = 40, ...props }: NextJSProps) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_117_653)">
      <path
        d="M20 39.9996C31.0457 39.9996 40 31.0453 40 19.9996C40 8.95394 31.0457 -0.000366211 20 -0.000366211C8.95432 -0.000366211 0 8.95394 0 19.9996C0 31.0453 8.95432 39.9996 20 39.9996Z"
        className="fill-palette-1"
      />
      <path
        d="M33.224 35.0044L15.3649 11.9999H12V27.9932H14.6919V15.4184L31.1109 36.6322C31.8518 36.1362 32.5576 35.5922 33.224 35.0044Z"
        fill="url(#paint0_linear_117_653)"
      />
      <path
        d="M28.2223 11.9999H25.5557V27.9999H28.2223V11.9999Z"
        fill="url(#paint1_linear_117_653)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_117_653"
        x1={24.2222}
        y1={25.8888}
        x2={32.1111}
        y2={35.6666}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_117_653"
        x1={26.889}
        y1={11.9999}
        x2={26.8443}
        y2={23.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <clipPath id="clip0_117_653">
        <rect width={40} height={40} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default NextJS;
