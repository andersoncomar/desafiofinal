import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { Creators as SignInActions } from '../../ducks/auth/signIn';

export function* auth() {
  const token = localStorage.getItem('@pizzadonjuan:token');

  if (token) {
    yield put(SignInActions.signInSuccess(token));
  }
}

export function* signIn(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    localStorage.setItem('@pizzadonjuan:token', token);

    const user = yield call(api.post, 'userrule', { email });

    const { adm } = user.data;

    if (!adm) {
      localStorage.removeItem('@pizzadonjuan:token');
      yield put(SignInActions.signInFailure());
      toast.error('O usuário precisa ser Administrador!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      yield put(SignInActions.signInSuccess(token));
    }

    yield put(push('/'));
  } catch (error) {
    yield put(SignInActions.signInFailure());
    toast.error('E-mail/Senha inválidos!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

export function* signOut() {
  try {
    localStorage.removeItem('@pizzadonjuan:token');

    yield put(push('/signin'));
  } catch (error) {
    toast.error('Ocorreu um erro!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
