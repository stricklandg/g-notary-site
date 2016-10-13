/**
 * Created by gregorydrake on 8/8/16.
 */

import { CLEAR_STATE } from './types'

export default function clearState(stateArray) {
    return {
        type: CLEAR_STATE,
        payload: stateArray
    }
}