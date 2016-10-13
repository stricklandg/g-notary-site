/**
 * Created by gregorydrake on 9/21/16.
 */
import {RENEW_NOTARY, NEW_NOTARY} from '../../events/actions/types';

export default function(state = {value: 0}, action) {
    switch(action.type) {
        case RENEW_NOTARY:
            return { ...state, value: action.payload };
        case NEW_NOTARY:
            return { ...state, value: action.payload };
        default:
            return state;
    }
}