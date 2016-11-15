/**
 * Created by gregorydrake on 10/31/16.
 */

export default function eOSwitcher(item) {
    var objectInfo = null;
    var rObject = null;
    //This determines which function is calling it.
    switch (item.name) {
        case "Premium Package":

            rObject = true;

            return objectInfo = rObject;
            break;
        case "New Notary Package":

            rObject = true;

            return objectInfo = rObject;
            break;
        case "Coverage $5,000":

            rObject = true;

            return objectInfo = rObject;
            break;
        case "Coverage $10,000":

            rObject = true;

            return objectInfo = rObject;
            break;
        case "Coverage $15,000":

            rObject = true;

            return objectInfo = rObject;
            break;
        case "Coverage $25,000":

            rObject = true;

            return objectInfo = rObject;
            break;
        default:
            return objectInfo;
    }
}

export function eOSwitcherValue(item) {
    var objectInfo = null;
    var rObject = null;
    //This determines which function is calling it.
    switch (item.name) {
        case "Premium Package":

            rObject = 37;

            return objectInfo = rObject;
            break;
        case "New Notary Package":

            rObject = 56;

            return objectInfo = rObject;
            break;
        case "Coverage $5,000":

            rObject = 25;

            return objectInfo = rObject;
            break;
        case "Coverage $10,000":

            rObject = 37;

            return objectInfo = rObject;
            break;
        case "Coverage $15,000":

            rObject = 47;

            return objectInfo = rObject;
            break;
        case "Coverage $25,000":

            rObject = 56;

            return objectInfo = rObject;
            break;
        default:
            return objectInfo;
    }
}