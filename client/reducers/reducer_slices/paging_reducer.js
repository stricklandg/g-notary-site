/**
 * Created by gregorydrake on 8/2/16.
 */
import {PAGE_FORWARD, PAGE_BACK, PAGE_RESET} from '../../events/actions/types';

export default function(state = {number:1}, action) {
    var stateSpread = {...state};

    var stateSpreadNumber = stateSpread.number;
    var stateSpreadModified = stateSpreadNumber + 1;

    var stateSpreadNumber2 = stateSpread.number;
    var stateSpreadModified2 = stateSpreadNumber2 - 1;

    switch(action.type) {
        case PAGE_FORWARD:
            return {...state, number: stateSpreadModified};
        case PAGE_BACK:
            return { ...state, number: stateSpreadModified2 };
        case PAGE_RESET:
            return { ...state, number: 1};
        default:
            return state;
    }
}