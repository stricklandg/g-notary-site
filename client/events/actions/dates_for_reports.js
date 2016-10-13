/**
 * Created by gregorydrake on 10/12/16.
 */
import { SET_TIME_SORTER } from './types'

export default function datesForReports(dates) {
    return {
        type: SET_TIME_SORTER,
        payload: dates
    }
}