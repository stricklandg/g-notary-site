/**
 * Created by gregorydrake on 8/3/16.
 */
import {ADD_TEMP_BOND} from './types';

export function addTempBondToDB(bondInfo, sessionId, addInfo) {
    return {
        type: ADD_TEMP_BOND,
        payload: {
            data: bondInfo,
            sessionId: sessionId,
            addInfo: addInfo,
        }
    }
}