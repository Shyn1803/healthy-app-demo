import React, { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const CupIcon: FC<Props> = ({ width = 56, height = 56, className }) => {
  return (
    <svg id="icon_cup" width={width} height={height} viewBox="0 0 56 56" className={className}>
      <rect id="Rectangle_53" data-name="Rectangle 53" width={width} height={height} fill="#fff" opacity="0" />
      <g id="Group_23" data-name="Group 23" transform="translate(11 8)">
        <path
          id="coffee-15"
          d="M1817.692,930.555a4.055,4.055,0,0,1-4.1-4.046h-25.755a4.1,4.1,0,0,1-4.149,4.046v2.621h34Zm-32.3,5.953,5.206,30h20.294l5.1-30Zm26.586,3.327-1.134,6.674h-20.2l-1.134-6.674Zm-18.5,23.341-1.134-6.667h16.8l-1.132,6.667Z"
          transform="translate(-1783.692 -926.508)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};
