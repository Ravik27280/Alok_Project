import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthenticated) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);

export default ProtectedRoute;
