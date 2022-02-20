/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import RecommendedComponent from 'src/components/recommendedComponent';
import ColumnComponent from 'src/components/columnComponent';
import styles from './Column.module.scss';
import { setColumn } from 'src/features/guest/guest';
import { getColumn } from 'src/api/guestApi';
import { useDispatch, useSelector } from 'react-redux';

const RECOMMENDED_DATA = [
  {
    title: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    description: '健康',
  },
];

function Column() {
  const columnGuest = useSelector((state: any) => state.guest.column);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const fetchColumn = () => {
    setLoading(true);
    getColumn()
      .then((response) => {
        dispatch(setColumn(response));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchColumn();
  }, []);

  const onLoadMoreFood = () => {
    fetchColumn();
  };

  return (
    <div className={styles.columnContainer}>
      <div className="container">
        <section className="section recommended-wrapper">
          {RECOMMENDED_DATA?.map((item, index) => {
            return <RecommendedComponent key={index} title={item.title} description={item.description} />;
          })}
        </section>
        <section className="section column-section">
          <div className="column-list">
            {columnGuest?.map((item: any) => {
              const { imageUrl, date, time, description, tags } = item;
              return (
                <ColumnComponent imageUrl={imageUrl} date={date} time={time} description={description} tags={tags} />
              );
            })}
          </div>
          <div className="btn-wrapper">
            <button className="btn-load-more" onClick={onLoadMoreFood}>
              記録をもっと見る
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Column;
