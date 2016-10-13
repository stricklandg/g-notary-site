/**
 * Created by gregorydrake on 9/19/16.
 */
/**
 * Created by gregorydrake on 6/15/16.
 */
import { Meteor } from 'meteor/meteor';

export default function sosBatchHelper() {

    var newStuff = Meteor.callPromise('pushToSOS');
    return newStuff.then(result => {
        }
    )


};