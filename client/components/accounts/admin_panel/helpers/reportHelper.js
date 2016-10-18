/**
 * Created by gregorydrake on 10/17/16.
 */
import _ from 'lodash';

export default function produceReport(orders) {
    const ordersArray = orders.payload;

    var arrayForCSV = [];

    ordersArray.forEach(value => {
        console.log(value);
        objectForCSVArray = {};
        const orderNumber = value.orderNumber.orderNumber;
        objectForCSVArray["Order #"] = orderNumber;

        value.products.forEach(productsArray => {
            productsArray.forEach(value => {
            console.log(value.name);

            if (_.hasIn(objectForCSVArray, "Bond #")) {

                if (value.name == "Bond Only" || "Basic Package" || "Premium Package" || "Renewal Package" || "New Notary Package") {
                    const existingValue = objectForCSVArray["Bond #"];
                    objectForCSVArray["Bond #"] = existingValue.concat(" # XXX-XXXX");
                } else {
                    const existingValue = objectForCSVArray["Bond #"];
                    objectForCSVArray["Bond #"] = existingValue.concat(" S");
                }

            } else {


                if (value.name == "Bond Only" || "Basic Package" || "Premium Package" || "Renewal Package" || "New Notary Package") {
                    objectForCSVArray["Bond #"] = "# XXX-XXXX";
                } else {
                    objectForCSVArray["Bond #"] = "S";
                }

            }

        console.log(objectForCSVArray);
            })
        })

    });



}
