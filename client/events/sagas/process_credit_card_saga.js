/**
 * Created by gregorydrake on 8/30/16.
 */
import { takeEvery } from 'redux-saga';
import { call, put, cancel, take, fork } from 'redux-saga/effects';
import { PROCESS_CREDIT_CARD, CREDIT_CARD_SUCCESSFUL, CREDIT_CARD_UNSUCCESSFUL, CC_ERROR } from '../actions/types';
import { Meteor } from 'meteor/meteor';
import stringGen from '../../helper/randomStringGenerator';
import _ from 'lodash';

function processCreditCard(data) {
    const ccResults = Meteor.callPromise('chargeCreditCard', data.cc, data);
    return ccResults.then(value => {
        return value;
    })
}

function* processCreditCardSaga(action) {

    if (_.has(action.payload.cc.data, 'isCheck')) {


    copiedPayload = Object.assign({}, action.payload, {transId: stringGen(8)});
    yield  put({type: CREDIT_CARD_SUCCESSFUL, payload: copiedPayload});


    } else {

        const ccResults = yield call(processCreditCard, action.payload);
        if (ccResults) {
            if (ccResults.messages.resultCode !== "Error") {
                if (ccResults.transactionResponse.responseCode == "1") {
                    let id = ccResults.transactionResponse.transId;
                    copiedPayload = Object.assign({}, action.payload, {transId: id});
                    yield  put({type: CREDIT_CARD_SUCCESSFUL, payload: copiedPayload});
                } else {
                    yield put({type: CC_ERROR});
                    yield put({type: CREDIT_CARD_UNSUCCESSFUL, payload: action.payload});
                }
            } else {
                yield put({type: CC_ERROR});
                yield put({type: CREDIT_CARD_UNSUCCESSFUL, payload: action.payload});
            }
        }

    }

}

export default function* watchProcessCreditCard() {
    yield* takeEvery(PROCESS_CREDIT_CARD, processCreditCardSaga);
}

/*function* processCreditCardSaga(action) {
 //const ccResults = yield call(processCreditCard, action.payload);
 if (true) {
 if (true) {
 if (true) {
 copiedPayload = Object.assign({}, action.payload, {transId: 4000});
 yield  put({type: CREDIT_CARD_SUCCESSFUL, payload: copiedPayload});
 } else {
 yield put({type: CC_ERROR});
 yield put({type: CREDIT_CARD_UNSUCCESSFUL, payload: action.payload});
 }
 } else {
 yield put({type: CC_ERROR});
 yield put({type: CREDIT_CARD_UNSUCCESSFUL, payload: action.payload});
 }
 }
 } */

/* function* processCreditCardSaga(action) {
 const ccResults = yield call(processCreditCard, action.payload);
 if (ccResults) {
 if (ccResults.messages.resultCode !== "Error") {
 if (ccResults.transactionResponse.responseCode == "1") {
 let id = ccResults.transactionResponse.transId;
 copiedPayload = Object.assign({}, action.payload, {transId: id});
 yield  put({type: CREDIT_CARD_SUCCESSFUL, payload: copiedPayload});
 } else {
 yield put({type: CC_ERROR});
 yield put({type: CREDIT_CARD_UNSUCCESSFUL, payload: action.payload});
 }
 } else {
 yield put({type: CC_ERROR});
 yield put({type: CREDIT_CARD_UNSUCCESSFUL, payload: action.payload});
 }
 }
 }*/