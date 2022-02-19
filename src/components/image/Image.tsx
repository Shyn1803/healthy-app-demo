import React, { FC } from 'react';
import styles from './Image.module.scss';

type Props = {
  source: string;
  source2x?: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  isLocal?: boolean;
};

const Image: FC<Props> = ({ source, source2x, className, alt, width, height, isLocal }) => {
  if (isLocal) {
    return (
      <picture>
        <source srcSet={`${source} 1x, ${source2x} 2x`} />
        <img loading="lazy" width={width} height={height} src={source} alt={alt || 'Site'} className={className} />
      </picture>
    );
  }

  return <img loading="lazy" width={width} height={height} src={source} alt={alt || 'Site'} className={className} />;
};

export default Image;
