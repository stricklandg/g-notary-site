/**
 * Created by gregorydrake on 7/30/16.
 */
import { FORM_SIGNED } from '../../events/actions/types'

export default function(state={}, action){
    switch(action.type){
        case FORM_SIGNED:
            return { ...state, pdf: action.payload}
    }

    return state;
}
