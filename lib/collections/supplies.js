/**
 * Created by gregorydrake on 6/22/16.
 */
import { Mongo } from 'meteor/mongo';
const Supplies = new Mongo.Collection('supplies');
// Database security that prevent clientside writes

Supplies.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

Supplies.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
export default Supplies;