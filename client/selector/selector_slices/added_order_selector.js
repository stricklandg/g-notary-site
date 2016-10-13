/**
 * Created by gregorydrake on 10/3/16.
 */
import { createSelector } from 'reselect';
import _ from 'lodash';

const getSupplies = (state) => state.supplies;
const getEO = (state) => state.eo;
const getOrderInfo = (state) => state.form.addorderbody;
const getPackage = (state) => state.packages;


export const getOrderTotals = createSelector([getSupplies, getEO, getOrderInfo, getPackage], (supplies, eo, order, packages) => {
    if (_.isEmpty(supplies) || _.isEmpty(eo) || !_.hasIn(order, 'values') || _.isEmpty(packages)) {
        return zero = 0;
    } else {

        if (order.values.inventory == undefined) {
            return zero = 0
        }

        var inventoryObject = Object.assign({}, supplies, eo, packages);

        var grabArrayOfItems = order.values.inventory.map((value) => { return value.addedItem});
        var cloneQuantity = _.countBy(grabArrayOfItems, _.identity);
        var cloneQuantityToMap = _.keys(cloneQuantity);
        var cloneQuantityMapped = cloneQuantityToMap.map((value) => {
            return _.findKey(inventoryObject, {'name': value});
        });

        var totalValue = cloneQuantityMapped.reduce((total, id) => total + inventoryObject[id].price * cloneQuantity[inventoryObject[id].name], 0).toFixed(2);
        return _.cloneDeep(totalValue);

    }
});


function getTax(inventoryItem) {
    var valueToReturn = null;
    switch (inventoryItem.name) {
        case "Renewal Package":
            valueToReturn = "1.18";
            break;
        case "Basic Package":
            valueToReturn = "2.32";
            break;
        case "Premium Package":
            valueToReturn = "2.55";
            break;
        case "New Notary Package":
            valueToReturn = "3.39";
            break;
        case "Bond Only":
            valueToReturn = "0.00";
            break;
        default:
            valueToReturn = inventoryItem.price*.0825;
            break;
    }
    return valueToReturn;

}

export const getOrderTax = createSelector([getSupplies, getEO, getOrderInfo, getPackage], (supplies, eo, order, packages) => {
    if (_.isEmpty(supplies) || _.isEmpty(eo) || !_.hasIn(order, 'values') || _.isEmpty(packages)) {
        return zero = 0;
    } else {
        if (order.values.inventory == undefined) {
            return zero = 0
        }

        var inventoryObject = Object.assign({}, supplies, eo, packages);

        var grabArrayOfItems = order.values.inventory.map((value) => { return value.addedItem});
        var cloneQuantity = _.countBy(grabArrayOfItems, _.identity);
        var cloneQuantityToMap = _.keys(cloneQuantity);
        var cloneQuantityMapped = cloneQuantityToMap.map((value) => {
            return _.findKey(inventoryObject, {'name': value});
        });

        var totalValue = cloneQuantityMapped.reduce((total, id) => total + (parseFloat(getTax(inventoryObject[id])) * cloneQuantity[inventoryObject[id].name]), 0).toFixed(2);
        return _.cloneDeep(totalValue);
    }
});


export const getOrderTotalShipping = createSelector([getSupplies, getOrderInfo, getPackage], (supplies, order, packages) => {
    if ( !_.hasIn(order, 'values') || _.isEmpty(packages) || _.isEmpty(supplies)) {
        return zero = 0;
    } else {
        if (order.values.inventory == undefined) {
            return zero = 0
        }

        var combinedInventoryObject = Object.assign({}, supplies, packages);

        var grabArrayOfItems = order.values.inventory.map((value) => { return value.addedItem});
        var cloneQuantity = _.countBy(grabArrayOfItems, _.identity);
        var cloneQuantityToMap = _.keys(cloneQuantity);
        var cloneQuantityMapped = cloneQuantityToMap.map((value) => {
            return _.findKey(combinedInventoryObject, {'name': value});
        });

        //Grab reference objects
        let supplyObject = Object.assign({}, supplies);
        let inventoryObject = Object.assign({}, packages);

        //Make reference objects arrays
        let arrayOfSupplies = _.keys(supplyObject);
        let arrayOfPackages = _.keys(inventoryObject);


        //Show what's in the cart

        var shippingAmount = "0.00";

        //Compare whats in the cart to the reference objects to determine what shipping costs need to be
        let possibleSupplyIntersection = _.intersection(cloneQuantityMapped, arrayOfSupplies);
        let possiblePackageIntersection =_.intersection(cloneQuantityMapped, arrayOfPackages);


        if (possiblePackageIntersection.length >= 1 && possibleSupplyIntersection.length < 1) {
            //If multiple packages exist in cart and one is a bond only package add $4.00 charge to order, if not
            // do not charge shipping
            if (possiblePackageIntersection.length > 1) {
                shippingAmount = possiblePackageIntersection.some(value => { if (inventoryObject[value].name == "Bond Only") {
                    return shippingAmount = "0.00" }
                })
            } else {
                if (inventoryObject[possiblePackageIntersection].name == "Bond Only") {
                    shippingAmount = "0.00"
                } else {
                    shippingAmount = "0.00"
                }
            }

        } else if (possiblePackageIntersection.length >= 1 && possibleSupplyIntersection.length >= 1) {
            if (possiblePackageIntersection.length > 1) {
                shippingAmount = "4.00"
            } else if (possiblePackageIntersection.length == 1 && inventoryObject[possiblePackageIntersection].name == "Bond Only") {
                shippingAmount = "8.00"
            } else {
                shippingAmount = "4.00"
            }
        } else if (possiblePackageIntersection.length == 0 && possibleSupplyIntersection.length == 0) {
            shippingAmount = "0.00"
        } else {
            shippingAmount = "8.00"
        }

        return _.cloneDeep(shippingAmount);

    }
});
