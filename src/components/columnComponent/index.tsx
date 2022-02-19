import React, { FC } from 'react';
import Image from '../image/Image';
import styles from './styles.module.scss';

type Props = {
  imageUrl: string;
  date: string;
  time: string;
  description: string;
  tags: string[];
};

const ColumnComponent: FC<Props> = ({ imageUrl, date, time, description, tags }) => {
  return (
    <div className={styles.columnComponentContainer}>
      <div className="image-wrapper">
        <Image source={imageUrl} />
        <div className="date-time">
          <span className="date">{date}</span>
          <span className="time">{time}</span>
        </div>
      </div>
      <div className="description">{description}</div>
      <div className="tags-wrapper">
        {tags?.map((item, index) => {
          return (
            <span key={index} className="tag">
              #{item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnComponent;
