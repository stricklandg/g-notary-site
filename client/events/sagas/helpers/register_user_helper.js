/**
 * Created by gregorydrake on 6/15/16.
 */
import { Meteor } from 'meteor/meteor';

export default function registerUser(user) {

            var newStuff = Meteor.callPromise('createUserAccount', user);
               return newStuff.then(result => {
                        return result
                    }
                )


};