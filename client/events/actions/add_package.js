/**
 * Created by gregorydrake on 8/11/16.
 */
/**
 * Created by gregorydrake on 6/26/16.
 */
import {ADD_PACKAGE} from './types';

export default function addPackageToCart(productId, cart, tempBondId, orderFormValues, reveal) {
    var formUploaded = null;
    if (reveal == true) {
        formUploaded = false
    } else {
        formUploaded = true
    }

    return {
        type: ADD_PACKAGE,
        payload: {productId, cart, tempBondId, orderFormValues, formUploaded}
    }
}