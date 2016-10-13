/**
 * Created by gregorydrake on 7/19/16.
 */
import {METEOR_FETCH_DATA} from '../../events/sagas/helpers/fetch_db_collection saga';

export default (state = {}, action) => {
    switch(action.type) {
        case METEOR_FETCH_DATA.concat("_packages"):
            return Object.assign({},
                action.data.reduce((obj, package) => {
                    obj[package._id] = package;
                    return obj
                }, {}));
        default:
            return state;
    }
}