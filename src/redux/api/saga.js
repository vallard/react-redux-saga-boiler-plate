import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from './api';


import {
    FETCH_USERS,
    CREATE_USERS,
} from './constants';


import {
    gotResponse,
    apiError,
} from './actions';

function* getUsers() {
    try {
        const response = yield call(api.get, {
            path: "users",
        });

        yield put(gotResponse(FETCH_USERS, response.users))
    } catch (err) {
        yield put(apiError(err));
    }
}

function* createUsers({ qty }) {
    try {
        yield call(api.create, {
            path: "users",
            qty: qty
        });

        yield all([
            call(getUsers),
        ]);
    } catch (err) {
        yield put(apiError(err));
    }
}

export function* watchAPIActions() {
    yield takeEvery(FETCH_USERS, getUsers);
    yield takeEvery(CREATE_USERS, createUsers);
}

function* apiSaga(): any {
    yield all([
        fork(watchAPIActions),
    ]);
}

export default apiSaga;
