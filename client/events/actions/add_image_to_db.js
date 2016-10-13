/**
 * Created by gregorydrake on 9/14/16.
 */
import {ADD_IMAGE_TO_DB} from './types';

export default function addImageToDB(imageData, tempId) {
    return {
        type: ADD_IMAGE_TO_DB,
            payload: { imageData, tempId }
    }
}