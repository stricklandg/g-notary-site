/**
 * Created by gregorydrake on 6/17/16.
 */
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

const checkUserAccount = (user) => {


        pattern = {username: String, email: String, password: String, repeatPassword: String};
        check(user, pattern);

        if (user.email == "aol@aol.com") {
            throw new Error("AOL");

        } else {
        }

        Accounts.validateNewUser(function(user) {
           if (user.username && user.username.length >= 3) {
               return true;
           } else {
               throw new Meteor.Error(403, "User must have more than 3 characters");
           }
        });

};

export default checkUserAccount;