import { Mongo } from 'meteor/mongo';
const OrderNumber = new Mongo.Collection('ordernumber');


//Deny all client side writes to users
OrderNumber.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});


OrderNumber.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

export default OrderNumber;
