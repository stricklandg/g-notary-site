/**
 * Created by gregorydrake on 9/8/16.
 */
import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
var ApiContracts = require('authorizenet').APIContracts;
var ApiControllers = require('authorizenet').APIControllers;


export default function chargeCC(data, dataTwo, callback) {
    var ccNum = data.data.number;
    var noSpaceCC = `${ccNum.replace(/ /g, '')}`;

    var ccExMon = data.data.exp_month;
    var ccExYea = data.data.exp_year;
    var cvc = data.data.cvc;

    var ccExYString = ccExYea.toString();
    var shortenedYear = ccExYString.slice(2,5);
    var expirationString = `${ccExMon}${parseInt(shortenedYear)}`;

    var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(Meteor.settings.private.AUTHORIZE_KEY);
    merchantAuthenticationType.setTransactionKey(Meteor.settings.private.AUTHORIZE_PASS);

    var nameAndAddress = new ApiContracts.NameAndAddressType();
    if (dataTwo.address.values.name) {
        nameAndAddress.setFirstName(dataTwo.address.values.name);
    } else {
        nameAndAddress.setFirstName("N/A");
    }
    if (dataTwo.address.values.street) {
        nameAndAddress.setAddress(dataTwo.address.values.street);
    } else {
        nameAndAddress.setAddress("N/A");
    }
    if (dataTwo.address.values.city) {
        nameAndAddress.setCity(dataTwo.address.values.city);
    } else {
        nameAndAddress.setCity("N/A");
    }
    if (dataTwo.address.values.state) {
        nameAndAddress.setState(dataTwo.address.values.state);
    } else {
        nameAndAddress.setState("N/A");
    }
    if (dataTwo.address.values.zip) {
        nameAndAddress.setZip(dataTwo.address.values.zip);
    } else {
        nameAndAddress.setZip("N/A");
    }

    var creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber(noSpaceCC);
    creditCard.setExpirationDate(expirationString);
    creditCard.setCardCode(`${cvc}`);

    var paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    var transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(data.total);
    transactionRequestType.setShipTo(nameAndAddress);

    var createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);


    var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
    ctrl.setEnvironment('https://api.authorize.net/xml/v1/request.api');
    ctrl.execute(function(){

        var apiResponse = ctrl.getResponse();

        var response = new ApiContracts.CreateTransactionResponse(apiResponse);
        var error = null;
        var rResponse = _.cloneDeep(response);


        if(response != null){
            if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK &&
                response.getTransactionResponse().getResponseCode() == '1'){
                //console.log('Transaction ID: ' + response.getTransactionResponse().getTransId());
            }
            else{
               // console.log('Result Code: ' + response.getMessages().getResultCode());
              //  console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
              //  console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
            }
        }
        else{
           // console.log('Null Response.');
            error = Error(rResponse);
            rResponse = null;
        }

        callback(error, rResponse);
    });
}