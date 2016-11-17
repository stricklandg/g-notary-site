/**
 * Created by gregorydrake on 6/8/16.
 */
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { http } from 'meteor/http';
import Orders from '../lib/collections/orders';
import OrderNumber from '../lib/collections/ordernumbers';
import TemporaryBonds from '../lib/collections/temporarybonds';
import FutureTasks from '../lib/collections/futuretasks';
import TempFutureTasks from '../lib/collections/tempfuturetasks';
import filesForBatching from './individual_methods/queueForBatching';
import scheduleCron from './individual_methods/addCron';
import appImageUri from './images/image_uri';
import signature from './images/signature';
var fs = require('fs');
var AWS = require('aws-sdk');

var soap = require('soap');
var url = 'https://sosdirectws.sos.state.tx.us/enotary/enotary.asmx?wsdl';

import {Email} from "meteor/email";

import Packages from '../lib/collections/packages';

import _ from 'lodash';

import doesUserExist from './individual_methods/checkIfUserExists';

import checkUserAccount from './individual_methods/check_user_accounts';

import chargeCC from './individual_methods/cc_processing_callout';

var Promise = require("bluebird");
import axios from 'axios';
var moment = require('moment-timezone');
var Jimp = require('jimp');

const PATH = "/api/v2/tickets/";
Accounts.config({
    forbidClientAccountCreation: true
});

Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset/' + token);
};

Accounts.emailTemplates.from = "TX Notary Application <reset@txnotaryapplication.com>";


