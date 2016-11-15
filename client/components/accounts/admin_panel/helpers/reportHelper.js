/**
 * Created by gregorydrake on 10/17/16.
 */
import _ from 'lodash';
import eOSwitcher from './E&OSwitcher';
import {eOSwitcherValue} from './E&OSwitcher';
import supplyPriceSwitcher from './supplyPriceSwitcher';
import supplySwitch from './supplySwitcher';

var json2csv = require('json2csv');
var moment = require('moment-timezone');
var FileSaver = require('file-saver');


export default function produceReport(orders) {
    const ordersArray = orders.payload;
    var arrayForCSV = [];
    var fields = ['Order #', 'Bond #', 'Bond Prem', 'Filing Fee', 'E&O Total', 'Supply Price', 'Tax', 'Shipping', 'Order Total', 'Pmt Amount REC IIU'];

    ordersArray.forEach(value => {

        objectForCSVArray = {};
        const orderNumber = value.orderNumber.orderNumber;
        objectForCSVArray["Order #"] = orderNumber;

        value.products.forEach(productsArray => {
            productsArray.forEach(value => {

            var bondNumber = "BN-Not-Assigned";
            if (_.has(_.values(value.extraInfo)[0], 'bondNumber')) {
                bondNumber = _.values(value.extraInfo)[0]['bondNumber'];
            }

            if (_.hasIn(objectForCSVArray, "Bond #")) {

                if (_.hasIn(value, "type")) {
                    const existingValue = objectForCSVArray["Bond #"];
                    objectForCSVArray["Bond #"] = existingValue.concat(`, ${bondNumber}`);
                } else {
                    const existingValue = objectForCSVArray["Bond #"];
                    objectForCSVArray["Bond #"] = existingValue.concat(", Supp");
                }

            } else {
                if (_.hasIn(value, "type")) {
                    objectForCSVArray["Bond #"] = `${bondNumber}`;
                } else {
                    objectForCSVArray["Bond #"] = "Supp";
                }
            }

            })
        });

        value.products.forEach(productsArray => {
            productsArray.forEach(value => {

                if (_.hasIn(objectForCSVArray, "Bond Prem")) {

                    if (_.hasIn(value, "type")) {
                        const existingValue = objectForCSVArray["Bond Prem"];
                        objectForCSVArray["Bond Prem"] = existingValue + 50.00
                    } else {
                        const existingValue = objectForCSVArray["Bond Prem"];
                        objectForCSVArray["Bond Prem"] = existingValue + 0
                    }

                } else {
                    if (_.hasIn(value, "type")) {
                        objectForCSVArray["Bond Prem"] = 50;
                    } else {
                        objectForCSVArray["Bond Prem"] = 0;
                    }
                }

            })
        });

        value.products.forEach(productsArray => {
            productsArray.forEach(value => {

                if (_.hasIn(objectForCSVArray, "Filing Fee")) {

                    if (_.hasIn(value, "type")) {
                        const existingValue = objectForCSVArray["Filing Fee"];
                        objectForCSVArray["Filing Fee"] = existingValue + 21.00
                    } else {
                        const existingValue = objectForCSVArray["Filing Fee"];
                        objectForCSVArray["Filing Fee"] = existingValue + 0
                    }

                } else {
                    if (_.hasIn(value, "type")) {
                        objectForCSVArray["Filing Fee"] = 21;
                    } else {
                        objectForCSVArray["Filing Fee"] = 0;
                    }
                }

            })
        });

        value.products.forEach(productsArray => {
            productsArray.forEach(value => {

                if (_.hasIn(objectForCSVArray, "E&O Total")) {

                    if (eOSwitcher(value)) {
                        const existingValue = objectForCSVArray["E&O Total"];
                        objectForCSVArray["E&O Total"] = existingValue + eOSwitcherValue(value);
                    } else {
                        const existingValue = objectForCSVArray["E&O Total"];
                        objectForCSVArray["E&O Total"] = existingValue + 0;
                    }

                } else {
                    if (eOSwitcher(value)) {
                        objectForCSVArray["E&O Total"] = eOSwitcherValue(value);
                    } else {
                        objectForCSVArray["E&O Total"] = 0
                    }
                }

            })
        });

        value.products.forEach(productsArray => {
            productsArray.forEach(value => {
                if (_.hasIn(objectForCSVArray, "Supply Price")) {


                    if (supplySwitch(value)) {
                        const existingValue = objectForCSVArray["Supply Price"];
                        objectForCSVArray["Supply Price"] = existingValue + (value.quantity * parseFloat(supplyPriceSwitcher(value)));
                    } else {
                        const existingValue = objectForCSVArray["Supply Price"];
                        objectForCSVArray["Supply Price"] = existingValue + 0.00;
                    }

                } else {
                    if (supplySwitch(value)) {
                        objectForCSVArray["Supply Price"] = (value.quantity * parseFloat(supplyPriceSwitcher(value)));
                    } else {
                        objectForCSVArray["Supply Price"] = 0.00;
                    }
                }

            })
        });

        //Tax needs to be done like above and we need to calculate it before adding it to the report to ensure we have the correct values
        objectForCSVArray["Tax"] = value.total.taxTotal;
        objectForCSVArray["Shipping"] = value.total.cartShipping;
        objectForCSVArray["Order Total"] = value.total.cartTotal;

        objectForCSVArray["Pmt Amount REC IIU"] = moment.tz(value.time.ourtime, "America/Chicago").format('L');

        arrayForCSV.push(objectForCSVArray);

    });

    var csv = json2csv({ data: arrayForCSV, fields: fields });

    var blob = new Blob([`${csv}`], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "notaryreport.csv");

}
