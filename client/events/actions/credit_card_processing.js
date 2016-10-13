/**
 * Created by gregorydrake on 8/7/16.
 */

import { CREDIT_CARD_SUCCESSFUL, PROCESS_CREDIT_CARD } from './types'

export default function creditCardProcessing(order, orderTime, cartTotals, address) {
    return {
        type: CREDIT_CARD_SUCCESSFUL,
        payload: {order, orderTime, cartTotals, address}
    }
}

export function authorizeProcessing(data, total, onSuccess, address) {
    return {
        type: PROCESS_CREDIT_CARD,
        payload: {cc: {data, total}, onSuccess, address}
    }
}