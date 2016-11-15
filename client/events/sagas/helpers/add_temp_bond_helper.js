/**
 * Created by gregorydrake on 8/3/16.
 */
import { Meteor } from 'meteor/meteor';

export default function addTempBond(data, sessionId) {
    var newStuff = Meteor.callPromise('writeToTempDB', data, sessionId);
    return newStuff.then(results => {
        return results;
    })

};