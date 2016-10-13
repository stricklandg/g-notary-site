/**
 * Created by gregorydrake on 8/8/16.
 */
import localforage from 'localforage';
import _ from 'lodash';

export function prepareBondForCartHelper(action) {
    const {cart, productId, tempBondId} = action.payload;
    const id = productId.id;
    const cartAddedIds = cart.addedIds;

     //= _.hasIn(object,path);
    var objectKeys = _.keysIn(cartAddedIds);
    var indexPath = -1;
    var keyPath = undefined;



            objectKeys.some(value => {
            keyPath = value;
            indexPath = _.findIndex(cartAddedIds[keyPath], function(objectInArray) { return objectInArray[tempBondId] })
            return !(indexPath == -1)
        });

    var objectForTransfer = cartAddedIds[keyPath][indexPath];

    return cartObject = {productId: id, addInfo: {tempBondInfo: objectForTransfer[tempBondId] }, package: 'true' }

}

export function removeBondFromCartHelper(action) {
    const {cart, tempBondId} = action.payload;
    const cartAddedIds = cart.addedIds;

    //= _.hasIn(object,path);
    var objectKeys = _.keysIn(cartAddedIds);
    var indexPath = -1;
    var keyPath = undefined;



    objectKeys.some(value => {
        keyPath = value;
        indexPath = _.findIndex(cartAddedIds[keyPath], function(objectInArray) { return objectInArray[tempBondId] })
        return !(indexPath == -1)
    });




    return {addInfo: {tempBondId}, productId: `${keyPath}`, quantity: 1};

};
