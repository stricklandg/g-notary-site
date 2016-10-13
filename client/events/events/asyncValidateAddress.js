/**
 * Created by gregorydrake on 8/30/16.
 */
export default asyncValidate = (values, dispatch) => {

    const addressResults = Meteor.callPromise('searchGoogleAddress', values.addsearch);
    return addressResults
        .then(value => {
            if (value.error.response) {
               throw {addsearch: value.response.statusCode}
            }
           })

}