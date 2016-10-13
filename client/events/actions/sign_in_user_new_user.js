import { SIGN_IN_USER_NEW_USER } from './types'

export default function signInUserNewUser(user) {
    return {
        type: SIGN_IN_USER_NEW_USER,
        payload: user
    }
}