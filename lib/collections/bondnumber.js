/**
 * Created by gregorydrake on 9/20/16.
 */
import { Mongo } from 'meteor/mongo';
const BondNumber = new Mongo.Collection('bondnumber');

// Database security that prevent client-side writes

BondNumber.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

BondNumber.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
export default BondNumber;