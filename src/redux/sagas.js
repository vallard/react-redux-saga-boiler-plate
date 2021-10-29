import { all } from 'redux-saga/effects';
import slackSaga from './slack/saga';
import apiSaga from './api/saga';

export default function* rootSaga(getState: any): any {
    yield all([
        slackSaga(),
        apiSaga(),
    ]);
}