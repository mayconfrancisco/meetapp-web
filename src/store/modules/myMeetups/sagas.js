import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { myMeetupsSuccess, myMeetupsFailure } from './actions';

export function* getMyMeetups() {
  try {
    const { data } = yield call(api.get, '/organizing');

    yield put(myMeetupsSuccess(data));
  } catch (err) {
    console.tron.error(err);

    toast.error(
      'Erro ao carregar seus Meetups, verifique a conexão e tente novamente!',
    );
    yield put(myMeetupsFailure());
  }
}

export default all([takeLatest('@myMeetups/MY_MEETUPS_REQUEST', getMyMeetups)]);
