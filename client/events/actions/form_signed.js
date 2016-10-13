import {FORM_SIGNED} from './types';

export function passPdf(dataUri) {
    return {
        type: FORM_SIGNED,
        payload: dataUri
    }
}
