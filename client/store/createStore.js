/**
 * Created by gregorydrake on 6/8/16.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers/rootReducer';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default () => {

    const store = createStore(rootReducers,
        applyMiddleware(thunk, sagaMiddleware)
    );

    return {
        store: store,
        runSaga: sagaMiddleware.run
    }
};