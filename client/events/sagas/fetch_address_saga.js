/**
 * Created by gregorydrake on 8/30/16.
 */
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, cancel, take, fork } from 'redux-saga/effects';
import { FETCH_ADDRESS_AUTOCOMPLETE, STORE_FETCHED_ADDRESS } from '../actions/types';
import { Meteor } from 'meteor/meteor';

//values = {values: {addsearch: ""}}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function fetchAddress(searchTerm) {
    const addressResults = Meteor.callPromise('searchGoogleAddress', searchTerm);
    return addressResults.then(value => {
           return value;
        })
}

function* fetchAddressSaga(action) {
    yield call(delay, 500);
    const valueAddress = yield call(fetchAddress, action.payload);
    const valueForReturn = valueAddress.predictions;

    yield  put({type: STORE_FETCHED_ADDRESS, payload: valueForReturn});
}

export default function* watchfetchAddressSaga() {
        yield* takeLatest(FETCH_ADDRESS_AUTOCOMPLETE, fetchAddressSaga);
}
