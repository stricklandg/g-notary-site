/**
 * Created by gregorydrake on 8/30/16.
 */
import { FETCH_ADDRESS_AUTOCOMPLETE, CLEAR_FETCHED_ADDRESS } from './types'

export default function fetchAddressAutoComplete(values) {
    return {
        type: FETCH_ADDRESS_AUTOCOMPLETE,
        payload: values
    }
}

export function addressToLoad(value) {
    return {
        type: LOAD_ADDRESS,
        payload: value
    }
}

export function clearAddressList() {
    return {
        type: CLEAR_FETCHED_ADDRESS,
    }
}