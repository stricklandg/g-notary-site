/**
 * Created by gregorydrake on 10/31/16.
 */
export default function supplyPriceSwitcher(item) {
    var objectInfo = null;
    var rObject = null;
    //This determines which function is calling it.
    switch (item.name) {
        case "Self-Inking Acknowledgement Stamp":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Notary Public Record Book":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Fingerprint Pad":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Desk Sign":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Metal Embossing Seal":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Impression Inker":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Pocket Size Stamp":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Self-Inking Round Stamp":

            rObject = item.price;

            return objectInfo = rObject;
            break;
        case "Basic Package":

            rObject = "28.17";

            return objectInfo = rObject;
            break;
        case "New Notary Package":

            rObject = "41.40";

            return objectInfo = rObject;
            break;
        case "Renewal Package":

            rObject = "14.31";

            return objectInfo = rObject;
            break;
        case "Premium Package":

            rObject = "30.94";

            return objectInfo = rObject;
            break;
        default:
            return objectInfo;
    }
}