/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import RecommendedComponent from 'src/components/recommendedComponent';
import ColumnComponent from 'src/components/columnComponent';
import styles from './Column.module.scss';

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

const COLUMN_DATA = [
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/47NFxW2/column-1.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/t3qyXM7/column-2.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/kmNCQN0/column-3.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/JtCDvZP/column-4.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/x3MwLzm/column-5.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/bKL5zcd/column-6.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/RcvPBkw/column-7.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
  {
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    date: '2021.05.17',
    time: '23:25',
    imageUrl: 'https://i.ibb.co/Wv6sq9v/column-8.png',
    tags: ['魚料理', '和食', 'DHA'],
  },
];

function Column() {
  // const user = useSelector((state: any) => state.collapsed.isCollapsed);

  const [diaryData, setDiaryData] = useState<any[]>([]);

  useEffect(() => {
    fakeDiaryData();
    console.log('diaryData: ', diaryData);
  }, []);

  const fakeDiaryData = () => {
    for (let index = 0; index < 8; index++) {
      diaryData.push({
        dateTime: '2022-05-21 23:25:00.000',
        title: '私の日記の記録が一部表示されます。',
        note: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      });
    }

    setDiaryData(diaryData);
  };

  const onLoadMoreFood = () => {
    const newData = diaryData;
    for (let index = 0; index < 8; index++) {
      newData.push({
        dateTime: '2022-05-21 23:25:00.000',
        title: '私の日記の記録が一部表示されます。',
        note: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      });
    }

    setDiaryData(newData);
    console.log('diaryData: ', diaryData);
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
            {COLUMN_DATA?.map((item) => {
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
