import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { SIGN_IN_USER_NEW_USER, SUCCESSFUL_LOGIN, UNSUCCESSFUL_LOGIN, CHECK_IF_ADMIN } from '../actions/types';
import { browserHistory } from 'react-router';
import signInUser from './helpers/sign_in_user_helper';
import setUserInLocalStorage from './helpers/setUserInLocalStorage';

function* signInNewUserSaga(action) {

    const results = yield call(signInUser, action.payload);
    if (!results) {
        //successful log in, make additional saga call to grab user data and send it to state
        yield put({type: SUCCESSFUL_LOGIN});
        yield call(setUserInLocalStorage, 'isUser', true);
        yield put({type: CHECK_IF_ADMIN});
        // - Redirect to the routes 'acsuccess'
        yield call(browserHistory.push, 'acsuccess')
    } else {
        yield put({type: UNSUCCESSFUL_LOGIN, payload: results})
    }

}

export default function* watchSignInNewUser() {
    yield takeEvery(SIGN_IN_USER_NEW_USER, signInNewUserSaga)
}