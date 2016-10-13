/**
 * Created by gregorydrake on 6/15/16.
 */

import { REGISTER_USER } from './types'

export default function registerUser(newUser, resolve, reject) {
    return {
        type: REGISTER_USER,
        payload: newUser,
        meta: { resolve, reject}
    }
}