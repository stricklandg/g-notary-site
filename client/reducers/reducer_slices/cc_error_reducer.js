/**
 * Created by gregorydrake on 9/9/16.
 */
import { CC_ERROR } from '../../events/actions/types'

var initialState = {error: false};

export default function(state=initialState, action){
    switch(action.type){
        case CC_ERROR:
            return { ...state, error: true};
        default:
            return state;
    }
}
