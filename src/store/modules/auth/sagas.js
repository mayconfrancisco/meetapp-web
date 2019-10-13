import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { singInSuccess, signFailure } from '~/store/modules/auth/actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
    toast.error('Erro ao acessar, verifique seus dados!');
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = payload.auth.token;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
