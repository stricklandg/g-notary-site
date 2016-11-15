/**
 * Created by gregorydrake on 10/30/16.
 */
import {ADD_IMAGE_TO_STATE, REMOVE_IMAGE_FROM_STATE} from '../../events/actions/types';

export default function(state = {image: ""}, action) {
    switch(action.type) {
        case ADD_IMAGE_TO_STATE:
            return { ...state, image: action.payload };
        case REMOVE_IMAGE_FROM_STATE:
            return { ...state, image: ""};
        default:
            return state;
    }
}