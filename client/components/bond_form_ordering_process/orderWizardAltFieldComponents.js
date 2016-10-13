import React from 'react';
import bowser from 'bowser';
import { Field } from 'redux-form';
import normalizeBirth from './validators/normalizeBirth';

export var altFieldComponents = function(inputToRender) {
    if (bowser.safari) {
        return (
            <Field name="birthdate" className="form-control" type="text" component={inputToRender} placeholder="Month-Day-Year" normalize={normalizeBirth}/>
        )
    } else {
        return (
            <Field name="birthdate" className="form-control" type="date" component={inputToRender} placeholder="Month-Day-Year" />
        )
    }
};