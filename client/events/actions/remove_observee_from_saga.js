/**
 * Created by gregorydrake on 7/1/16.
 */

export default function removeObserveeFromSaga(observee) {
    return {
        type: 'REMOVE_OBSERVEE_FROM_SAGA',
        payload: observee
    }
}