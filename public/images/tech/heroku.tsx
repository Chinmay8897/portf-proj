import * as React from "react";

interface HerokuProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Heroku = ({ width = 40, height = 40, ...props }: HerokuProps) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_117_702)">
      <path
        d="M34.3 0.000244141H5.6C3.6 0.000244141 2 1.60024 2 3.60024V36.4002C2 38.4002 3.6 40 5.6 40H34.3C36.3 40 37.9 38.4002 37.9 36.4002V3.60024C37.9 1.60024 36.3 0.000244141 34.3 0.000244141ZM35.9 36.4002C35.9 37.3003 35.2 38.0003 34.3 38.0003H5.6C4.7 38.0003 4 37.3003 4 36.4002V3.60024C4 2.70024 4.7 2.00024 5.6 2.00024H34.3C35.2 2.00024 35.9 2.70024 35.9 3.60024V36.4002ZM11 34.0003L15.5 30.0002L11 26.0002V34.0003ZM27.2 17.8002C26.4 17.0002 24.9 16.0002 22.4 16.0002C19.7 16.0002 16.9 16.7002 14.9 17.4002V6.00025H10.9V23.3002L13.7 22.0002C13.7 22.0002 18.3 19.9002 22.3 19.9002C24.3 19.9002 24.8 21.0002 24.8 22.0002V34.0003H28.8V22.0002C28.9 21.7002 28.9 19.5002 27.2 17.8002ZM21.9 12.5002H25.9C27.7 10.4002 28.6 8.30025 28.9 6.00025H24.9C24.5 8.30025 23.5 10.4002 21.9 12.5002Z"
        className="fill-palette-1"
      />
    </g>
    <defs>
      <clipPath id="clip0_117_702">
        <rect width={40} height={40} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Heroku;
