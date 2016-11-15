/**
 * Created by gregorydrake on 10/28/16.
 */
/**
 * Created by gregorydrake on 9/14/16.
 */
import {CONVERT_FORM_TO_IMAGE} from './types';

export default function convertFormToImage(imageData, tempBond) {
    return {
        type: CONVERT_FORM_TO_IMAGE,
        payload: { imageData, tempBond }
    }
}