/**
 * Created by gregorydrake on 8/7/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { CREDIT_CARD_SUCCESSFUL } from '../actions/types';
import {browserHistory} from 'react-router';
import ccSuccessful from './helpers/credit_card_success_helper';
import clearCartCache from './helpers/clear_cart_cart';
import emailSuccess from './helpers/emailSuccess_helper';
import writeToBatchList from './helpers/write_to_batch';

function* creditCardSuccessfulSaga(action) {
    var results = yield call(ccSuccessful, action.payload);
    if (results.error) {
    } else {

        yield call(writeToBatchList, action.payload);

        yield call(browserHistory.push, 'ordersuccess');
        yield call(clearCartCache, 'shoppingCart');
        yield call(emailSuccess, action.payload, results);
    }
}

export default function* watchCreditCardSuccessful() {
    yield takeEvery(CREDIT_CARD_SUCCESSFUL, creditCardSuccessfulSaga)
}