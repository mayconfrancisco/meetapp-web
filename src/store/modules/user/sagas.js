import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import {
  updateProfileSuccess,
  updateProfileFailure,
  addAccountFinished,
} from './actions';

import api from '~/services/api';

export function* updateProfileRequest({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const { data } = yield call(api.put, '/users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(data));
  } catch (err) {
    toast.error(
      'Erro ao atualizar usuário, verifique seus dados e conexão de rede!',
    );
    yield put(updateProfileFailure());
  }
}

export function* addAccount({ payload }) {
  try {
    yield call(api.post, '/users', payload.profile);

    toast.success(
      `Conta criada com sucesso! Bem vindo ${payload.profile.name}`,
    );

    history.push('/');
  } catch (err) {
    toast.error('Erro ao criar conta, verifique seus dados e conexão de rede');
  } finally {
    yield put(addAccountFinished());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
  takeLatest('@auth/ADD_ACCOUNT_REQUEST', addAccount),
]);
