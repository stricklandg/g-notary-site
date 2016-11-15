/**
 * Created by gregorydrake on 10/27/16.
 */
/**
 * Created by gregorydrake on 9/21/16.
 */
import {SELECT_PACKAGE} from '../../events/actions/types';

export default function(state = {packageId: "none", type: "none"}, action) {
    switch(action.type) {
        case SELECT_PACKAGE:
            return { ...state, packageId: action.payload.packageId, type: action.payload.type };
        default:
            return state;
    }
}