Meteor.methods ({
    createUserAccount: function(user) {
            async function verify() {
               var asyncResp = null;
                try {
                    await checkUserAccount(user);
                        asyncResp = Accounts.createUser(user);
                    } catch (error) {
                        asyncResp = new Meteor.Error(error.message);
                    } finally {
                        if (asyncResp.errorType) {
                            return asyncResp;
                        } else {
                            return asyncResp;
                        }
                }
                }

            return verify();


        },
    checkIfUserExists: function(user) {
        return usernameExist = doesUserExist(user);
    },
    addAdminRoleToUser: function(rolesToAssign) {
        let userId = Meteor.userId();
        Roles.addUsersToRoles( userId, [rolesToAssign], 'rockstar');
    },
    checkIfUserIsAdmin: function() {
        let userId = Meteor.userId();
        return value = Roles.userIsInRole(userId, ['universal'] ,'rockstar')
    },
    writeToTempDB: function(data, sessionId) {

        async function writeToTempDB() {
            var asyncResp = null;
            let userId = Meteor.userId();
            var middlename = "";
            if (_.hasIn(data, "middleName")) {
                middlename = data.middleName;
            }

            var email = "";
            if (_.hasIn(data, "email")) {
                email = data.email;
            }

            try {
                if (userId) {
                    asyncResp = TemporaryBonds.insert({"identity": userId, "firstname": data.firstName, "middlename": middlename, "lastname": data.lastName, "email": email,
                        "telephone": data.telephone, "street": data.street, "street2": data.street2, "city": data.city, "state": data.state, "county": data.county,
                        "zip": data.zip, "driverlicense": data.driverlicense, "issuingstate": data.issuingstate, "birthdate": data.birthday,
                        "ss": data.socialsecurity, "isrenewal": data.isRenewal, "guiltyOfCrime": data.guiltyOfCrime, "image": null, "id": data.id, "resident": data.texasResidency, "uploadedForm": data.uploadedForm})
                } else {
                    asyncResp = TemporaryBonds.insert({"identity": sessionId, "firstname": data.firstName, "middlename": middlename, "lastname": data.lastName, "email": data.email,
                        "telephone": data.telephone, "street": data.street, "street2": data.street2, "city": data.city, "state": data.state, "county": data.county,
                        "zip": data.zip, "driverlicense": data.driverlicense, "issuingstate": data.issuingstate, "birthdate": data.birthday,
                        "ss": data.socialsecurity, "isrenewal": data.isRenewal, "guiltyOfCrime": data.guiltyOfCrime, "image": null, "id": data.id, "resident": data.texasResidency, "uploadedForm": data.uploadedForm})
                }
            } catch (error) {
                asyncResp = new Meteor.Error(error.message);
            } finally {
                if (asyncResp.errorType) {
                    return asyncResp;
                } else {
                    return asyncResp;
                }
            }
        }

        return writeToTempDB();

        //ADD DATE TO BOND

    },
    writeToOrderDB: function(data) {
        async function writeToOrderDB(data) {
           var orderNumber = OrderNumber.findOne({});
           var orderInCart = data.onSuccess;
            var asyncResp = null;
            let userId = Meteor.userId();
            var paymentSlice = data.cc.data.number.slice(14,19);
            if(_.has(data.cc.data, 'isCheck')) {
                paymentSlice = data.cc.data.number;
            }
            try {
                if (userId) {
                    asyncResp = Orders.insert({"orderNumber": orderNumber,
                        "identity": userId,
                        products: orderInCart.order.products,
                        total: orderInCart.cartTotals,
                        quantity: orderInCart.order.quantityById,
                        time: orderInCart.orderTime,
                        address: data.address.values,
                        name: data.address.values.name,
                        telephone: data.address.values.telephone,
                        cc: paymentSlice,
                        transId: data.transId})
                }
            } catch (error) {
                asyncResp = new Meteor.Error(error.message);
            } finally {
                if (asyncResp.errorType) {
                    return asyncResp;
                } else {
                    OrderNumber.update({}, {$inc: {orderNumber: 1}});
                    return asyncResp;
                }
            }
        }

        return writeToOrderDB(data);
    },
    writeToBatchList: function(data) {

        async function writeToFutureTasksDB(data) {

            try {
                let addedDate = new Date();
                resultItem = await data.bonds.forEach(value => {
                    if (value.length > 1) {
                        value.forEach((smallerValue) => {
                            var pair = _.toPairs(smallerValue.extraInfo);
                            innerPair = pair[0];
                            bondId = innerPair[1].id;
                            var record = TemporaryBonds.findOne({'id': bondId});
                            if (record) {
                                FutureTasks.insert({bond: record, transId: data.transId});
                            }
                        });
                    } else {
                        var pair = _.toPairs(value.extraInfo);
                        innerPair = pair[0];
                        bondId = innerPair[1].id;
                        var record = TemporaryBonds.findOne({'id': bondId});
                        if (record) {
                            FutureTasks.insert({bond: record, transId: data.transId, date: addedDate});
                        }
                    }
                });

                let order = Orders.findOne({'transId': data.transId});
                Orders.update({'_id': order._id}, {$set: {'batchStatus': "Awaiting Batch"}});
                scheduleCron();
            } catch (error) {
                resultItem = new Meteor.Error(error);
            }
        }

        return writeToFutureTasksDB(data);
        },
    searchGoogleAddress: function (values) {

            async function waiter() {
                var resultItem = null;
                const ROOT_URL = Meteor.settings.private.GOOGLE_API_K;
                const API_KEY = Meteor.settings.private.GOOGLE_API_PASS;
                //A at the beginning
                const addressPartial = values;

                const URL = `${ROOT_URL}input=${addressPartial}&key=${API_KEY}`;
                var p1 = new Promise(function(resolve, reject) {
                    HTTP.post(URL, function(error,result){
                        if (error) return reject(error);

                        resolve(result);
                    });
                });
                try {
                    resultItem = await p1.then(value => {
                        return value.data
                    });
                } catch (error) {
                    resultItem = new Meteor.Error(error);
                } finally {
                    return resultItem;
                }

            }

            return waiter();

    },
    pushToSOS: function () {

        async function waiter() {
            console.log("pushToSOS is running");
            var captureE = null;
            var captureR = null;
            try {
                var objectToSend = await filesForBatching(FutureTasks);
                soap.createClient(url, function (err, client) {
                    console.log("creating soap client");
                    client.QueueApplications(objectToSend, function (err, result) {
                        captureE = err;
                        captureR = result;
                        console.log(captureR);
                        console.log(captureE);

                    })
                });

            } catch (error) {
                if (error) {
                }
            } finally {
            }

        }

        waiter();

    },
    chargeCreditCard: function (data, dataTwo) {

        async function waiter() {
            var resultItem = null;
            //A at the beginning

            var p1 = new Promise(function(resolve, reject) {
                chargeCC(data, dataTwo, function(error,result){
                    if (error) return reject(error);

                    resolve(result);
                });
            });
            try {
                resultItem = await p1.then(value => {

                    if (value) {

                        }
                    return value
                });
            } catch (error) {

                resultItem = new Meteor.Error(error);
            } finally {
                return resultItem;
            }

        }

        return waiter();

    },
    sendMail: function(data, dbResults) {
             var record = Orders.findOne({'_id': dbResults});

             var recordValue = "Please Call For Order Number";

            if (record !== undefined) {
                 recordValue = record.orderNumber.orderNumber;
             }

            var currentUserId = this.userId;
            var user = Meteor.users.findOne({_id: currentUserId});

            Email.send({
                to: user.emails[0].address,
                from: "store@txnotaryapplication.com",
                subject: `Texas Notary App - Order Confirmation - ${recordValue}`,
                html: `<p>Dear ${data.address.values.name}, <br><br> Thank you for your purchase today.  We are glad we were able to be of service. Your invoice/receipt can be found on txnotaryapplication.com.  <br> For your records, your total purchase was - <strong>$ ${data.cc.total}</strong> and your credit card ending in ${data.cc.data.number.slice(14,19)} was charged.  Also for your records, here is your order confirmation number: <strong>${recordValue}</strong>. <br><br><br> If you have any questions, please call - 800-933-7444 or email us at notary@iiubonds.com.  Please note that all bonds are underwritten through Insurors Indemnity Underwriters (dba Insurors Indemnity Company).<br><br><br> Note: Your order could take an extended period of time to process depending on the Texas Secretary of State.</p>`
            })
    },
    writeImageToDB: function(data) {


        async function writeImageToTemp() {
            var asyncResp = null;
            var imageData = data.imageData;
            var tempId = data.tempBond.id;
            try {
                var record = TemporaryBonds.findOne({'id': tempId});
                if (record !== undefined) {
                    asyncResp = TemporaryBonds.update({'_id': record._id}, {$set: { image: imageData}});
                } else {
                    throw message = "Something has gone wrong with adding the image to the database";
                }
            } catch (error) {
                asyncResp = new Meteor.Error(error.message);
            } finally {
                if (asyncResp.errorType) {
                    return asyncResp;
                } else {
                    return asyncResp;
                }
            }
        }

        return writeImageToTemp();

        //ADD DATE TO BOND

    },
    convertTimes: function() {
        Orders.find({}).forEach(value => {
            var usert = value.time.usertime;
            var ourt = value.time.ourtime;

            var reformatut = new Date(moment(usert).toISOString());
            var reformatot = new Date(moment(ourt).toISOString());


            Orders.update({'_id': value._id}, {$set: {'time.usertime': reformatut}});
            Orders.update({'_id': value._id}, {$set: {'time.ourtime': reformatot}});
        })

    },
    processUploadedImage: function(file) {
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

        var decodedImage = decodeBase64Image(file);

        var syncForm = Meteor.wrapAsync(Jimp.read);
        var resultOfImage = syncForm(decodedImage.data);

        return new Promise(function (resolve, reject) {
            resultOfImage.resize(535, Jimp.AUTO, function(err, resized) {
                if (err) { console.log(err) }
                resized.quality(84, function(err, qualityD) {
                    qualityD.getBase64( Jimp.MIME_JPEG, function(err, image) {
                        if (err) {console.log(err)}
                        resolve(image)
                    })
                })
            });
        });



    },
    deleteFutureAddTempFuture: function() {
        FutureTasks.find({}).forEach(value => {

            TempFutureTasks.insert({value});

        });
        FutureTasks.remove({});
    },
    addBondNumberToOrder: function(bondNum) {

        async function writeBondNumToDB() {
            var asyncResp = null;
            var bondNumber = bondNum.bondnum;
            var selectedBondId = bondNum.bondId;
            var orderNum = bondNum.orderNum;
            var indexNum = bondNum.index;

            try {
                var record = Orders.findOne({ 'orderNumber.orderNumber': orderNum });
                var arrayIndex;
                var objectIndex;
                record.products.map((arrayOfItemsByType, aIndex) => { arrayOfItemsByType.map((individualObject, oIndex) => {
                   if(_.has(individualObject.extraInfo, `${selectedBondId}`)){
                       arrayIndex = aIndex;
                       objectIndex = oIndex;
                   }
                })})


                record.products[arrayIndex][objectIndex].extraInfo[selectedBondId]['bondNumber'] = bondNumber;

                if (record !== undefined) {
               asyncResp = Orders.update({'_id': record._id}, {$set: {'products': record.products}});
                } else {
                    throw message = "Something has gone wrong with adding the image to the database";
                }
            } catch (error) {
                asyncResp = new Meteor.Error(error.message);
            } finally {
                if (asyncResp.errorType) {
                    return asyncResp;
                } else {
                    return asyncResp;
                }
            }
        }

        return writeBondNumToDB();
    },
    resetAccountPassword: function(userEmail) {

        var accountId = Accounts.findUserByEmail(userEmail);
        Accounts.sendResetPasswordEmail(accountId._id);


    },
    processImageForDB: function(dataForForm, signatureForForm) {
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

        var decodedImage = decodeBase64Image(appImageUri);
        var decodedSig = decodeBase64Image(signatureForForm);

        var fontLoad = Meteor.wrapAsync(Jimp.loadFont)
        var resultFont = fontLoad(Jimp.FONT_SANS_16_BLACK);

        var syncForm = Meteor.wrapAsync(Jimp.read);
        var resultOfImage = syncForm(decodedImage.data);

        var syncSign = Meteor.wrapAsync(Jimp.read);
        var resultOfSign= syncSign(decodedSig.data);

        var middleName = "";

        if (dataForForm.middleName) {
            middleName = dataForForm.middleName;
        }

        var street1 = dataForForm.street;
        var street2 = "";
        var street = dataForForm.street;

        if (dataForForm.street2) {
            street2 = dataForForm.street2;
            street = street1.concat(`  ${street2}`)
        }

        var email = "";
        if (dataForForm.email) {
            email = dataForForm.email;
        }

        return new Promise(function (resolve, reject) {
            resultOfImage.resize(850, Jimp.AUTO, function(err, resized) {
                resized.print(resultFont, 55, 260, dataForForm.lastName, function(err, lastName) {
                    lastName.print(resultFont, 470, 260, middleName, function(err, middleName) {
                        middleName.print(resultFont, 275, 260, dataForForm.firstName, function (err, firstName) {
                            firstName.print(resultFont, 650, 260, dataForForm.socialsecurity, function (err, ssecurity) {
                                ssecurity.print(resultFont, 55, 315, street, function(err, street) {
                                    street.print(resultFont, 320, 315, dataForForm.city, function(err, city) {
                                        city.print(resultFont, 540, 315, dataForForm.zip, function(err, zip) {
                                            zip.print(resultFont, 650, 315, dataForForm.county.label, function(err, county) {
                                                county.print(resultFont, 375, 350, email, function(err, email) {
                                                    email.print(resultFont, 160, 430, dataForForm.birthday, function(err, birthdate) {
                                                        birthdate.print(resultFont, 515, 430, dataForForm.driverlicense, function(err, dl) {
                                                            dl.print(resultFont, 95, 805, `${moment().format('L')}`, function(err, firsttime) {
                                                                firsttime.print(resultFont, 750, 430, dataForForm.issuingstate, function(err, dls) {

                                                                    if (dataForForm.guiltyOfCrime == 'notguilty') {
                                                                        dls.print(resultFont, 55, 607, "X", function(err, gOfC) {
                                                                            gOfC.print(resultFont, 95, 1005, `${moment().format('L')}`, function(err, time) {
                                                                                resultOfSign.resize(550, Jimp.AUTO, function(err, resizeSign) {
                                                                                    time.composite(resizeSign, 345, 975, function(err, sign) {
                                                                                        sign.resize(650, Jimp.AUTO, function(err, resizeF) {
                                                                                            resizeF.quality(75, function(err, quality) {
                                                                                                quality.getBase64( Jimp.MIME_JPEG, function(err, image) {
                                                                                                    resolve(image)
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    } else {
                                                                        dls.print(resultFont, 55, 535, "X", function(err, gOfC) {
                                                                            gOfC.print(resultFont, 95, 1005, `${moment().format('L')}`, function(err, time){
                                                                                resultOfSign.resize(550, Jimp.AUTO, function(err, resizeSign) {
                                                                                    time.composite(resizeSign, 345, 975, function(err, sign) {
                                                                                        sign.resize(650, Jimp.AUTO, function(err, resizeF) {
                                                                                            resizeF.quality(75, function(err, quality) {
                                                                                                quality.getBase64( Jimp.MIME_JPEG, function(err, image) {
                                                                                                    resolve(image)
                                                                                                })
                                                                                            })
                                                                                        })

                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    }

                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                        })
                    })
                })
            });
    },
    //DEPRECATED
  fetchTickets: function(ordernumber){
    return Meteor.http.call("GET", "https://valuesure.freshdesk.com" + PATH,
    {
      auth: 'gINcauzYJFnVZr6Gp5:X'
    });




}


});
