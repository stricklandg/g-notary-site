/**
 * Created by gregorydrake on 10/4/16.
 */
import { REVEALED } from './types'

export default function revealSelection(boolean) {
    return {
        type: REVEALED,
        payload: boolean
    }
}