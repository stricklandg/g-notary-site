/**
 * Created by gregorydrake on 7/15/16.
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {Form, Col, FormGroup, Clearfix, ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Select } from 'react-select';

import renderSelectedInput from '../RenderSearchableField';
import normalizeDL from './validators/normalizeDL';
import newCArray from '../../listOfCounties';

import renderInput from '../RenderField';

const validate = values => {
    const errors = {};
    if (!values.street) {
        errors.street = 'Required'
    } else if (values.street.search(/(.*[a-z]){1}/i) < 0) {
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

    if (!values.county) {
        errors.county = 'Required'
    }

    if (!values.driverlicense) {
        errors.driverlicense = 'Required'
    } else if (values.driverlicense.search(/(.*[0-9]){8}/i) < 0) {
        errors.driverlicense = 'Must be 8 digits'
    }

    //Need to have this format as they type
    if (!values.issuingstate) {
        errors.issuingstate = 'Required';
    }

    return errors
};

const OrderFormSecondPage = (props) => {
    const { handleSubmit, previousPage} = props;
    return (
        <Form onSubmit={handleSubmit}>

            <FormGroup>
                <Clearfix visibleSmBlock/>
                    <Col sm={2} md={2}>
                        <label>Mailing Address</label>
                    </Col>

                <Col sm={10} md={10}>
                    <Field name="street" className="form-control" type="text" component={renderInput} placeholder="Street"/>
                    <div className="form-spacer">
                    <Field name="street2" className="form-control" type="text" component={renderInput} placeholder="Street 2"/>
                    </div>
                </Col>
                <Clearfix visibleSmBlock/>
                <Col xs={6} sm={5} smOffset={2} md={5} mdOffset={2} lg={5} lgOffset={2}>
                    <div className="form-spacer">
                    <Field name="city" className="form-control" type="text" component={renderInput} placeholder="City"/>
                    </div>
                </Col>

                <Col xs={3} sm={2} md={2} lg={2}>
                    <div className="form-spacer">
                    <Field name="state" className="form-control" type="text" component={renderInput} placeholder="State"/>
                    </div>
                </Col>

                <Col xs={3} sm={3} md={3} lg={3}>
                    <div className="form-spacer">
                    <Field name="zip" className="form-control" type="text" component={renderInput} placeholder="Zip"/>
                    </div>
                </Col>

                <Col sm={10} smOffset={2} md={10} mdOffset={2}>
                    <Field name="county" options={newCArray} component={renderSelectedInput} placeholder="County"/>
                </Col>
            </FormGroup>

            <FormGroup>
                    <Col sm={2} md={2}>
                <div className="form-spacer">
                    <label>Email</label>
                </div>
            </Col>
                <Col sm={10} md={10}>
                    <div className="form-spacer">
                        <Field name="email" className="form-control" type="email" component={renderInput} placeholder="Email"/>
                    </div>
                </Col>

            </FormGroup>

            <FormGroup>
                    <Col sm={2} md={2}>
                        <div className="form-spacer">
                <label>Driver's License</label>
                        </div>
                    </Col>

                    <Col xs={8} sm={6} md={6}>
                <Field name="driverlicense" className="form-control" type="text" component={renderInput} placeholder="Driver's License" normalize={normalizeDL}/>
                    </Col>
                    <Col xs={4} sm={4} md={4}>
                <Field name="issuingstate" className="form-control" type="text" component={renderInput} placeholder="Issuing State"/>
                    </Col>
            </FormGroup>


            <FormGroup>
                <Clearfix visibleSmBlock visibleMdBlock visibleLgBlock/>
                <Col xs={4} sm={4} md={2} lg={2}>
            <div className="form-spacer">
                <button type="button" className="btn btn-secondary" onClick={previousPage}>Previous</button>
                <button type="submit" className="btn btn-primary">Next</button>
            </div>
                </Col>
            </FormGroup>
        </Form>
    )
};

OrderFormPageTwo = reduxForm({
    form: 'orderwizard',
    validate,
    destroyOnUnmount: false
})(OrderFormSecondPage);

//const selector = formValueSelector('orderaddsearch');


export default connect(null, null)(OrderFormPageTwo);
