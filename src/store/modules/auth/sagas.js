import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { singInSuccess, signFailure } from '~/store/modules/auth/actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, '/sessions', {
      email,
      password,
    });

    yield put(singInSuccess(data.token, data.user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
    toast.error('Erro ao acessar, verifique seus dados!');
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
