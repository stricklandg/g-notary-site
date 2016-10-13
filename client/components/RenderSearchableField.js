import React from 'react';
import {Alert, FormControl} from 'react-bootstrap';
import Select from 'react-select';

const renderSelectedInput = ({ input, options, label, type, placeholder, meta: { touched, error} }) => (
   <div>
        <Select {...input} options={options} placeholder={placeholder} onBlur={() => {input.onBlur(input.value)}} />
        {touched && error && <div className="form-spacer"><Alert bsStyle="warning">{error}</Alert></div>}
    </div>
);

export default renderSelectedInput;