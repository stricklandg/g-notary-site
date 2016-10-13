/**
 * Created by gregorydrake on 7/26/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { SIGN_OUT_USER, UNSUCCESSFUL_LOGIN, IS_NOT_ADMIN } from '../actions/types';
import { browserHistory } from 'react-router';
import signOutUser from './helpers/sign_out_user_helper';
import setUserInLocalStorage from './helpers/setUserInLocalStorage';


function* signOutUserSaga() {

    const results = yield call(signOutUser);
    if (!results) {
        //successful log in, make additional saga call to grab user data and send it to state
        yield call(setUserInLocalStorage,'isUser', false);
        yield call(setUserInLocalStorage,'isSuperHero', false);
        // - Redirect to the routes 'home'
        yield put({ type: UNSUCCESSFUL_LOGIN});
        yield put({type: IS_NOT_ADMIN});
        yield call(browserHistory.push, '/')

    } else {
      //  yield put({type: UNSUCCESSFUL_LOGIN, payload: results})
    }

}

export default function* watchSignOutUser() {
    yield takeEvery(SIGN_OUT_USER, signOutUserSaga);
}