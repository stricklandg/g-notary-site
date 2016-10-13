/**
 * Created by gregorydrake on 7/12/16.
 */
import {METEOR_FETCH_DATA} from '../../events/sagas/helpers/fetch_db_collection saga';

export default function(state = {}, action) {
    switch(action.type) {
        case METEOR_FETCH_DATA.concat("_users"):
                return Object.assign({},
                    action.data.reduce((obj, user) => {
                        obj[user._id] = user;
                        return obj
                    }, {}));
        default:
            return state;
    }
}