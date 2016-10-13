import { Mongo } from 'meteor/mongo';
const EOCoverage = new Mongo.Collection('eo');

//Deny all client side writes to users
EOCoverage.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});


EOCoverage.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

export default EOCoverage;