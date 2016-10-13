/**
 * Created by gregorydrake on 7/12/16.
 */
import { SIGN_IN_USER } from './types'

export default function signInUser(user) {
    return {
        type: SIGN_IN_USER,
        payload: user
    }
}