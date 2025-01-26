import React from "react";

type CheckmarkIconProps = {
  width?: number;
  height?: number;
  stroke?: string;
};

const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({
  width = 24,
  height = 24,
  stroke = "white",
}) => (
  <svg viewBox="0 0 24 24" width={width} height={height}>
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      stroke={stroke}
      fill="none"
      strokeWidth="2"
    />
  </svg>
);

export default CheckmarkIcon;
