import React, { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export const InfoIcon: FC<Props> = ({ width = 32, height = 32, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" className={className}>
      <g id="icon_info" transform="translate(3.5 3)">
        <rect
          id="Rectangle_49"
          data-name="Rectangle 49"
          width="32"
          height="32"
          transform="translate(-3.5 -3)"
          fill="#ff963c"
          opacity="0"
        />
        <path
          id="Path_30"
          data-name="Path 30"
          d="M1774.539,1002.289h-12.428l-8,5.7v-5.7h-4.572v-22.3h25v22.3Zm-2.286-20.026h-20.428v17.754h4.572v3.55l4.98-3.55h10.877V982.263Zm-8.851,8.119v6.534h-2.63v-6.534Zm-1.315-1.96a1.634,1.634,0,1,0-1.644-1.633,1.639,1.639,0,0,0,1.644,1.633Z"
          transform="translate(-1749.539 -979.991)"
          fill="#ff963c"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};
