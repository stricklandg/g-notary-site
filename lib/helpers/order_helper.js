/**
 * Created by gregorydrake on 9/22/16.
 */
import {Meteor} from 'meteor/meteor';

var orders = {};

orders.timeSort = function (terms) {
    return {
        find: {},
        sort: {sort: { time: {ourtime: -1}, limit: terms.limit}}
    };
};

let queryConstructor = function (terms) {
    var orderFunction = orders[terms.orderName]
    var parameters = viewFunction(terms);

    if (parameters.limit > 100) {
        parameters.limit = 100
    }

    return parameters;
};


