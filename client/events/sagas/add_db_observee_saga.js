import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';

import meteorDataSaga from './helpers/fetch_db_collection saga';

function* addObserveeToSaga(action) {
    yield call(meteorDataSaga, action.payload);

}

export default function* addDBObserveeSaga() {
    yield takeEvery('ADD_OBSERVEE_TO_SAGA', addObserveeToSaga);
}