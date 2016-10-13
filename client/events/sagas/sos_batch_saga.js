/**
 * Created by gregorydrake on 9/19/16.
 */
/**
 * Created by gregorydrake on 8/7/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { SOS_BATCH } from '../actions/types';
import {browserHistory} from 'react-router';
import sosBatchHelper from './helpers/sos_batch_helper';


function* sosBatchSaga(action) {
    var results = yield call(sosBatchHelper);
    if (results) {
    } else {

    }
}

export default function* watchSOSBatchSaga() {
    yield takeEvery(SOS_BATCH, sosBatchSaga)
}