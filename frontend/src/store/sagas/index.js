import { all, takeLatest } from 'redux-saga/effects';

import { Types as SignInTypes } from '../ducks/auth/signIn';

import { Types as OrdersTypes } from '../ducks/orders';

import { auth, signIn, signOut } from './auth/signIn';

import { loadOrders } from './orders';

export default function* rootSaga() {
  yield all([
    auth(),
    takeLatest(SignInTypes.REQUEST, signIn),
    takeLatest(SignInTypes.LOGOUT, signOut),

    takeLatest(OrdersTypes.LOAD_REQUEST, loadOrders),
  ]);
}
