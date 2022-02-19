import React, { FC } from 'react';
import Image from '../image/Image';
import styles from './styles.module.scss';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const RecordComponent: FC<Props> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.recordComponentContainer}>
      <div className="background"></div>
      <Image source={imageUrl} />
      <div className="content-wrapper">
        <span className="title">{title}</span>
        <div className="description-wrapper">
          <span className="description">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default RecordComponent;
