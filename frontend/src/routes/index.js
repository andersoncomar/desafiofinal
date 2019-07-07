import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Orders from '../pages/Orders';
import history from './history';

import Private from './private';
import Guest from './guest';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Private exact path="/" component={Orders} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
