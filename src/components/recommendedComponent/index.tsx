import React, { FC } from 'react';
import Image from '../image/Image';
import styles from './styles.module.scss';

type Props = {
  title: string;
  description: string;
};

const RecommendedComponent: FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.recommendedComponentContainer}>
      <div className="content-wrapper">
        <span className="title">{title}</span>
        <div className="separate" />
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default RecommendedComponent;
