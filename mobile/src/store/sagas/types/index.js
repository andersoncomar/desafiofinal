import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import { Creators as TypeActions } from '../../ducks/types';
import { Creators as ProductActions } from '../../ducks/products';

export function* loadTypes(action) {
  try {
    const { product } = action.payload;

    const response = yield call(api.get, `products/${product.id}/types`);

    yield put(ProductActions.productSet(product));
    yield put(TypeActions.loadTypesSuccess(response.data));

    navigation.navigate('Type');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao carregar os tipos'));
  }
}
