/**
 * Created by gregorydrake on 8/13/16.
 */
import localforage from 'localforage';
import _ from 'lodash';

export default function removeFromCartHelper(action) {
    //regular remove from cart that only occurs in the cart

    var productEntity = null;
    var fullProduct = action.payload;
    var productId = action.payload.productId;
    //Check if the item has a tempBondId - it will if it is a package or bond product
    if (action.payload.hasOwnProperty('addInfo')) {
        if (_.isEmpty(action.payload.addInfo)) {

            productEntity = {productId}

        } else {
            var addInfo = action.payload.addInfo;
            productEntity = {productId, addInfo};}
    } else {
        productEntity = {productId}
    }
    var sessionIdValue = null;

    //Delete the specific entity from cache, since cache is just a giant array of productIds
    //It has no count
    try {
        async function removeFromLocalStorageHelper() {
            //action passed in is the payload with the new item to be changed on it

            await localforage.getItem("sessionID").then((value) => {
                sessionIdValue = value;
            });
            var newCartValue = null;
            await localforage.getItem('shoppingCart').then((value) => {


               var valueToReturn =_.cloneDeep(value);

               if (productEntity.hasOwnProperty('addInfo')) {

                    var indexValue = _.findIndex(value, {
                            'productId': `${productEntity.productId}`,
                            'addInfo': productEntity.addInfo
                        });

               valueToReturn.splice(indexValue, 1);

                } else {

                var indexValue = _.findIndex(value, {'productId': `${productEntity.productId}`});
               valueToReturn.splice(indexValue, 1);
                }

                newCartValue = valueToReturn
            }).catch((e) => {
                newCartValue = [productEntity];
            });

            await localforage.setItem('shoppingCart', newCartValue);
            await localforage.getItem('shoppingCart').then((value) => {
            });
        }

        removeFromLocalStorageHelper();

    } catch(err) {
    }


};