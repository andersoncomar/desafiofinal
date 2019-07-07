import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import signIn from './auth/signIn';

import orders from './orders';

const reducers = history => combineReducers({
  router: connectRouter(history),
  signIn,
  orders,
});

export default reducers;
