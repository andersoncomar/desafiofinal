import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

import store from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (store.getState().signIn.auth ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}),
};

PrivateRoute.defaultProps = {
  location: null,
};

export default PrivateRoute;
