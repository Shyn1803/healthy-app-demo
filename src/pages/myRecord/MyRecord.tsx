import React, { useEffect, useState } from 'react';
import RecordComponent from 'src/components/recordComponent';
import { RECORD_GROUP_DATA } from 'src/utils/constants';
import styles from './MyRecord.module.scss';

const EXERCISE_DATA = [
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
  {
    exerciseName: '家事全般（立位・軽い）',
    time: '10',
    energy: '26kcal',
  },
];

function MyRecord() {
  // const user = useSelector((state: any) => state.collapsed.isCollapsed);

  const today = new Date();
  const month = (today.getMonth() + 1).toString().length === 1 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
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
    <div className={styles.myRecordContainer}>
      <div className="container">
        <section className="section record-component-list-wrapper">
          {RECORD_GROUP_DATA?.map((item, index) => {
            return (
              <RecordComponent key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} />
            );
          })}
        </section>
        <section className="section my-exercise">
          <div className="section-header-wrapper">
            <div className="my-exercise-title">
              <span>MY</span>
              <span>EXERCISE</span>
            </div>
            <div className="date">
              {today.getFullYear()}.{month}.{today.getDate()}
            </div>
          </div>
          <div className="scroll-wrapper">
            {EXERCISE_DATA?.map((exercise, index) => {
              return (
                <div key={index} className="exercise-wrapper">
                  <div className="top">
                    <div className="exercise-name">{exercise.exerciseName}</div>
                    <div className="time">{exercise.time} min</div>
                  </div>
                  <div className="energy">{exercise.energy}</div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="section my-diary">
          <div className="my-diary-title">MY DIARY</div>
          <div className="diary-list">
            {diaryData?.map((item, index) => {
              console.log(item);
              return (
                <div className="diary-item-wrapper" key={index}>
                  <div className="date-time">
                    <span className="date">2021.05.21</span>
                    <span className="time">23:25</span>
                  </div>
                  <div className="content">
                    <div className="title">私の日記の記録が一部表示されます。</div>
                    <div className="content">
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                    </div>
                  </div>
                </div>
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

export default MyRecord;
