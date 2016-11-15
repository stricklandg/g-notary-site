/**
 * Created by gregorydrake on 10/28/16.
 */
import { Meteor } from 'meteor/meteor';

export default function generateBondImage(dataForForm, signatureForForm) {
    newStuff = Meteor.callPromise('processImageForDB', dataForForm, signatureForForm);
    return newStuff.then((image) => {
        return image
    })
};