/**
 * Created by gregorydrake on 10/4/16.
 */
/**
 * Created by gregorydrake on 9/21/16.
 */
import {REVEALED} from '../../events/actions/types';

export default function(state = {value: true}, action) {
    switch(action.type) {
        case REVEALED:
            return { ...state, value: action.payload };
        default:
            return state;
    }
}