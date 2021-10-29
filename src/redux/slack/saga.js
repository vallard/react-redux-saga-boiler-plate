import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import slack from './api';


import {
  SEND_SLACK,
} from './constants';


import {
  slackSent,
  slackError,
} from './actions';

function* sendSlack({ message }) {

  try {
    yield call(slack.send, {
      msg: message,
    });
    yield put(slackSent());
  } catch (err) {
    yield put(slackError(err));
  }
}

export function* watchSlack() {
  yield takeEvery(SEND_SLACK, sendSlack);
}

function* slackSaga(): any {
  yield all([
    fork(watchSlack),
  ]);
}

export default slackSaga;