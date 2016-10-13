/**
 * Created by gregorydrake on 8/11/16.
 */
/**
 * Created by gregorydrake on 8/8/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ADD_PACKAGE, REMOVE_FROM_CART, ADD_TO_CART_SAGA, ADD_ORDER_WIZARD_DATA } from '../actions/types';
import { removeBondFromCartHelper, prepareBondForCartHelper } from './helpers/package_to_cart_helper'
import removeFromCartHelper from './helpers/remove_from_cart_helper';


function* addPackageToCartSaga(action) {

    var addPayload = yield call(prepareBondForCartHelper, action);

    yield put({type: ADD_TO_CART_SAGA, payload: addPayload});

    var deletePayload = yield call(removeBondFromCartHelper, action);

    yield put({type: REMOVE_FROM_CART, payload: deletePayload});

    yield put({type: ADD_ORDER_WIZARD_DATA, payload: {data: action.payload.orderFormValues, id: action.payload.tempBondId, formUploaded: action.payload.formUploaded}})

}

export default function* watchAddPackageToCart() {
    yield takeEvery(ADD_PACKAGE, addPackageToCartSaga);
}