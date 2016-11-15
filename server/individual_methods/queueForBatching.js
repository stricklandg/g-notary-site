/**
 * Created by gregorydrake on 9/20/16.
 */
import Orders from '../../lib/collections/orders';
import BatchId from '../../lib/collections/sosbatchid';
import BondNumber from '../../lib/collections/bondnumber';
import signature from '../images/signature';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
var Promise = require("bluebird");



var Jimp = require("jimp");

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}


export default function filesForBatching(Collection) {

    return new Promise(function(resolve, reject){

        var recordArray = Collection.find({}).map(record => {return record});

        var arrayHolder = recordArray.map(record => {

            var bond = record.bond;
            var d = new Date(bond.birthdate);
            var dFormatted = d.toJSON().slice(0,19);

            var crimeStatus = bond.guiltyOfCrime;
            if (crimeStatus == "notguilty") {
                crimeStatus = "N"
            } else {
                crimeStatus = "Y"
            }

            var street2 = bond.street2;
            if (street2 == null) {
                street2 = ""
            }

            var suffixname = "";
            if(_.has(bond, "suffixname")) {
                suffixname = bond.suffixname;
            }

            var street = bond.street + " " + street2;

            if (crimeStatus == "Y") {
                return
            }

            var resident = bond.resident;

            if (resident == "resident") {
                resident = "Y"
            } else {
                resident = "N"
            }

            var middlename = "";
            if ( _.hasIn(bond, "middlename")) {
                middlename = bond.middlename;
            }

            let order = Orders.findOne({"transId": record.transId});
            let appId = BondNumber.findOne({});

            var b64Sign = signature;
            var b64String = bond.image;


            var decodedSign = decodeBase64Image(b64Sign);
            var decodedForm = decodeBase64Image(b64String);

            var syncForm = Meteor.wrapAsync(Jimp.read);
            var resultOfSyncForm = syncForm(decodedForm.data);

            var syncSign = Meteor.wrapAsync(Jimp.read);
            var resultOfSign= syncSign(decodedSign.data);

            var fontLoad = Meteor.wrapAsync(Jimp.loadFont)
            var resultFont = fontLoad(Jimp.FONT_SANS_16_BLACK);



            var base64ForApp = null;

            if (bond.uploadedForm == true) {
                resultOfSyncForm.resize(555, Jimp.AUTO, function(err, formResize) {

                            formResize.print(resultFont, 425, 485, `${appId.bondNumber}`);
                            formResize.quality(59, function(err3, qualityAd) {
                                if (err3) {console.log(err3)}
                                qualityAd.getBase64(Jimp.MIME_JPEG, function(err4, base64) {
                                    if (err4) {console.log(err4)}
                                    base64ForApp = base64
                                });
                            })
                        });
            } else {
                resultOfSyncForm.resize(544, Jimp.AUTO, function(err, formResize) {
                    resultOfSign.resize(70, 19, function(err, signResize) {

                        formResize.composite(signResize, 275, 518, function(err2, composition) {
                            composition.print(resultFont, 425, 485, `${appId.bondNumber}`);
                            composition.quality(59, function(err3, qualityAd) {
                                qualityAd.getBase64(Jimp.MIME_JPEG, function(err4, base64) {
                                    if (err4) {console.log(err4)}
                                    base64ForApp = base64
                                });
                            })

                        })
                    });
                });
            }

            //Last check before returning
            var removedHeader = base64ForApp.replace(/.*,/,'');

            if (crimeStatus == "Y" || resident == "N") {
                return
            } else {
                if (order.batchStatus !== "Sent to SOS") {
                    Orders.update({"_id": order._id}, {$set: {'batchStatus': "Sent to SOS"}});
                }
                BondNumber.update({}, {$inc: {bondNumber: 1}});
                Orders.update({"_id": order._id}, {$push: {'sosApps': removedHeader}});
                var arrayObject = {
                    "ApplicationID": appId.bondNumber,
                    "FirstName": bond.firstname,
                    "MiddleName": middlename,
                    "LastName": bond.lastname,
                    "NameSuffix": suffixname,
                    "DateOfBirth": dFormatted,
                    "SocialSecurityNumber": bond.ss.replace(/-/g, ""),
                    "DriverLicenseState": "TX",
                    "DriverLicenseNumber": bond.driverlicense,
                    "ResidenceAddress": street,
                    "ResidenceCity": bond.city,
                    "ResidenceStateCode": "TX",
                    "ResidencePostalCode": bond.zip,
                    "ResidenceCounty": bond.county.label,
                    "AgencyName": "Insurors Indemnity Underwriters",
                    "SuretyCompany": "Insurors Indemnity Companies",
                    "EMailAddress": bond.email,
                    "TexasResidentIndicator": resident,
                    "FelonyConvictionIndicator": crimeStatus,
                    "ApplicationImage": removedHeader
                };
                console.log(arrayObject);
                return arrayObject
            }
        });

        batchId = BatchId.findOne({});
        //Build files to be batched
        var clientObject = {
            "objClientData": {
                "Client": {
                    "ClientID": "550398515",
                    "Password": "Texas2010",
                    "EnvelopeID": batchId.batchNumber,
                    "PaymentType": 5,
                    "CardType": 0,
                    "CardNumber": "",
                    "ExpireYear": 0,
                    "ExpireMonth": 0,
                    "RunMode": '1',
                    "BusinessName": "",
                    "FirstName": "",
                    "MiddleName": "",
                    "LastName": "",
                    "NameSuffix": "",
                    "AddressLine1": "",
                    "AddressLine2": "",
                    "City": "",
                    "StateCode": "",
                    "PostalCode": "",
                    "PostalCodeExtension": "",
                    "Country": "",
                    "PhoneNumber": "",
                    "PhoneExtension": "",
                    "FaxNumber": "",
                    "EMail": ""
                }
            },
            "objNotaryData": {
                "NotaryApplications": {}
            }

        };

        clientObject.objNotaryData.NotaryApplications["clsNotary"] = arrayHolder;
        BatchId.update({}, {$inc: {batchNumber: 1}});
        resolve(clientObject);

    })
}