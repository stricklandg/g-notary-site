/**
 * Created by gregorydrake on 7/12/16.
 */
import {Meteor} from 'meteor/meteor';

const mUsers = Meteor.users;

//Deny all client side writes to users
mUsers.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});


mUsers.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});