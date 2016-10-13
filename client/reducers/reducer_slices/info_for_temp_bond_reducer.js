/**
 * Created by gregorydrake on 8/3/16.
 */
import _ from "lodash";
import {ADD_ORDER_WIZARD_DATA, ADD_PACKAGE_WIZARD_DATA} from '../../events/actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case ADD_ORDER_WIZARD_DATA:
            var newState = null;
            if(action.payload.data.packageChosen){
                newState = Object.assign({}, action.payload.data);
                _.unset(newState, 'packageChosen');
                newState['uploadForm'] = action.payload.formUploaded;
            } else {
                newState = Object.assign({}, action.payload.data);
                newState['uploadForm'] = action.payload.formUploaded;            }

            newState['id'] = action.payload.id;

            return newState;

        case ADD_PACKAGE_WIZARD_DATA:

           const newStateUnformatted = _.merge({}, action.payload, state);
           const FormatPackage = _.pick(newStateUnformatted, ['_id', 'price', 'name', 'type']);
            const preparedState = _.unset(newStateUnformatted, '_id');
            const preparedState2 = _.unset(newStateUnformatted, 'price');
            const preparedState3 = _.unset(newStateUnformatted, 'name');
            const preparedState4 = _.unset(newStateUnformatted, 'type');
            newStateUnformatted['packageChosen'] = FormatPackage;

           return newState = newStateUnformatted;
        default:
            return state;
    }
}