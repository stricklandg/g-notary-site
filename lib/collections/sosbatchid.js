/**
 * Created by gregorydrake on 9/20/16.
 */
import { Mongo } from 'meteor/mongo';
const BatchId = new Mongo.Collection('batchid');


//Deny all client side writes to users
BatchId.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});


BatchId.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

export default BatchId;