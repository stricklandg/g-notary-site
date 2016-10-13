import { Meteor } from 'meteor/meteor';

export default function signOutUser() {

    var wrappedSignOut = Meteor.wrapPromise(Meteor.logout);
        var promise = wrappedSignOut();

    return promise.catch((error) => { return error })

};