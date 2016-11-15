/**
 * Created by gregorydrake on 8/3/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { ADD_TEMP_BOND, ADD_TO_CART_SAGA, ADD_IMAGE_TO_DB, STOP_LOADER } from '../actions/types';
import addTempBond from './helpers/add_temp_bond_helper';
import generateBondImage from './helpers/generate_bond_image';
var console = window.console || { log: function() {} };

function* addTempBondSaga(action) {
    const signatureData = action.payload.addInfo.signatureData;
    const mainData = action.payload.data;
    const results = yield call(addTempBond, action.payload.data, action.payload.sessionId);
    var uploadedImage = "";
    if (action.payload.addInfo.bondImage) {
        uploadedImage = action.payload.addInfo.bondImage;
    }

    if (results) {
        if (action.payload.data.uploadedForm == false) {

            if (signatureData !== "none") {

                var callResult = yield call(generateBondImage, mainData, signatureData);
                if (callResult) {
                    yield put({type: ADD_IMAGE_TO_DB, payload: { imageData: callResult, tempBond: mainData }});
                    yield put({type: STOP_LOADER});
                }
            }
            yield put({
                type: ADD_TO_CART_SAGA,
                payload: {productId: action.payload.addInfo.packageType, addInfo: {tempBondInfo: action.payload.data}}
            });
        } else {
            yield put({type: ADD_IMAGE_TO_DB, payload: {imageData: uploadedImage, tempBond: mainData}});
            yield put({type: STOP_LOADER});
            yield put({
                type: ADD_TO_CART_SAGA,
                payload: {productId: action.payload.addInfo.packageType, addInfo: {tempBondInfo: action.payload.data}}
            });
        }
    }
}

export default function* watchAddTempBond() {
    yield takeEvery(ADD_TEMP_BOND, addTempBondSaga)
}