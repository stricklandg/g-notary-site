/**
 * Created by gregorydrake on 10/26/16.
 */
import {SELECT_PACKAGE} from './types';

export default function selectPackageType(type, packageId) {
            return {
                type: SELECT_PACKAGE,
                payload: {packageId, type}
            };

}