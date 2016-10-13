/**
 * Created by gregorydrake on 7/18/16.
 */
import { Mongo } from 'meteor/mongo';
const Packages = new Mongo.Collection('packages');

//Deny all client side writes to users
Packages.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});


Packages.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

export default Packages;