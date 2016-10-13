import { SUCCESSFUL_LOGIN, UNSUCCESSFUL_LOGIN } from '../../events/actions/types';
const INITIAL_STATE = { signedIn: false };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SUCCESSFUL_LOGIN:
            return { ...state, signedIn: true };
        case UNSUCCESSFUL_LOGIN:
            return { ...state, signedIn: false, error: action.payload };
        default:
            return state;
    }
}