/**
 * Created by gregorydrake on 8/14/16.
 */
import { createSelector } from 'reselect';
import _ from 'lodash';

//selectionURI = ownProps.params.id[1];
//selectionCategory = ownProps.params.id[0];

const getItemCategory = (state, ownProps) => state[ownProps.params.id[0]];
const getItem = (state, ownProps) => state[ownProps.params.id[0]][ownProps.params.id[1]];

export const getSelectedItemsContents = createSelector([getItemCategory, getItem], (category, item) => {
    return selectedObject = Object.assign({}, item, {category});
});