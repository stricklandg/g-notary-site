import { createSelector } from 'reselect';
import _ from 'lodash';

const getSupplies = (state) => state.supplies;
const getEO = (state) => state.eo;
const getCart = (state) => state.cart;
const getPackage = (state) => state.packages;

export const getCartsItemContents = createSelector([getSupplies, getEO, getCart, getPackage], (supplies, eo, cart, packages) => {
    var inventoryObject = Object.assign({}, supplies, eo, packages);
    var cloneCartState = Object.assign({}, cart.addedIds);
    var addedIdsArray =_.keys(cloneCartState);
    return addedIdsArray.map(id => {
        if (_.isEmpty(inventoryObject)) {
        } else {
            if (inventoryObject[id] == undefined) {
            } else {
                let newArray = [];

                cloneCartState[id].forEach(value => {
                    newArray.push(Object.assign(
                        {},
                        inventoryObject[id], {
                            quantity: 1, extraInfo: value
                        }
                    ))
                });

                if (inventoryObject[id].addInfo == "false") {
                    const noDuplicates = _.uniq(newArray);
                    ArrayObject = Object.assign({}, noDuplicates[0], {quantity: cart.quantityById[id]});
                    return newArray = [ArrayObject]
                } else {
                    return newArray
                }
            }
        }

    })
});

export const getCartsTotal = createSelector([getSupplies, getEO, getCart, getPackage], (supplies, eo, cart, packages) => {
    if (_.isEmpty(supplies) || _.isEmpty(eo) || _.isEmpty(cart) || _.isEmpty(packages)) {
        return zero = 0;
    } else {
        var inventoryObject = Object.assign({}, supplies, eo, packages);
        var cloneCartQuantity = Object.assign({}, cart.quantityById);
        var cloneCartState = Object.assign({}, cart.addedIds);
        var addedIdsArray =_.keys(cloneCartState);
        var totalValue = addedIdsArray.reduce((total, id) => total + inventoryObject[id].price * cloneCartQuantity[id], 0).toFixed(2);
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
        case "Coverage $10,000":
            valueToReturn = "0.00";
            break;
        case "Coverage $15,000":
            valueToReturn = "0.00";
            break;
        case "Coverage $25,000":
            valueToReturn = "0.00";
            break;
        case "Coverage $5,000":
            valueToReturn = "0.00";
            break;
        default:
            valueToReturn = inventoryItem.price*.0825;
        break;
    }
    return valueToReturn;

}

export const getCartsTax = createSelector([getSupplies, getEO, getCart, getPackage], (supplies, eo, cart, packages) => {
    if (_.isEmpty(supplies) || _.isEmpty(eo) || _.isEmpty(cart) || _.isEmpty(packages)) {
        return zero = 0;
    } else {
        var inventoryObject = Object.assign({}, supplies, eo, packages);
        var cloneCartQuantity = Object.assign({}, cart.quantityById);
        var cloneCartState = Object.assign({}, cart.addedIds);
        var addedIdsArray =_.keys(cloneCartState);
        var totalValue = addedIdsArray.reduce((total, id) => total + (parseFloat(getTax(inventoryObject[id])) * cloneCartQuantity[id]), 0).toFixed(2);
        return _.cloneDeep(totalValue);
    }
});


export const getCartsTotalQuantity = createSelector([getCart], (cart) => {
    var cloneCartQuantity = Object.assign({}, cart.quantityById);
    var cloneCartState = Object.assign({}, cart.addedIds);
    var addedIdsArray =_.keys(cloneCartState);
    var arrayForReturn = addedIdsArray.reduce((total, id) => total + cloneCartQuantity[id], 0);
    return _.cloneDeep(arrayForReturn);
});

export const getCartsTotalShipping = createSelector([getSupplies, getCart, getPackage], (supplies, cart, packages) => {
    if ( _.isEmpty(cart) || _.isEmpty(packages) || _.isEmpty(supplies)) {
        return zero = 0;
    } else {
        //Grab reference objects
        let supplyObject = Object.assign({}, supplies);
        let inventoryObject = Object.assign({}, packages);

        //Make reference objects arrays
        let arrayOfSupplies = _.keys(supplyObject);
        let arrayOfPackages = _.keys(inventoryObject);


        //Show what's in the cart
        let cloneCartState = Object.assign({}, cart.addedIds);
        let addedIdsArray = _.keys(cloneCartState);

        var shippingAmount = "0.00";
        //Compare whats in the cart to the reference objects to determine what shipping costs need to be
        let possibleSupplyIntersection = _.intersection(addedIdsArray, arrayOfSupplies);
        let possiblePackageIntersection =_.intersection(addedIdsArray, arrayOfPackages);


        if (possiblePackageIntersection.length >= 1 && possibleSupplyIntersection.length < 1) {
                //If multiple packages exist in cart and one is a bond only package add $4.00 charge to order, if not
                // do not charge shipping
                if (possiblePackageIntersection.length > 1) {
                        possiblePackageIntersection.some(value => { if (inventoryObject[value].name == "Bond Only") {
                         shippingAmount = "0.00"
                        }
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