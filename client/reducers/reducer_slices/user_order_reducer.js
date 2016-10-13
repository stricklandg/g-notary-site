/**
 * Created by gregorydrake on 9/6/16.
 */
export default function userOrderReducer(state = {}, action) {
    switch(action.type) {
        case 'METEOR_FETCH_DATA_orders':
            return { ...state, payload: action.data };
        default:
            return state;
    }
}