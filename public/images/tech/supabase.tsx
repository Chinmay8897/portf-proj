import * as React from "react";

interface SupabaseProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Supabase = ({ width = 40, height = 40, ...props }: SupabaseProps) => (
  <svg
    width={40}
    height={41}
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_520_429)">
      <path
        d="M23.3792 40.0145C22.3298 41.3211 20.2021 40.6052 20.1769 38.9369L19.8071 14.536H36.4015C39.4072 14.536 41.0835 17.9684 39.2145 20.2959L23.3792 40.0145Z"
        fill="url(#paint0_linear_520_429)"
      />
      <path
        d="M23.3792 40.0145C22.3298 41.3211 20.2021 40.6052 20.1769 38.9369L19.8071 14.536H36.4015C39.4072 14.536 41.0835 17.9684 39.2145 20.2959L23.3792 40.0145Z"
        className="fill-palette-1"
      />
      <path
        d="M16.6303 0.751473C17.6797 -0.55523 19.8074 0.160749 19.8327 1.82907L19.9947 26.2299H3.60798C0.602202 26.2299 -1.07418 22.7975 0.794907 20.4701L16.6303 0.751473Z"
        className="fill-palette-2"
      />
    </g>
  </svg>
);
export default Supabase;
