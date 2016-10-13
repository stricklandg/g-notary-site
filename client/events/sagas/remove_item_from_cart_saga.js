/**
 * Created by gregorydrake on 8/13/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REMOVE_FROM_CART_SAGA, REMOVE_FROM_CART } from '../actions/types';
import removeFromCartHelper from './helpers/remove_from_cart_helper'

function* removeFromCartSaga(action) {
    yield call(removeFromCartHelper, action);

    yield put({type: REMOVE_FROM_CART, payload: action.payload});

}

export default function* watchRemoveFromCart() {
    yield takeEvery(REMOVE_FROM_CART_SAGA, removeFromCartSaga)
}