import {METEOR_FETCH_DATA} from '../../events/sagas/helpers/fetch_db_collection saga';

export function bySupplies(state = {}, action) {

    switch(action.type) {
        case METEOR_FETCH_DATA.concat('_supplies'):
                return Object.assign({},
                    action.data.reduce((obj, product) => {
                        obj[product._id] = product;
                        return obj
                    }, {}));
        default:
            return state;
    }
}

export function byEO(state={}, action) {
    switch(action.type) {
        case METEOR_FETCH_DATA.concat('_eo'):
            return Object.assign({},
                action.data.reduce((obj, product) => {
                    obj[product._id] = product;
                    return obj
                }, {}));
        default:
            return state;
    }
}