/**
 * Created by gregorydrake on 8/29/16.
 */
import React from 'react';
import DatePicker from 'react-datepicker';
import {Alert} from 'react-bootstrap';
var moment = require('moment');

function eighteenYearsAgo() {
    var dateFromToday = moment().subtract(18, 'years').format('MM/DD/YYYY');
   return moment(dateFromToday);
}

function oneHundredYears(timeDirection) {
    var dateFromToday = null;
    switch (timeDirection) {
        case 'forward':
            dateFromToday = moment().subtract(18, 'years').format('MM/DD/YYYY');
            break;
        case 'back':
            dateFromToday = moment().subtract(120, 'years').format('MM/DD/YYYY');
            break;
        default:
            dateFromToday = moment();
    }
    return moment(dateFromToday)
}


const renderBirthday = ({ input, placeholder, defaultValue, meta: { touched, error} }) => (
    <div>
        <DatePicker {...input} className="form-control" fixedHeight openToDate={eighteenYearsAgo()} minDate={oneHundredYears('back')} maxDate={oneHundredYears('forward')} dateFormat='MM/DD/YYYY' isClearable={true} placeholderText="Enter a Date" selected={input.value ? moment(input.value) : null} />
        {touched && error && <div className="form-spacer"><Alert bsStyle="warning">{error}</Alert></div>}
    </div>
);

export default renderBirthday