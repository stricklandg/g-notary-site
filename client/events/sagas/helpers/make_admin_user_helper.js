/**
 * Created by gregorydrake on 7/29/16.
 */
import { Meteor } from 'meteor/meteor';

export default function makeAdminUser(role) {
    Meteor.call('addAdminRoleToUser', role);

};