import React, { FC } from 'react';
import Image from '../image/Image';
import styles from './styles.module.scss';

type Props = {
  imageUrl: string;
  date: string;
  period: string;
};

const FoodComponent: FC<Props> = ({ imageUrl, date, period }) => {
  return (
    <div className={styles.foodComponentContainer}>
      <Image source={imageUrl} />
      <div className="info-wrapper">
        <span className="date">{date}.</span>
        <span className="period">{period}</span>
      </div>
    </div>
  );
};

export default FoodComponent;
