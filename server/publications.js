/**
 * Created by gregorydrake on 6/8/16.
 */
import { Meteor } from 'meteor/meteor';
import Orders from '../lib/collections/orders';
import ClientErrors from '../lib/collections/errors';
import Supplies from '../lib/collections/supplies';
import EOCoverage from '../lib/collections/eocoverage';
import Bonds from '../lib/collections/bonds';
import TemporaryBonds from '../lib/collections/temporarybonds';
import Packages from '../lib/collections/packages';

Meteor.publish('orders', function(options) {
    console.log(options);
    var currentUserId = this.userId;

    isAdmin = function(currentUserId){
        var result = false;
        if(currentUserId){
            if (Roles.userIsInRole(currentUserId, ['universal'] ,'rockstar')){
                result = true;
            }
        }
        return result;
    };

    if (isAdmin(currentUserId) == true) {
        return Orders.find(options.find, options.sort);
    } else {
        return Orders.find({"identity": currentUserId});
    }

});

Meteor.publish('errors', function() {
    return ClientErrors.find({});
});

Meteor.publish('supplies', function(){
    return Supplies.find({});
});

Meteor.publish('packages', function(){
    return Packages.find({});
});

//Meteor.publish('bonds', function(){
//    return Bonds.find({});
//});

Meteor.publish('temporarybonds', function(){
    return TemporaryBonds.find({});
});

Meteor.publish('eo', function(){
    return EOCoverage.find({});
});

//"time.ourtime": {$gte: new Date(options.filter)}