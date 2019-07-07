import { all, takeLatest } from 'redux-saga/effects';

import { Types as SignInTypes } from '../ducks/auth/signIn';
import { Types as SignUpTypes } from '../ducks/auth/signUp';

import { Types as ProductsTypes } from '../ducks/products';
import { Types as SizesTypes } from '../ducks/sizes';
import { Types as TypesTypes } from '../ducks/types';
import { Types as CartTypes } from '../ducks/cart';
import { Types as OrdersTypes } from '../ducks/orders';

import { auth, signIn } from './auth/signIn';
import { signUp } from './auth/signUp';

import { loadProducts } from './products';
import { loadSizes } from './sizes';
import { loadTypes } from './types';
import { addItem, removeItem } from './cart';
import { loadOrders, addOrder } from './orders';

export default function* rootSaga() {
  yield all([
    auth(),
    takeLatest(SignInTypes.REQUEST, signIn),
    takeLatest(SignUpTypes.REQUEST, signUp),
    takeLatest(ProductsTypes.REQUEST, loadProducts),
    takeLatest(SizesTypes.REQUEST, loadSizes),
    takeLatest(TypesTypes.REQUEST, loadTypes),
    takeLatest(CartTypes.ADD_REQUEST, addItem),
    takeLatest(CartTypes.DELETE_REQUEST, removeItem),
    takeLatest(OrdersTypes.ADD_REQUEST, addOrder),
    takeLatest(OrdersTypes.LOAD_REQUEST, loadOrders),
  ]);
}
