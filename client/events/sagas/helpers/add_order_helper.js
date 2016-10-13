/**
 * Created by gregorydrake on 10/4/16.
 */
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

export default function addOrderHelper(data) {

    var stateObject = data.state;
    var returnObject = {};
    var paymentObject = {};
    var isCredit = data.form.addorder.values.isCredit;
    if (isCredit == 'isCredit') {
        var number = data.form.addorder.values.ccnumber;
        var exp_month = data.form.addorder.values.exdatemonth;
        var exp_year = data.form.addorder.values.exdateyear;
        var cvc = data.form.addorder.values.CVC;
        paymentObject.cc = {number, exp_month, exp_year, cvc}
    }
    if (isCredit == 'isNotCredit') {
        var check_number = data.form.addorder.values.checknumber;
        paymentObject.check = {check_number};
    }
    var purchasedItems = data.form.addorderbody.values.inventory;
    var grabArrayOfItems = purchasedItems.map((value) => { return value.addedItem});
    var mappedAgainstState = grabArrayOfItems.map((value) => {
        return stateObject[_.findKey(stateObject, {'name': value})];
    });



    returnObject["isCredit"] = isCredit;
    returnObject["paymentObject"] = paymentObject;
    returnObject["totals"] = data.totals;
    returnObject["purchasedItems"] = purchasedItems;
;



    /*var newStuff = Meteor.callPromise('writeToTempDB', data, sessionId, image);
    return newStuff.then(results => {
        return results;
    }) */

};