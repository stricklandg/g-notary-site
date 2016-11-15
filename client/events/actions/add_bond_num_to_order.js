/**
 * Created by gregorydrake on 8/3/16.
 */
import {ADD_BOND_NUM} from './types';

export default function addBondNumToOrder(bondnum, bondId, orderNum, index) {
    return {
        type: ADD_BOND_NUM,
        payload: {
            bondnum,
            bondId,
            orderNum,
            index
        }
    }
}