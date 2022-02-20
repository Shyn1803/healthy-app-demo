import React from 'react';
import { Switch } from 'react-router-dom';
import GuestLayout from 'src/layouts/GuestLayout';
import BlankLayout from 'src/layouts/BlankLayout';
import MainLayout from 'src/layouts/MainLayout';
import Login from 'src/pages/auth/Login';
import Column from 'src/pages/column/Column';
import PageNotFound from 'src/pages/errors/PageNotFound';
import ServerError from 'src/pages/errors/ServerError';
import HomePage from 'src/pages/home/Home';
import MyRecord from 'src/pages/myRecord/MyRecord';
import { RouteLayout } from '../components/router/RouteLayout';
import { PATH } from './path';

export const RootRouter = React.memo(() => {
  return (
    <Switch>
      <RouteLayout path={PATH.LOGIN} component={Login} layout={BlankLayout} isPrivate={false} />
      <RouteLayout path={PATH.MY_RECORD} component={MyRecord} layout={MainLayout} />
      <RouteLayout path={PATH.COLUMN} component={Column} layout={GuestLayout} isPrivate={false} />

      <RouteLayout path={PATH.PAGE_404} component={PageNotFound} layout={GuestLayout} isPrivate={false} />
      <RouteLayout path={PATH.PAGE_500} component={ServerError} layout={GuestLayout} isPrivate={false} />

      <RouteLayout path={PATH.HOME} component={HomePage} layout={MainLayout} />
    </Switch>
  );
});
