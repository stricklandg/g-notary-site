/**
 * Created by gregorydrake on 7/2/16.
 */
export default function addObserveeToSaga(observee) {
    return {
        type: 'ADD_OBSERVEE_TO_SAGA',
        payload: { observee: observee }
    }
}