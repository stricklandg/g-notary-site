/**
 * Created by gregorydrake on 9/14/16.
 */
import { Meteor } from 'meteor/meteor';

export default function addImageToDB(imageData) {
    var newStuff = Meteor.callPromise('writeImageToDB', imageData);
    return newStuff.then(results => {
        return results;
    })

};