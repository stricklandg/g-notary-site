/**
 * Created by gregorydrake on 8/3/16.
 */
import {ADD_TEMP_BOND} from './types';

export function addTempBondToDB(data, sessionId, image) {
    return {
        type: ADD_TEMP_BOND,
        payload: {
            data: data,
            sessionId: sessionId,
            image: image
        }
    }
}