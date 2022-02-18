import React from 'react';
import { Switch } from 'react-router-dom';
import GuestLayout from 'src/layouts/GuestLayout';
import MainLayout from 'src/layouts/MainLayout';
import Login from 'src/pages/auth/Login';
import Column from 'src/pages/Column';
import PageNotFound from 'src/pages/errors/PageNotFound';
import ServerError from 'src/pages/errors/ServerError';
import HomePage from 'src/pages/home/Home';
import MyRecord from 'src/pages/MyRecord';
import { RouteLayout } from '../components/router/RouteLayout';
import { PATH } from './path';

export const RootRouter = React.memo(() => {
  return (
    <Switch>
      <RouteLayout path={PATH.LOGIN} component={Login} layout={GuestLayout} isPrivate={false} />
      <RouteLayout path={PATH.MY_RECORD} component={MyRecord} layout={MainLayout} />
      <RouteLayout path={PATH.COLUMN} component={Column} layout={GuestLayout} isPrivate={false} />

      <RouteLayout path={PATH.PAGE_404} component={PageNotFound} layout={GuestLayout} isPrivate={false} />
      <RouteLayout path={PATH.PAGE_500} component={ServerError} layout={GuestLayout} isPrivate={false} />
      <RouteLayout path="*" component={PageNotFound} layout={GuestLayout} isPrivate={false} />

      <RouteLayout path={PATH.HOME} component={HomePage} layout={MainLayout} />
    </Switch>
  );
});
