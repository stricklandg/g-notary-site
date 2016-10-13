/**
 * Created by gregorydrake on 6/26/16.
 */
import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CREDIT_CARD_UNSUCCESSFUL,
    CHECKOUT_SUCCESS,
    CREDIT_CARD_SUCCESSFUL,
    REMOVE_FROM_CART
} from '../../events/actions/types';

import _ from 'lodash';

const initialState = {
    addedIds: {},
    quantityById: {},
    bondById: []
};

function addedIds(state = initialState.addedIds, action) {
    switch(action.type) {
        case ADD_TO_CART:
            const { payload } = action;
            var additionalInfo = null;
            if (!payload.addInfo) {
                additionalInfo = {}
            } else {
                const {addInfo} = payload;
                additionalInfo = addInfo;
                if (addInfo.tempBondInfo) {
                    additionalInfo = { [`${addInfo.tempBondInfo.id}`]: addInfo.tempBondInfo}
                }
            }
            if (_.has(state, payload.productId)) {
                var cloneDeepStateArray = _.cloneDeep(state[payload.productId]);

                var newArray = [...cloneDeepStateArray, additionalInfo];

                return Object.assign({}, state, {[payload.productId]: newArray});

            } else {

                arrayForObject = [];
                return Object.assign({}, state, {[payload.productId]: _.concat([], additionalInfo)});
            }

        case REMOVE_FROM_CART:
            var { payload } = action;
            var cloneState = _.cloneDeep(state);
            var quantityExisting = payload.quantity;
            if ((quantityExisting - 1) >= 0) {
                var valueOfStateSlice = cloneState[payload.productId];
                var valueOfIndex = null;

                if (!_.isEmpty(payload.addInfo)) {
                   var addedInfo = payload.addInfo;
                    valueOfIndex =_.findIndex(valueOfStateSlice, {...addedInfo});
                } else {
                    valueOfIndex = 0;
                }

                valueOfStateSlice.splice(valueOfIndex, 1);
            }

            if (_.isEmpty(cloneState[payload.productId])){
                _.unset(cloneState, [payload.productId]);
            }

           var stateToReturn = _.cloneDeep(cloneState);
            return Object.assign({}, stateToReturn);

        default:
            return state
    }
}

function quantityById(state = initialState.quantityById, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { payload } = action;
            return Object.assign({}, state, {
                [payload.productId]: (state[payload.productId] || 0) + 1
            });
        case REMOVE_FROM_CART:
            var { payload } = action;
               var quantityExisting = payload.quantity;
                var stateExistingQuantity = state;
               var quantitySliceFromState =  stateExistingQuantity[payload.productId];
            var cloneObject = null;
            if (quantitySliceFromState - 1 > 0){
                cloneObject = _.cloneDeep(state);

                cloneObject = Object.assign({}, cloneObject, {
                    [payload.productId]: (cloneObject[payload.productId] - 1)
                });

            } else {
                //Here is the problem area!  This is firing
                cloneObject = _.cloneDeep(state);

                delete cloneObject[`${payload.productId}`];

            }
           var returnableClone = _.cloneDeep(cloneObject);
            return Object.assign({}, returnableClone);

        default:
            return state
    }
}

export default function cart(state = initialState, action) {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return {
            addedIds: action.payload.cart.addedIds,
            quantityById: action.payload.cart.quantityById,
            total: action.payload.total,
            products: action.payload.products
            };
        case CREDIT_CARD_UNSUCCESSFUL:
            return {
            addedIds: action.payload.onSuccess.order.addedIds,
            quantityById: action.payload.onSuccess.order.quantityById,
            total: action.payload.onSuccess.cartTotals.cartTotal,
            products: action.payload.onSuccess.order.products,
        };
        case CHECKOUT_SUCCESS:
            return initialState;
        case CREDIT_CARD_SUCCESSFUL:
            return initialState;
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action),
            }
    }
}



//if productID is == to -1 we do 2 and three for state returns
//If we already have the productID,  then we won't return a negative 1 from indexOf
//so the if statement above says, if the productId exists in the array addedID, meaning
//it won't return -1 because it exists, than go ahead and just return the array

//{[variablename]: "d"}
//when something is in brackets it means that the property key is a computed property key

//Object.assign({}, state, {additional productID object}) this clones the object
//then it adds the additional object to this state object

//(state[productId] || 0) + 1 is basically saying look at quantityById object  and finding the product id property and
//if it has a number on it then add 1 to it, if it has no value say its zero and then add one