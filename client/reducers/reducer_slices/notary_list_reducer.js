/**
 * Created by gregorydrake on 6/8/16.
 */
import { FETCH_ORDERS, FETCH_ORDER, DELETE_ORDER } from '../../events/actions/types';
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_ORDERS:
            return { ...state, all: action.orders };
        case FETCH_ORDER:
            return { ...state, post: action.orders };
        case DELETE_ORDER:
            return { ...state, post: action.orders };
        default:
            return state;
    }
}