/**
 * Created by gregorydrake on 10/17/16.
 */
import { Mongo } from 'meteor/mongo';
const TempFutureTasks = new Mongo.Collection('temp_future_tasks');

// Database security that prevent client-side writes

TempFutureTasks.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

TempFutureTasks.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
export default TempFutureTasks;