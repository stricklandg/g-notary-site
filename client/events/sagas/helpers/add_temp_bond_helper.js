/**
 * Created by gregorydrake on 8/3/16.
 */
import { Meteor } from 'meteor/meteor';

export default function addTempBond(data, sessionId, image) {
    var newStuff = Meteor.callPromise('writeToTempDB', data, sessionId, image);
    return newStuff.then(results => {
        return results;
    })

};