import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';

import styles from './LineChartComponent.module.scss';

const CHART_DATA = {
  labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
  datasets: [
    {
      label: 'First dataset',
      data: [80, 77, 60, 67, 64, 54, 63, 52, 48, 46, 43, 46],
      fill: false,
      borderColor: '#FFCC21',
    },
    {
      label: 'Second dataset',
      data: [80, 73, 65, 54, 48, 42, 37, 35, 30, 22, 19, 15],
      fill: false,
      borderColor: '#8FE9D0',
    },
  ],
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const LineChartComponent: FC = () => {
  return (
    <div className={styles.lineChartComponentContainer}>
      <Line data={CHART_DATA} />
    </div>
  );
};

export default LineChartComponent;
