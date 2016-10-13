/**
 * Created by gregorydrake on 7/12/16.
 */
import { Meteor } from 'meteor/meteor';

export default function signInUser(user) {

    var wrappedLogIn = Meteor.wrapPromise(Meteor.loginWithPassword);
           var promise = wrappedLogIn(user.username, user.password);
            return promise.catch((error) => { return error })


};

export function checkIfAdmin() {
    var wrappedCheckIfAdmin = Meteor.callPromise('checkIfUserIsAdmin');
    return wrappedCheckIfAdmin.then((value) => {
        return value;
    });
}