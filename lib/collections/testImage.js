/**
 * Created by gregorydrake on 9/20/16.
 */
import { Mongo } from 'meteor/mongo';
const TestImage = new Mongo.Collection('testImage');

// Database security that prevent client-side writes

TestImage.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

TestImage.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
export default TestImage;