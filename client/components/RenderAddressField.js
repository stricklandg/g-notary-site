import React from 'react';
import {Alert, FormControl} from 'react-bootstrap';

const renderAddressSearch =({ input, fetchAddress, type, placeholder, className, meta: { touched, error} }) => {
    return (
    <div>
        <FormControl {...input} onChange={value => { input.onChange(value); fetchAddress(input.value)}} type={type} className={className} placeholder={placeholder} />
        {touched && error && <Alert bsStyle="warning">{error}</Alert>}
    </div>
)};

export default renderAddressSearch;