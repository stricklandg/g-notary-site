import {SIGN_UP_ERROR} from '../../events/actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case SIGN_UP_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}