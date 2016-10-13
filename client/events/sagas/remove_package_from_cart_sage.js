/**
 * Created by gregorydrake on 8/28/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REMOVE_FROM_CART, REMOVE_PACKAGE_OR_BOND } from '../actions/types';
import {removeBondFromCartHelper} from './helpers/package_to_cart_helper';
import {removeFromCartHelper} from './helpers/remove_from_cart_helper';



function* removePackageOrBondFromCartSaga(action) {
    yield call(removeFromCartHelper, action);
    var deletePayload = yield call(removeBondFromCartHelper, action);

    yield put({type: REMOVE_FROM_CART, payload: deletePayload});

}

export default function* watchPackageOrBondToRemoveFromCart() {
    yield takeEvery(REMOVE_PACKAGE_OR_BOND, removePackageOrBondFromCartSaga)
}