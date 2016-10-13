/**
 * Created by gregorydrake on 8/8/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ADD_TO_CART_SAGA, ADD_TO_CART } from '../actions/types';
import addToCartHelper from './helpers/add_to_cart_helper'

function* addItemToCartSaga(action) {
    yield call(addToCartHelper, action);

    yield put({type: ADD_TO_CART, payload: action.payload});

}

export default function* watchCart() {
    yield takeEvery(ADD_TO_CART_SAGA, addItemToCartSaga)
}