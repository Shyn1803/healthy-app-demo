import { Spin } from 'antd';
import React from 'react';
import './styles.scss';

function Loading() {
  return (
    <div className="global-loading-component">
      <Spin size="large" />
    </div>
  );
}

export default Loading;
