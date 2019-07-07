import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

import store from '../store';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!store.getState().signIn.auth ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}),
};

GuestRoute.defaultProps = {
  location: null,
};

export default GuestRoute;
