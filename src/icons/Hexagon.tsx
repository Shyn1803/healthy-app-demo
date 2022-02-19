import React, { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const HexagonIcon: FC<Props> = ({ width = 116, height = 134, className }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 116 134" className={className}>
      <defs>
        <linearGradient id="linear-gradient" x1="0.267" x2="0.715" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#ffcc21" />
          <stop offset="1" stopColor="#ff963c" />
        </linearGradient>
      </defs>
      <path
        id="Path_48"
        data-name="Path 48"
        d="M100.5,0,134,58l-33.5,58h-67L0,58,33.5,0Z"
        transform="translate(0 134) rotate(-90)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
};
