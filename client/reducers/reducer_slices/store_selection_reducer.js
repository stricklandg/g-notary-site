import {ACTIVE_STORE_SELECTION} from '../../events/actions/types';

function storeSelectionReducer(state = {}, action) {
    switch(action.type) {
        case ACTIVE_STORE_SELECTION:
            return { ...state, ...action.payload };
        default:
            return state
    }
}

export default storeSelectionReducer;