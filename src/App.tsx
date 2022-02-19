import { Spin } from 'antd';
import React, { Suspense } from 'react';
import './App.scss';
import { Chart, registerables } from 'chart.js';
import { RootRouter } from './routes/index';

function App() {
  Chart.register(...registerables);

  console.log('hehe');
  return (
    <Suspense fallback={<Spin size="large" />}>
      <RootRouter />
    </Suspense>
  );
}

export default App;
