/**
 * Created by gregorydrake on 9/23/16.
 */
import { SET_PAGE_LIMIT, SET_TIME_SORTER, RETURN_SORTERS } from '../../events/actions/types';
var moment = require('moment-timezone');

//Grab today's time to pass to initial state
let dateToday = moment().startOf('day');
let dateStart = new Date(dateToday).toISOString();
let dateEnd = new Date(moment(dateToday).endOf('day')).toISOString();



const INITIAL_STATE = { limit: 15, dateSort: {dateStart, dateEnd}};

function limitor(state = INITIAL_STATE.limit, action) {
    switch(action.type) {
        case SET_PAGE_LIMIT:
            return { ...state, limit: action.payload };
        default:
            return state;
    }
}

function dateSorter (state=INITIAL_STATE.dateSort, action) {
    switch(action.type) {
        case SET_TIME_SORTER:
            var {begindate, enddate} = action.payload;
            let dateStart = new Date(moment(begindate).startOf('day')).toISOString();
            let dateEnd = new Date(moment(enddate).endOf('day')).toISOString();
            return { dateStart, dateEnd };
        default:
            return state;
    }
}

export default function grabSorters(state = INITIAL_STATE, action) {
    switch(action.type) {
        case RETURN_SORTERS:
            return {
               dateSort: dateSorter(state.dateSort, action),
                limit: limitor(state.limit, action),
            };
        default:
            return {
                dateSort: dateSorter(state.dateSort, action),
                limit: limitor(state.limit, action),
            };
    }
}
