import React, { FC, ReactNode } from 'react';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import './styles.scss';

type Props = {
  children: ReactNode;
};

const GuestLayout: FC<Props> = (props) => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Header />
      <div className="site-layout-background site-layout-content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
