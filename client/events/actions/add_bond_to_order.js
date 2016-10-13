/**
 * Created by gregorydrake on 8/28/16.
 */
import {ADD_TO_CART_SAGA} from './types';

export default function addInitialBondToCart(data) {

    return {
        type: ADD_TO_CART_SAGA,
        payload: { productId: '57d192eb8f66bc5d60ce82a8', addInfo: { tempBondInfo: data } }
    }
}