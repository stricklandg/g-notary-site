/**
 * Created by gregorydrake on 6/8/16.
 */
import { Mongo } from 'meteor/mongo';
const Orders = new Mongo.Collection('orders');


//Deny all client side writes to users
Orders.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});


Orders.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

export default Orders;
