/**
 * Created by gregorydrake on 8/8/16.
 */
import localforage from 'localforage';
import _ from 'lodash';

export default function addToCartHelper(action) {

    var productEntity = null;

    var productId = action.payload.productId;
    if (action.payload.hasOwnProperty('addInfo')) {
        var additionalInfo = action.payload.addInfo;
        if (additionalInfo == undefined) {
            additionalInfo = {}
        }
        productEntity = {productId, addInfo: additionalInfo};

    } else {
        productEntity = {productId};

    }
    var sessionIdValue = null;

    try {
        async function addToLocalStorageHelper() {
            await localforage.getItem("sessionID").then((value) => {
               sessionIdValue = value;
            });
            var itemToAdd = null;
            await localforage.getItem('shoppingCart').then((value) => {

                value.push(productEntity);
                itemToAdd = value;

            }).catch((e) => {
                itemToAdd = [productEntity];
            });



            await localforage.setItem('shoppingCart', itemToAdd);
            await localforage.getItem('shoppingCart').then((value) => {
                if (action.payload.package) {
                    var indexToRemove =_.findIndex(value, {'addInfo': {'tempBondInfo' : {'id': `${action.payload.addInfo.tempBondInfo.id}`}}});
                    value.splice(indexToRemove, 1);
                    localforage.setItem('shoppingCart', value);
                } else { }
            });
        }

        addToLocalStorageHelper();



    } catch(err) {

    }


};