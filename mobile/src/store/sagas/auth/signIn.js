import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import { Creators as SignInActions } from '../../ducks/auth/signIn';

export function* auth() {
  // yield call([AsyncStorage, 'clear']);

  const token = yield call([AsyncStorage, 'getItem'], '@pizzadonjuan:token');

  if (token) {
    yield put(SignInActions.signInSuccess(token));
  }
}

export function* signIn(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    yield call([AsyncStorage, 'setItem'], '@pizzadonjuan:token', response.data.token);

    if (token) {
      const user = yield call(api.post, 'userrule', { email });

      const { adm } = user.data;

      if (adm) {
        yield call([AsyncStorage, 'clear']);
        yield put(SignInActions.signInNotRule());
        yield put(ToastActionsCreators.displayError('O usuário não pode ser Administrador!'));
      } else {
        yield put(SignInActions.signInSuccess(response.data.token));
        navigation.navigate('Product');
      }
    }
  } catch (error) {
    yield put(SignInActions.signInFailure());
    yield put(ToastActionsCreators.displayError('Erro ao logar'));
  }
}
