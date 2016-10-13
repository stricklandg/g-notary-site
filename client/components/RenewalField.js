/**
 * Created by gregorydrake on 9/22/16.
 */
/**
 * Created by gregorydrake on 8/29/16.
 */
import React from 'react';
import DatePicker from 'react-datepicker';
import {Alert, Col} from 'react-bootstrap';
var moment = require('moment');


function oneHundredYears(timeDirection) {
    var dateFromToday = null;
    switch (timeDirection) {
        case 'forward':
            dateFromToday = moment().add(90, 'd').format('MM/DD/YYYY');
            break;
        case 'back':
            dateFromToday = moment().subtract(1, 'y').format('MM/DD/YYYY');
            break;
        default:
            dateFromToday = moment();
    }
    return moment(dateFromToday)
}


const renderRenewal = ({ input, placeholder, defaultValue, meta: { touched, error} }) => (
    <div>
        <DatePicker {...input} className="form-control" fixedHeight openToDate={moment()} minDate={oneHundredYears('back')} maxDate={oneHundredYears('forward')} dateFormat='MM/DD/YYYY' isClearable={true} placeholderText="Enter a Date" selected={input.value ? moment(input.value) : null} />
        {touched && error && <div className="form-spacer"><Alert bsStyle="warning">{error}</Alert></div>}
    </div>
);

export default renderRenewal