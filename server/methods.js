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
import imageBlob from './individual_methods/imageApplication';
import filesForBatching from './individual_methods/queueForBatching';
import scheduleCron from './individual_methods/addCron';

var soap = require('soap');
var url = 'https://sosdirectws.sos.state.tx.us/enotary/enotary.asmx?wsdl';

import {Email} from "meteor/email";

import Packages from '../lib/collections/packages';

import _ from 'lodash';

import doesUserExist from './individual_methods/checkIfUserExists';

import checkUserAccount from './individual_methods/check_user_accounts';

import chargeCC from './individual_methods/cc_processing_callout';

var Promise = require("bluebird");

var moment = require('moment-timezone');
var Jimp = require('jimp');

Accounts.config({
    forbidClientAccountCreation: true
});

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
    writeToTempDB: function(data, sessionId, image) {

        async function writeToTempDB() {
            var asyncResp = null;
            let userId = Meteor.userId();
            try {
                if (userId) {
                    asyncResp = TemporaryBonds.insert({"identity": userId, "firstname": data.firstName, "lastname": data.lastName, "email": data.email,
                        "telephone": data.telephone, "street": data.street, "street2": data.street2, "city": data.city, "state": data.state, "county": data.county,
                        "zip": data.zip, "driverlicense": data.driverlicense, "issuingstate": data.issuingstate, "birthdate": data.birthday,
                        "ss": data.socialsecurity, "isrenewal": data.isRenewal, "guiltyOfCrime": data.guiltyOfCrime, "image": image, "id":data.id, "resident": data.texasResidency, "uploadedForm": data.uploadForm})
                } else {
                    asyncResp = TemporaryBonds.insert({"identity": sessionId, "firstname": data.firstName, "lastname": data.lastName, "email": data.email,
                        "telephone": data.telephone, "street": data.street, "street2": data.street2, "city": data.city, "state": data.state, "county": data.county,
                        "zip": data.zip, "driverlicense": data.driverlicense, "issuingstate": data.issuingstate, "birthdate": data.birthday,
                        "ss": data.socialsecurity, "isrenewal": data.isRenewal, "guiltyOfCrime": data.guiltyOfCrime, "id":data.id, "resident": data.texasResidency, "uploadedForm": data.uploadForm})
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
                html: `<p>Dear ${data.address.values.name}, <br><br> Thank you for your purchase today.  We are glad we were able to be of service. Your invoice/receipt can be found on txnotaryapplication.com.  <br> For your records, your total purchase was - <strong>$ ${data.cc.total}</strong> and your credit card ending in ${data.cc.data.number.slice(14,19)} was charged.  Also for your records, here is your order confirmation number: <strong>${recordValue}</strong>. <br><br><br> If you have any questions, please call - 800-622-8575 or email us at notary@iiubonds.com.  Please note that all bonds are underwritten through Insurors Indemnity Underwriters (dba Insurors Indemnity Company).<br><br><br> Note: Your order could take an extended period of time to process depending on the Texas Secretary of State.</p>`
            })
    },
    writeImageToDB: function(data) {


        async function writeImageToTemp() {
            var asyncResp = null;
            var imageData = data.imageData;
            var tempId = data.tempId;
            try {
                var record = TemporaryBonds.findOne({'id': tempId});
                if (record !== undefined) {
                    asyncResp = TemporaryBonds.update({'id': tempId}, {$set: {'image': `${imageData}`}});
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
                resized.quality(84, function(err, qualityD) {
                    qualityD.getBase64( Jimp.MIME_JPEG, function(err, image) {
                        resolve(image)
                    })
                })
            });
        });



    }


});