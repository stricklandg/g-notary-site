/**
 * Created by gregorydrake on 9/5/16.
 */
import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import _ from 'lodash';

export default function orderNormalizer(field) {
    var normalizedValue = null;
    var valueToReturn = null;
    var firstField = field[0];
    var secondField = null;
    switch (firstField) {
        case "isRenewal":
            normalizedValue = "Is A Renewal?";
            if (field[1] == 0) {
                secondField = "No"
            } else {
                secondField = "Yes"
            }
            break;
        case "firstName":
            normalizedValue = "First Name";
                secondField = field[1];
            break;
        case "lastName":
            normalizedValue = "Last Name";
                secondField = field[1];
            break;
        case "middleName":
            normalizedValue = "Middle Name";
                secondField = field[1];
            break;
        case "renewaldate":
            normalizedValue = "Expiration Date";
            secondField = field[1];
            break;
        case "socialsecurity":
            normalizedValue = "Social Security";
                secondField = field[1];
            break;
        case "birthday":
            normalizedValue = "Birth Date";
            var someValue =_.has(field[1], '_i');
            if (someValue) {
                secondField = field[1]._i;
            } else {
                secondField = field[1];
            }
            break;
        case "telephone":
            normalizedValue = "Telephone";
                secondField = field[1];
            break;
        case "street":
            normalizedValue = "Street";
                secondField = field[1];
            break;
        case "city":
            normalizedValue = "City";
                secondField = field[1];
            break;
        case "state":
            normalizedValue = "State";
                secondField = field[1];
            break;
        case "zip":
            normalizedValue = "Zip Code";
                secondField = field[1];
            break;
        case "street2":
            normalizedValue = "Street 2";
                secondField = field[1];
            break;
        case "county":
            normalizedValue = "County";
            secondField = _.capitalize(field[1].value);
            break;
        case "email":
            normalizedValue = "Email";
            secondField = field[1];
            break;
        case "driverlicense":
            normalizedValue = "Driver's License";
            secondField = field[1];
            break;
        case "issuingstate":
            normalizedValue = "Issuing State";
            secondField = field[1];
            break;
        case "guiltyOfCrime":
            normalizedValue = "Criminal Record";
            if (field[1] == "notguilty") {
                secondField = "No Record"
            } else {
                secondField = "Record Requiring Further Review"
            }
            break;
        case "texasResidency":
            normalizedValue = "Texas Residency";
            if (field[1] == "resident") {
                secondField = "Resident"
            } else {
                secondField = "Nonresident"
            }
            break;
        default:
            break;
    }

    if (field[0] == "packageChosen") {

    } else if (field[0] == "county") {

        valueToReturn = (<ListGroupItem key={field[0]}>
            {normalizedValue} : {secondField}
        </ListGroupItem>)

    } else {

        valueToReturn = (<ListGroupItem key={field[0]}>
            {normalizedValue} : {secondField}
        </ListGroupItem>)
    }

    return valueToReturn;

}
