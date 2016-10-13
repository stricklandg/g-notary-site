/**
 * Created by gregorydrake on 7/12/16.
 */
export default function(state = {}, action) {
    switch(action.type) {
        case 'SESSION_ID':
            return { ...state, _id: action._id };
        default:
            return state;
    }
}