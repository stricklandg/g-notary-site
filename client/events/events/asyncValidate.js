/**
 * Created by gregorydrake on 7/13/16.
 */
import {Meteor} from 'meteor/meteor';


export default asyncValidate = (values, dispatch) => {
    const takenUser = Meteor.callPromise('checkIfUserExists', values.username);
            return takenUser
                .then(userExists => { if(userExists) {
                    throw { username: 'Username Is Taken'}
                 }
            });
}