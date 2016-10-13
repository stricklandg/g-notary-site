/**
 * Created by gregorydrake on 7/29/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { MAKE_ADMIN_USER } from '../actions/types';
import makeAdminUser from './helpers/make_admin_user_helper';

function* makeAdminUserSaga(action) {
    yield call(makeAdminUser, action.payload);
}

export default function* watchMakeAdminUser() {
    yield takeEvery(MAKE_ADMIN_USER, makeAdminUserSaga)
}