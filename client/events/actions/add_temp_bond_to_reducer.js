/**
 * Created by gregorydrake on 8/3/16.
 */
import {ADD_ORDER_WIZARD_DATA, ADD_PACKAGE_WIZARD_DATA} from './types';

export function addPackageWizardData(data) {
    return {
        type: ADD_PACKAGE_WIZARD_DATA,
        payload: data
    }
}


export function addOrderWizardData(data, id, revealSig) {
    var formUploaded = null;
    if (revealSig == true) {
        formUploaded = false
    } else {
        formUploaded = true
    }
    return {
        type: ADD_ORDER_WIZARD_DATA,
        payload: {data, id, formUploaded}
    }
}