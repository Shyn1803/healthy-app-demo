import React, { FC, ReactNode } from 'react';
import './styles.scss';

type Props = {
  children: ReactNode;
};

const BlankLayout: FC<Props> = (props) => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div className="site-layout-background site-layout-content">{props.children}</div>
    </div>
  );
};

export default BlankLayout;
