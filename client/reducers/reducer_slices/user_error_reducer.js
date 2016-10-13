
export default function(state = {}, action) {
    switch(action.type) {
        case 'VALID_USER':
            return { ...state, payload: action.payload };
        default:
            return state;
    }
}