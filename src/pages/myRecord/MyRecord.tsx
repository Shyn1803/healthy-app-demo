import React, { useEffect, useState } from 'react';
import RecordComponent from 'src/components/recordComponent';
import { RECORD_GROUP_DATA } from 'src/utils/constants';
import LineChartComponent from 'src/components/lineChartComponent/LineChartComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setDiary, setInitDiary } from 'src/features/auth/authenticate';
import { getDiary } from 'src/api/userApi';
import { format } from 'date-fns';
import Loading from 'src/components/common/Loading';
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
  const diaryData = useSelector((state: any) => state.user.diary);

  const today = new Date();
  const month = (today.getMonth() + 1).toString().length === 1 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;

  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const fetchDiary = () => {
    setLoading(true);
    getDiary()
      .then((response) => {
        dispatch(setDiary(response));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const initDiary = () => {
    setLoading(true);
    getDiary()
      .then((response) => {
        dispatch(setInitDiary(response));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    initDiary();
  }, []);

  const onLoadMoreFood = () => {
    fetchDiary();
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
        <section className="section body-record">
          <LineChartComponent />
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
          <div className="diary-list-container">
            {isLoading && <Loading />}
            <div className="diary-list">
              {diaryData?.map((item: any, index: any) => {
                return (
                  <div className="diary-item-wrapper" key={index}>
                    <div className="date-time">
                      <span className="date">{format(new Date(item.dateTime), 'yyyy.MM.dd')}</span>
                      <span className="time">{format(new Date(item.dateTime), 'HH:mm')}</span>
                    </div>
                    <div className="content">
                      <div className="title">{item.title}</div>
                      <div className="note">{item.note}</div>
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyRecord;
