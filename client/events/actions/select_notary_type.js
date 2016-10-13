/**
 * Created by gregorydrake on 9/21/16.
 */
import {NEW_NOTARY, RENEW_NOTARY} from './types';

export default function selectNotaryType(value) {
    switch (value) {
        case 1:
            return {
                type: RENEW_NOTARY,
                payload: value
            };
            break;
        case 0:
            return {
                type: NEW_NOTARY,
                payload: value

            };
            break;
        default:

    }


}