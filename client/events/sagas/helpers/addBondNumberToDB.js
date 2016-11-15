/**
 * Created by gregorydrake on 11/1/16.
 */
import { Meteor } from 'meteor/meteor';

export default function addBondNumbToDB(bondNumObject) {
    var newStuff = Meteor.callPromise('addBondNumberToOrder', bondNumObject);
    return newStuff.then(results => {
        return results;
    })

};