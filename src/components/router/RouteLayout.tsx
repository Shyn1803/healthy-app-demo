import React from 'react';
// import { RouteProps } from 'react-router';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { useAuthenticatedByLocalStorage } from 'src/hooks/useAuthenticated';
import { PATH } from 'src/routes/path';

type Props = {
  layout: React.ComponentType<any>;
  isPrivate?: boolean;
  redirect?: string;
  component: React.ComponentType<RouteComponentProps> | React.ComponentType;
} & RouteProps;

export const RouteLayout: React.FC<Props> = ({
  layout: Layout,
  component: Component,
  isPrivate,
  redirect,
  ...props
}) => {
  const isAuthenticated = useAuthenticatedByLocalStorage();

  if (!isAuthenticated && isPrivate) return <Redirect to={redirect ?? PATH.LOGIN} />;

  return (
    <Route {...props}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default RouteLayout;

RouteLayout.defaultProps = {
  isPrivate: true,
};
