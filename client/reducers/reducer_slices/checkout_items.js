/**
 * Created by gregorydrake on 9/9/16.
 */
/**
 * Created by gregorydrake on 7/19/16.
 */
import {CHECKOUT_REQUEST_ITEMS} from '../../events/actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case CHECKOUT_REQUEST_ITEMS:
            var payload = action.payload;
            return Object.assign({}, payload);
        default:
            return state;
    }
}