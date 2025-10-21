import React from "react";

interface CSSProps {
  width?: number;
  height?: number;
}

const CSS: React.FC<CSSProps> = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.6699 0.000183105L34.4567 35.996L20.0133 40L5.6097 36.0016L2.3999 0.000183105H37.6699Z"
        className="fill-palette-1"
      />
      <path
        d="M31.7056 33.7039L34.4515 2.94385H20.0347V36.9396L31.7056 33.7039Z"
        className="fill-palette-2"
      />
      <path
        d="M9.7583 16.2963L10.154 20.7117H20.0349V16.2963H9.7583Z"
        fill="#EBEBEB"
      />
      <path
        d="M20.0347 7.35925H20.0194H8.96289L9.36425 11.7747H20.0347V7.35925Z"
        fill="#EBEBEB"
      />
      <path
        d="M20.0347 32.3574V27.7635L20.0153 27.7687L15.0978 26.4408L14.7835 22.9193H12.394H10.3511L10.9697 29.8522L20.0144 32.3631L20.0347 32.3574Z"
        fill="#EBEBEB"
      />
      <path
        d="M25.4567 20.7116L24.9441 26.4381L20.0195 27.7673V32.3609L29.0714 29.8522L29.1378 29.1063L30.1754 17.4819L30.2831 16.2962L31.0803 7.35925H20.0195V11.7747H26.2413L25.8396 16.2962H20.0195V20.7116H25.4567Z"
        fill="white"
      />
    </svg>
  );
};

export default CSS;
