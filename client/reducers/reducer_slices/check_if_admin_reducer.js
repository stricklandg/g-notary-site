/**
 * Created by gregorydrake on 7/30/16.
 */
import { IS_ADMIN, IS_NOT_ADMIN } from '../../events/actions/types';

export default function(state = false, action) {
    switch(action.type) {
        case IS_ADMIN:
            return true ;
        case IS_NOT_ADMIN:
            return false ;
        default:
            return state;
    }
}