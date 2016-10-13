/**
 * Created by gregorydrake on 7/29/16.
 */
import {MAKE_ADMIN_USER} from './types';

export default function makeAdminUser(role) {
    return {
        type: MAKE_ADMIN_USER,
        payload: role
    }
}