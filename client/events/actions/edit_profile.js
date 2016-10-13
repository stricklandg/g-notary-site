/**
 * Created by gregorydrake on 7/13/16.
 */
import {EDIT_PROFILE} from './types';

export function editProfile() {
    return {
        type: EDIT_PROFILE,
        editingProfile: true
    }
}