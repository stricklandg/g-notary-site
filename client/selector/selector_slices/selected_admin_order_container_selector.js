/**
 * Created by gregorydrake on 9/6/16.
 */
/**
 * Created by gregorydrake on 8/14/16.
 */
import { createSelector } from 'reselect';
import _ from 'lodash';

//selectionURI = ownProps.params.id[1];
//selectionCategory = ownProps.params.id[0];


const getOrder = (state, ownProps) => {
    var arrayOfState = state.ordersToView.payload;
    if (arrayOfState == undefined) {
        arrayOfState = []
    }
    var indexValue = _.findIndex(arrayOfState, {'orderNumber': {'orderNumber': parseInt(ownProps.params.id)}});
    if (arrayOfState == undefined || indexValue == -1) {
        return {}
    } else {
        return state.ordersToView.payload[indexValue]
    }
};

export const getSelectedOrderContents = createSelector([getOrder], (item) => {
    return selectedObject = Object.assign({}, item);
});