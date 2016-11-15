/**
 * Created by gregorydrake on 11/1/16.
 */
import {ADD_BOND_NUM} from '../actions/types';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import addBondNumbToDB from './helpers/addBondNumberToDB';
var console = window.console || { log: function() {} };

function* addBondNumSaga(action) {
    const results = yield call(addBondNumbToDB, action.payload);
    if (results) {
        //Eventually put a write was successful and then have the addToCart Initial Trigger from here
    }
}

export default function* watchAddBondNumToDB() {
    yield takeEvery(ADD_BOND_NUM, addBondNumSaga)
}
