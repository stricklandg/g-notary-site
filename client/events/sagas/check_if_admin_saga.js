import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { IS_ADMIN, IS_NOT_ADMIN, CHECK_IF_ADMIN } from '../actions/types';
import {checkIfAdmin} from './helpers/sign_in_user_helper';
import setUserInLocalStorage from './helpers/setUserInLocalStorage';

function* checkIfAdminSaga() {

    var isAdmin = yield call(checkIfAdmin);
    if (isAdmin === true) {
        yield put({type: IS_ADMIN});
        yield call(setUserInLocalStorage, 'isSuperHero', true);
    } else {
        yield put({type: IS_NOT_ADMIN});
    }
}

export default function* watchCheckIfAdmin() {
    yield takeEvery(CHECK_IF_ADMIN, checkIfAdminSaga)
}