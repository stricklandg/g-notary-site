/**
 * Created by gregorydrake on 8/7/16.
 */

import { Meteor } from 'meteor/meteor';

export default function ccSuccessful(orderInCart) {

   var newStuff = Meteor.callPromise('writeToOrderDB', orderInCart);
    return newStuff.then(result => {
            return result
        }
    )



};