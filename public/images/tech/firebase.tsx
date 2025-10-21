import * as React from "react";

interface FirebaseProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Firebase = ({ width = 40, height = 40, ...props }: FirebaseProps) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.5623 14.4472L20.562 18.1719L16.8486 10.6788L18.7669 6.37037C19.2518 5.51097 20.0447 5.49961 20.5295 6.37037L24.5623 14.4472Z"
      className="fill-palette-1"
    />
    <path
      d="M20.5636 18.1703L5.6001 32.088L16.8503 10.6788L20.5636 18.1703Z"
      className="fill-palette-3"
    />
    <path
      d="M28.9486 8.75085C29.6653 8.06817 30.4031 8.29845 30.5895 9.26813L34.4796 31.8999L21.5771 39.646C21.1247 39.8989 19.9247 39.9979 19.9247 39.9979C19.9247 39.9979 18.8334 39.8649 18.4151 39.6346L5.6001 32.088L28.9486 8.75085Z"
      className="fill-palette-2"
    />
    <path
      d="M16.8503 10.6788L5.6001 32.0879L10.6139 0.795601C10.802 -0.174077 11.3517 -0.27299 11.8479 0.586421L16.8503 10.6788Z"
      className="fill-palette-1"
    />
  </svg>
);
export default Firebase;
