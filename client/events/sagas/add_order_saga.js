/**
 * Created by gregorydrake on 6/11/16.
 */
import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';
import addOrderHelper from './helpers/add_order_helper';
import { ADD_ORDER } from '../actions/types';

function* addOrderSaga(action) {
    var reformatted = yield call(addOrderHelper, action.payload)
}

export default function* watchAddOrder() {
    yield* takeEvery(ADD_ORDER, addOrderSaga)
}