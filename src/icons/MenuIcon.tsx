import React, { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
};

export const MenuIcon: FC<Props> = ({ width = 32, height = 32, className, onClick }) => {
  const onHandleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div onClick={onHandleClick}>
      <svg
        id="icon_menu"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 32"
        className={className}
      >
        <rect id="Rectangle_50" data-name="Rectangle 50" width={width} height={height} fill="#ff963c" opacity="0" />
        <line
          id="Line_4"
          data-name="Line 4"
          x2="26"
          transform="translate(3 8)"
          fill="none"
          stroke="#ff963c"
          strokeWidth="3"
        />
        <line
          id="Line_5"
          data-name="Line 5"
          x2="26"
          transform="translate(3 16)"
          fill="none"
          stroke="#ff963c"
          strokeWidth="3"
        />
        <line
          id="Line_6"
          data-name="Line 6"
          x2="26"
          transform="translate(3 24)"
          fill="none"
          stroke="#ff963c"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};
