/**
 * Created by gregorydrake on 9/14/16.
 */
import {ADD_IMAGE_TO_DB} from '../actions/types';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import addImageToDB from './helpers/add_image_to_db_helper';


function* addImageToDBSaga(action) {
    const results = yield call(addImageToDB, action.payload);
    if (results) {
        //Eventually put a write was successful and then have the addToCart Initial Trigger from here
    }
}

export default function* watchAddImageToDB() {
    yield takeEvery(ADD_IMAGE_TO_DB, addImageToDBSaga)
}
