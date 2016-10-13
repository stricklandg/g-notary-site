/**
 * Created by gregorydrake on 9/15/16.
 */
import { Mongo } from 'meteor/mongo';
const FutureTasks = new Mongo.Collection('future_tasks');

// Database security that prevent client-side writes

FutureTasks.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

FutureTasks.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
export default FutureTasks;