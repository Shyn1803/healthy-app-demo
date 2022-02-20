import React, { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
};

export const MenuCloseIcon: FC<Props> = ({ width = 32, height = 32, className, onClick }) => {
  const onHandleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div onClick={onHandleClick}>
      <svg id="icon_close" width={width} height={height} viewBox="0 0 32 32" className={className}>
        <rect id="Rectangle_49" data-name="Rectangle 49" width={width} height={height} fill="#ff963c" opacity="0" />
        <line
          id="Line_4"
          data-name="Line 4"
          x2="19"
          y2="19"
          transform="translate(7 7)"
          fill="none"
          stroke="#ff963c"
          strokeWidth="3"
        />
        <line
          id="Line_6"
          data-name="Line 6"
          y1="19"
          x2="19"
          transform="translate(7 7)"
          fill="none"
          stroke="#ff963c"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};
