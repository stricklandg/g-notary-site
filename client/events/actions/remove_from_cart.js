/**
 * Created by gregorydrake on 8/11/16.
 */
import {REMOVE_FROM_CART} from './types';

export function removeFromCart(productId) {
    return {
        type: REMOVE_FROM_CART,
        payload: {productId}
    }
}