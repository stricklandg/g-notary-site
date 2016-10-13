import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormGroup, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import renderAddressSearch from '../../RenderAddressField';

import fetchAddressAutoComplete from '../../../events/actions/fetch_address_autocomplete';


class OrderAddressSearch extends Component {
    render() {
        var {fetchAddressAutoComplete} = this.props;
        return (
            <FormGroup>
                <Col sm={2} md={2}>
                    <div className="form-spacer">
                        <label>Address Search</label>
                    </div>
                </Col>
                <Col sm={10} md={10}>
                    <div className="form-spacer">
                        <Field name="addsearch" fetchAddress={fetchAddressAutoComplete} className="form-control" type="text" component={renderAddressSearch} placeholder="Type your address to start"/>
                    </div>
                </Col>
            </FormGroup>
        )
    }

}

const OrderAddressSearchForm = reduxForm({
    form: 'orderaddsearch',
    destroyOnUnmount: false,
})(OrderAddressSearch);

let AddSearchForm = connect(null, {fetchAddressAutoComplete})(OrderAddressSearchForm);


export default AddSearchForm;



