/**
 * Created by gregorydrake on 11/2/16.
 */
import {TRIGGER_LOADER, STOP_LOADER} from '../../events/actions/types';

export default function(state = {loader: false}, action) {
    switch(action.type) {
        case TRIGGER_LOADER:
            return { ...state, loader: false };
        case STOP_LOADER:
            return { ...state, loader: true};
        default:
            return state;
    }
}