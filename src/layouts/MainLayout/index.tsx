import { BackTop, Layout } from 'antd';
import React, { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from 'src/components/common/Loading';
import { PATH } from 'src/routes/path';
import { RootState } from 'src/store';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import './styles.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = (props) => {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    if (!user) <Redirect to={PATH.LOGIN} />;
  }, [user]);

  if (loading) return <Loading />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header />
        <div className="site-layout-background site-layout-content">{props.children}</div>
        <Footer />
      </Layout>
      <BackTop />
    </Layout>
  );
};

export default memo(MainLayout);
