/**
 * Created by gregorydrake on 8/3/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ADD_TEMP_BOND, ADD_TO_CART_SAGA } from '../actions/types';
import addTempBond from './helpers/add_temp_bond_helper';


function* addTempBondSaga(action) {
    const results = yield call(addTempBond, action.payload.data, action.payload.sessionId, action.payload.image);
    if (results) {
        //Eventually put a write was successful and then have the addToCart Initial Trigger from here
    }
}

export default function* watchAddTempBond() {
    yield takeEvery(ADD_TEMP_BOND, addTempBondSaga)
}