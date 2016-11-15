/**
 * Created by gregorydrake on 11/11/16.
 */
import { PASS_CHANGED, PASS_CHANGED_RESET } from './types'

export default function passwordChanged() {
    return {
        type: PASS_CHANGED,
    }
}

export function resetPassChange() {
    return {
        type: PASS_CHANGED_RESET
    }
}