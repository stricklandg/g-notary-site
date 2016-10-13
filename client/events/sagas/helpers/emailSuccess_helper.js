/**
 * Created by gregorydrake on 9/8/16.
 */
import { Meteor } from 'meteor/meteor';

export default function emailSuccess(data, dbResults) {

    var newStuff = Meteor.callPromise('sendMail', data, dbResults);
    return newStuff.then(result => {
            return result
        }
    )



};