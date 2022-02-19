import { BackTop, Col, Layout, Row } from 'antd';
import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from 'src/components/common/Loading';
// import { getMe } from 'src/features/auth/authenticate';
import { setIsCollapsed } from 'src/features/collapsedMenu/collapsedMenu';
import { PATH } from 'src/routes/path';
import { RootState } from 'src/store';
import BreadcrumbMenu from './Breadcrumb';
import Header from 'src/components/header';

const { Content } = Layout;
type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = (props) => {
  const collapsed = useSelector((state: RootState) => state.collapsed.isCollapsed);
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  const handleCollapse = () => {
    dispatch(setIsCollapsed());
  };

  useEffect(() => {
    if (!user) <Redirect to={PATH.LOGIN} />;
  }, [user]);

  if (loading) return <Loading />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header />
        <div className="site-layout-background site-layout-content">{props.children}</div>
      </Layout>
      <BackTop />
    </Layout>
  );
};

export default memo(MainLayout);
