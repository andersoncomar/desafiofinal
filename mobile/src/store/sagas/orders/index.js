import { call, put, select } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import { Creators as CartActions } from '../../ducks/cart';
import { Creators as OrderActions } from '../../ducks/orders';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'userorders');
    yield put(OrderActions.loadOrdersSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao carregar os pedidos'));
  }
}

export function* addOrder(action) {
  const {
    observation, zip, street, number, neighborhood,
  } = action.payload;

  const cartItems = yield select(state => state.cart.data);
  const subTotal = yield select(state => state.cart.subTotal);

  yield call(api.post, 'orders', {
    observation,
    total: subTotal,
    zip,
    street,
    number,
    neighborhood,
    items: cartItems.map(item => ({
      product_id: item.product.id,
      type_id: item.productType.id,
      size_id: item.size.id,
    })),
  });

  yield put(OrderActions.addOrderSuccess());
  yield put(CartActions.updateCartSuccess([]));

  navigation.navigate('Product');

  yield put(ToastActionsCreators.displayInfo('Seu pedido foi realizado com sucesso'));
}
