import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { Creators as OrderActions } from '../../ducks/orders';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrderActions.loadOrdersSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao carregar os Pedidos!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
