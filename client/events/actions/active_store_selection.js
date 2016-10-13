/**
 * Created by gregorydrake on 7/21/16.
 */
import { ACTIVE_STORE_SELECTION } from './types'

export default function selectSingleStoreItem(item) {
    return {
        type: ACTIVE_STORE_SELECTION,
        payload: item
    }
}