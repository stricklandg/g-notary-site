/**
 * Created by gregorydrake on 8/3/16.
 */
import { Mongo } from 'meteor/mongo';
const TemporaryBonds = new Mongo.Collection('temporarybonds');

TemporaryBonds.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});


TemporaryBonds.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

export default TemporaryBonds;