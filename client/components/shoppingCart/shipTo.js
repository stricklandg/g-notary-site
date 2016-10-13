/**
 * Created by gregorydrake on 9/9/16.
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { change } from 'redux-form/lib/actions';
import {Form, Col, FormGroup, Clearfix, ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Select } from 'react-select';
import normalizePhone from '../bond_form_ordering_process/validators/normalizePhone';


import _ from 'lodash';
import { addressToLoad, clearAddressList } from '../../events/actions/fetch_address_autocomplete';
import AddSearchForm from '../bond_form_ordering_process/helpers/GoogleAddressAutoFill';

import renderInput from '../RenderField';

const validate = values => {
    const errors = {};
    if (!values.street) {
        errors.street = 'Required'
    } else if (values.street.search(/(.*[a-z]){2}/i) < 0) {
        errors.street = 'Must include at least 1 alphabetical character'
    }

    if (!values.city) {
        errors.city = 'Required'
    } else if (values.city.search(/(.*[a-z]){2}/i) < 0) {
        errors.city = 'Must include at least 1 alphabetical character'
    }

    if (!values.state) {
        errors.state = 'Required'
    } else if (values.state.search(/(.*[a-z]){2}/i) < 0) {
        errors.state = 'Must include at least 1 alphabetical character'
    }

    if (!values.zip) {
        errors.zip = 'Required'
    } else if (values.zip.search(/(.*[0-9]){5}/i) < 0) {
        errors.zip = 'Must include at least 5 digits'
    }

    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.search(/(.*[a-z]){2}/i) < 0) {
        errors.name = 'Must include at least 1 alphabetical character'
    }

    if (!values.telephone) {
        errors.telephone = 'Required';
    } else if (values.telephone.length < 12) {
        errors.telephone = 'Number is too short';
    }

    return errors
};

const addArrayForum = (addSearch, changer, dispatcher, clearList) => {
    addArray = _.values(addSearch);
    var fieldArray = ['street', 'city', 'state', 'zip'];
    return addArray.map(values => {
            //Refactor soon
            var termGroup = _.cloneDeep(values.terms);
            var valueOne = termGroup[0].value;
            var valueTwo = termGroup[1].value;
            var stringCombo = valueOne + " " + valueTwo;
            termGroup[0] = {value: stringCombo};
            termGroup.splice(1, 1);
            termGroup.splice(3, 1);
            values.terms = termGroup;
            return <ListGroupItem key={values.id} onClick={() => { values.terms.forEach((value, index) => dispatcher(changer(fieldArray[index], value.value))); dispatcher(change('orderaddsearch', 'addsearch', values.description)); clearList(); }}>{values.description}</ListGroupItem>
        }
    )
}

const ShippingForm = (props) => {
    const { handleSubmit, addSearch, change, dispatch, clearAddressList} = props;
    return (
        <Form onSubmit={handleSubmit}>

            <FormGroup>
            <Col sm={2} md={2}>
                <div className="form-spacer">
                    <label>Name</label>
                </div>
            </Col>
            <Col sm={10} md={10}>
                <div className="form-spacer">
                    <Field name="name" className="form-control" type="text" component={renderInput} placeholder="Name on Order"/>
                </div>
            </Col>

            </FormGroup>
            <div className="form-spacer"/>

            <FormGroup>
                <Col sm={2} md={2}>
                    <div className="form-spacer">
                        <label>Telephone</label>
                    </div>
                </Col>
                <Col sm={10} md={10}>
                    <div className="form-spacer">
                        <Field name="telephone" className="form-control" type="text" component={renderInput} placeholder="(xxx)-xxx-xxxx" normalize={normalizePhone}/>
                    </div>
                </Col>
            </FormGroup>
            <div className="form-spacer"/>


            <FormGroup>
                <AddSearchForm/>
                {_.isEmpty(addSearch) ? <div></div> :
                    <FormGroup>
                        <Col sm={10} smOffset={2} md={10} mdOffset={2}>
                            <ListGroup>{addArrayForum(addSearch, change, dispatch, clearAddressList)}</ListGroup>
                        </Col>
                    </FormGroup>}
            </FormGroup>

            <FormGroup>
                <Col sm={12} md={12}>
                    <label>Shipping Address</label>
                </Col>

                <Col sm={12} md={12} lg={12}>
                    <Field name="street" className="form-control" type="text" component={renderInput} placeholder="Street"/>
                    <div className="form-spacer">
                        <Field name="street2" className="form-control" type="text" component={renderInput} placeholder="Street 2"/>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <div className="form-spacer">
                        <Field name="city" className="form-control" type="text" component={renderInput} placeholder="City"/>
                    </div>
                </Col>

                <Col xs={3} sm={3} md={3} lg={3}>
                    <div className="form-spacer">
                        <Field name="state" className="form-control" type="text" component={renderInput} placeholder="State"/>
                    </div>
                </Col>

                <Col xs={3} sm={3} md={3} lg={3}>
                    <div className="form-spacer">
                        <Field name="zip" className="form-control" type="text" component={renderInput} placeholder="Zip"/>
                    </div>
                </Col>

            </FormGroup>
            <div className="form-spacer"/>


        </Form>
    )
};

ShippingFormContainer = reduxForm({
    form: 'shippingInfo',
    validate
})(ShippingForm);

export default connect(
    state => ({
        addSearch: state.addSearch
    }), {addressToLoad, change, clearAddressList})(ShippingFormContainer);
