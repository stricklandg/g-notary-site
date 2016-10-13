/**
 * Created by gregorydrake on 8/28/16.
 */
import {REMOVE_PACKAGE_OR_BOND} from './types';

export default function removePackageOrBond(cart, tempBondId) {

    return {
        type: REMOVE_PACKAGE_OR_BOND,
        payload: {cart, tempBondId}
    }
}