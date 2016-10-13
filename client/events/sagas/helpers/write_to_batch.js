/**
 * Created by gregorydrake on 9/19/16.
 */
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

export default function writeToBatchList(payload) {

    let products = payload.onSuccess.order.products;

    let arrayOfItems = products.map(value => {

            if (_.has(value[0], "type")) {
                if (value.length > 1) {
                   return value.map((value) => {
                        return value;
                    })
                } else {
                    return value[0]
                }
            } else {
                return null
            }


    });

   bondsInOrder = _.without(arrayOfItems, null);

    if (bondsInOrder.length < 1) {
        //do nothing
    } else {
        infoToWrite = {bonds: bondsInOrder, transId: payload.transId};
        
        var newStuff = Meteor.callPromise('writeToBatchList', infoToWrite);
        newStuff.then(result => {
            }
        )
    }


};