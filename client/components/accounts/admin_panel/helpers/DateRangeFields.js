/**
 * Created by gregorydrake on 8/29/16.
 */
import React from 'react';
import DatePicker from 'react-datepicker';
import {Alert} from 'react-bootstrap';
var moment = require('moment');
import _ from 'lodash';

function onChangeStart(object) {
    if (object.input.value) {
        return moment(object.input.value)
    } else {
        return object.customProp.startDate
    }
}

function onChangeEnd(object) {
    if (object.input.value) {
        return moment(object.input.value)
    } else {
        return object.customProp.endDate
    }
}


export const renderBeginDate = ({ input, placeholder, customProp, defaultValue, meta: { touched, error} }) => {
    return (
    <div>
        <DatePicker {...input} className="form-control" fixedHeight onChange={(x = onChangeStart({input, customProp})) => { customProp.onChangeStart(x); input.onChange(x.toString())}} startDate={customProp.startDate} endDate = {customProp.endDate} dateFormat='MM/DD/YYYY' isClearable={true} placeholderText="Enter a Date" selected={input.value ? moment(input.value) : customProp.startDate} />
        {touched && error && <div className="form-spacer"><Alert bsStyle="warning">{error}</Alert></div>}
    </div>
)};

export const renderEndDate = ({ input, placeholder, defaultValue, customProp, meta: { touched, error} }) => (
    <div>
        <DatePicker {...input} className="form-control" fixedHeight onChange={(x = onChangeEnd({input, customProp})) => {customProp.onChangeEnd(x); input.onChange(x.toString())}} startDate={customProp.startDate} endDate = {customProp.endDate}  dateFormat='MM/DD/YYYY' isClearable={true} placeholderText="Enter a Date" selected={input.value? moment(input.value) : customProp.endDate} />
        {touched && error && <div className="form-spacer"><Alert bsStyle="warning">{error}</Alert></div>}
    </div>
);