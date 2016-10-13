/**
 * Created by gregorydrake on 6/26/16.
 */
import { CHECKOUT_REQUEST, CHECKOUT_REQUEST_ITEMS } from './types';

export function checkout(total, products) {
    return (dispatch, getState) => {
        const cart = getState().cart;
        dispatch({
            type: CHECKOUT_REQUEST,
            payload: { cart, total, products }
        });

        dispatch({
            type: CHECKOUT_REQUEST_ITEMS,
            payload: { cart, total, products }
        });

        //Below should be a dispatch for an asynchronous checkout function
   /*     shop.buyProducts(products, () => {
            dispatch({
                type: CHECKOUT_SUCCESS,
                cart
            });
            // Replace the line above with line below to rollback on failure:
            // dispatch({ type: types.CHECKOUT_FAILURE, cart })
        }) */
    }
}