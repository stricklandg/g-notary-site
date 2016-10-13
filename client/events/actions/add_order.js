/**
 * Created by gregorydrake on 6/11/16.
 */

import { ADD_ORDER } from './types'

export default function addOrder(order) {
    return {
        type: ADD_ORDER,
        payload: order
    }
}