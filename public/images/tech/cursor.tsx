import * as React from "react";

interface CursorProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Cursor = ({ width = 40, height = 40, ...props }: CursorProps) => (
  <svg
    width={40}
    height={47}
    viewBox="0 0 40 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 46.0432L40 34.5324L20 23.0216L0 34.5324L20 46.0432Z"
      className="fill-palette-3"
    />
    <path
      d="M40 34.5324V11.5108L20 0V23.0216L40 34.5324Z"
      fill="url(#paint0_linear_520_460)"
    />
    <path
      d="M20 0L0 11.5108V34.5324L20 23.0216V0Z"
      fill="url(#paint1_linear_520_460)"
    />
    <path d="M40 11.5107L20 46.0431V23.0215L40 11.5107Z" className="fill-palette-1" />
    <path d="M40 11.5107L20 23.0215L0 11.5107H40Z" className="fill-palette-3" />
    <defs>
      <linearGradient
        id="paint0_linear_520_460"
        x1={40}
        y1={11.5818}
        x2={20}
        y2={23.3094}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.182} className="fill-palette-3" stopOpacity={0.31} />
        <stop offset={0.715} className="fill-palette-3" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_520_460"
        x1={20}
        y1={-5.96046e-7}
        x2={0.00000218698}
        y2={34.5324}
        gradientUnits="userSpaceOnUse"
      >
        <stop className="fill-palette-3" stopOpacity={0.6} />
        <stop offset={0.667} className="fill-palette-3" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  </svg>
);
export default Cursor;
