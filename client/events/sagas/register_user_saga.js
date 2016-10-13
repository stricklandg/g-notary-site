import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REGISTER_USER, SIGN_IN_USER_NEW_USER, SIGN_UP_ERROR } from '../actions/types';
import registerUser from './helpers/register_user_helper';

function* registerUserSaga(action) {
    const results = yield call(registerUser, action.payload);
    if (results.error) {
        yield call(action.meta.reject, {type: SIGN_UP_ERROR, payload: results});
    } else {
        yield put({type: 'VALID_USER', payload: results});
        yield put({type: SIGN_IN_USER_NEW_USER, payload: action.payload});
    }
}

export default function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerUserSaga)
}