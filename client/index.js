import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { ADD_TO_CART } from './events/actions/types';

import createStore from './store/createStore';
import routes from './components/routes';

import rootSaga from './events/sagas/root_saga';

import localforage from 'localforage';

import stringGen from './helper/randomStringGenerator';

export const sagaStoreObject = createStore();
const store = sagaStoreObject.store;

Meteor.startup(() => {

    sagaStoreObject.runSaga(rootSaga);

    var existValue = localforage.getItem('isUser');
    existValue.then((value) => {
        if (value == "true") {
            store.dispatch({type: 'SUCCESSFUL_LOGIN'});
            store.dispatch({type: 'CHECK_IF_ADMIN'});
        }
    });

    var existingCartValue = localforage.getItem('shoppingCart');
        existingCartValue.then((value) => {
        if(value) {
            value.forEach((value) => {
                if (value.addInfo == undefined) {
                    store.dispatch({type: ADD_TO_CART, payload: {addInfo: {}, productId: ""}});
                } else {
                    store.dispatch({type: ADD_TO_CART, payload: {addInfo: value.addInfo, productId: value.productId}})
                }
            })
        }
    });

    var existingSessionValue = localforage.getItem('sessionID');
    existingSessionValue.then((value) => {
        if (!value) {
            const randomID = stringGen(8);
            store.dispatch({type: 'SESSION_ID', _id: randomID});
        } else {
            store.dispatch({type: 'SESSION_ID', _id: value});
        }
    });

    render((
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>
    ), document.getElementById('html-rooter'));
});