/**
 * Created by gregorydrake on 7/13/16.
 */
import { Meteor } from 'meteor/meteor';

export default function doesUserExist(username) {
    if(Meteor.users.findOne({username: username})) {
        //the user does exist
        return true
    }
}