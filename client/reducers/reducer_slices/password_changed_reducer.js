import {PASS_CHANGED, PASS_CHANGED_RESET} from '../../events/actions/types';

export default function(state = {value: false}, action) {
    switch(action.type) {
        case PASS_CHANGED:
            return { ...state, value: true };
        case PASS_CHANGED_RESET:
            return { ...state, value: false };
        default:
            return state;
    }
}