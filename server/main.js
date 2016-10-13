import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import FutureTasks from '../lib/collections/futuretasks';
import scheduleCron from './individual_methods/addCron';


Meteor.startup(() => {

WebApp.rawConnectHandlers.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});

     futuresArray = FutureTasks.find({}).fetch();
     if (futuresArray.length >= 1) {
       //  scheduleCron();
     }

    process.env.MAIL_URL = Meteor.settings.private.MAIL_URL_ADD;

 //   SyncedCron.start();

});
