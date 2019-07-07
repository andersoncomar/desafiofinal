import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '~/services/api';
import navigation from '~/services/navigation';

import { Creators as SignUpActions } from '../../ducks/auth/signUp';

export function* signUp(action) {
  try {
    const { username, email, password } = action.payload;

    yield call(api.post, 'users', {
      username,
      email,
      password,
    });

    const response = yield call(api.post, 'sessions', { email, password });

    yield call([AsyncStorage, 'setItem'], '@pizzadonjuan:token', response.data.token);

    yield put(SignUpActions.signUpSuccess(response.data.token));

    navigation.navigate('Product');
  } catch (error) {
    yield put(ToastActionsCreators.displayError('Erro ao cadastrar Usuário'));
  }
}
