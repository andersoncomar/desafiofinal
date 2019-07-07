import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import signIn from './auth/signIn';
import signUp from './auth/signUp';

import products from './products';
import sizes from './sizes';
import types from './types';
import cart from './cart';
import orders from './orders';

export default combineReducers({
  toast,
  signIn,
  signUp,
  products,
  sizes,
  types,
  cart,
  orders,
});
