/**
 * Created by gregorydrake on 6/8/16.
 */
import { combineReducers } from 'redux';
import orderReducer from './reducer_slices/notary_list_reducer';
import { bySupplies as suppliesReducer } from './reducer_slices/products_reducer';
import { byEO as eoReducer } from './reducer_slices/products_reducer';
import userOrderReducer from './reducer_slices/user_order_reducer';
import cart from './reducer_slices/cart_reducer';
import sessionIdReducer from './reducer_slices/session_id_reducer';
import userErrorReducer from './reducer_slices/user_error_reducer';
import profileReducer from './reducer_slices/profile_reducer';
import packagesReducer from './reducer_slices/packages_reducer';
import storeSelectionReducer from './reducer_slices/store_selection_reducer';
import userSignInReducer from './reducer_slices/user_signin_reducer';
import signUpErrorReducer from './reducer_slices/sign_up_error_reducer';
import checkIfAdminReducer from './reducer_slices/check_if_admin_reducer';
import formSignatureReducer from './reducer_slices/form_signature_reducer';
import pagingReducer from './reducer_slices/paging_reducer';
import addressListReducer from './reducer_slices/address_search_reducer';
import {addressToLoadReducer} from './reducer_slices/address_search_reducer';
import infoForTempBondReducer from './reducer_slices/info_for_temp_bond_reducer';
import ccErrorReducer from './reducer_slices/cc_error_reducer';
import notaryTypeReducer from './reducer_slices/notary_type_reducer';
import grabSorters from './reducer_slices/admin_order_sorters_reducer';
import checkOutItemsReducer from './reducer_slices/checkout_items';
import revealReducer from './reducer_slices/revealed_reducer';

import{ reducer as formReducer } from 'redux-form';

const topLevelReducers = combineReducers({
    order: orderReducer,
    supplies: suppliesReducer,
    eo: eoReducer,
    form: formReducer,
    cart: cart,
    session: sessionIdReducer,
    profile: profileReducer,
    userError: userErrorReducer,
    packages: packagesReducer,
    storeSelection: storeSelectionReducer,
    signedIn: userSignInReducer,
    signUpError: signUpErrorReducer,
    administrator: checkIfAdminReducer,
    formSignature: formSignatureReducer,
    paging: pagingReducer,
    ccError: ccErrorReducer,
    addSearch: addressListReducer,
    addLoaded: addressToLoadReducer,
    ordersToView: userOrderReducer,
    checkoutItems: checkOutItemsReducer,
    notaryType: notaryTypeReducer,
    adminPageSorters: grabSorters,
    revealSelection: revealReducer,
    infoForTempBond: infoForTempBondReducer
});

const rootReducer = (state,action) => {
    if (action.type === 'CLEAR_STATE') {
       var payloadArray = action.payload;
        payloadArray.forEach((value) => {
            state[value] = {}
        })
    }
    return topLevelReducers(state, action)
};

export default rootReducer;