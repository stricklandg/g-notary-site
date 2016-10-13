/**
 * Created by gregorydrake on 6/26/16.
 */
import {ADD_TO_CART_SAGA, REMOVE_FROM_CART_SAGA} from './types';

export function addToCart(product) {
    return {
        type: ADD_TO_CART_SAGA,
        payload: {productId: product.productId,
                    addInfo: product.addInfo}
    }
}

export function deleteFromCart(productId, addInfo, quantity) {
    return {
        type: REMOVE_FROM_CART_SAGA,
        payload: { productId, addInfo, quantity }
    }
}

//function addToCartUnsafe(productId) {
 //   return {
 //       type: ADD_TO_CART,
 //       productId
  //  }
//}

//export function addToCart(productId) {
 //   return (dispatch, getState) => {
 //       if (getState().products.byId[productId].inventory > 0) {
 //           dispatch(addToCartUnsafe(productId))
 //       }
 //   }
//}