/**
 * Created by gregorydrake on 9/3/16.
 */
import {
    STORE_FETCHED_ADDRESS,
    CLEAR_FETCHED_ADDRESS,
    LOAD_ADDRESS,
} from '../../events/actions/types';

export default function addressListReducer(state = {}, action) {
    switch(action.type) {
        case STORE_FETCHED_ADDRESS:
            const { payload } = action;
            var addressList = null;
            if (payload == null || !payload) {
                addressList = []
            } else {
                addressList = payload;
            }
            var addressListObject = addressList.reduce((obj, product) => {  obj[product.place_id] = { description: product.description, terms: product.terms, id: product.id};
            return obj}, {});

            return addressListObject;

        case CLEAR_FETCHED_ADDRESS:
            return {};
        default:
            return state
    }
}

const initialLoad = {
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    driverlicense: "",
    issuingstate: "",
}
export function addressToLoadReducer(state=initialLoad, action) {
    switch (action.type) {
        case LOAD_ADDRESS:
            return {
                address: action.payload
            };
        default:
            return state
    }
}