import React from 'react';
import {Alert, FormControl} from 'react-bootstrap';

const renderInput = ({ input, label, type, placeholder, className, meta: { touched, error} }) => (
    <div>
        <FormControl {...input} type={type} className={className} placeholder={placeholder} />
        {touched && error && <div className="form-spacer"><Alert bsStyle="warning">{error}</Alert></div>}
    </div>
);

export default renderInput;