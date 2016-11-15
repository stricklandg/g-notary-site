/**
 * Created by gregorydrake on 10/30/16.
 */
import { ADD_IMAGE_TO_STATE, REMOVE_IMAGE_FROM_STATE } from './types'

export default function addUpImageToState(uploadedImage) {
    return {
        type: ADD_IMAGE_TO_STATE,
        payload: uploadedImage
    }
}

export function clearImageFromState() {
    return {
        type: REMOVE_IMAGE_FROM_STATE
    }
}