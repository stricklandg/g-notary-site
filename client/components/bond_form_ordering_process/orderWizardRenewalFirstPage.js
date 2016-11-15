/**
 * Created by gregorydrake on 7/16/16.
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {Col, Row, Grid, FormGroup, Form} from 'react-bootstrap';
import renderRenewal from '../RenewalField';
var moment = require('moment');


const validate = values => {
    const errors = {};
    //Date check must be within 90 days please add
    if (!values.renewaldate) {
        errors.renewaldate = 'Required'
    }

    if (values.renewaldate == "Invalid date") {
        errors.renewaldate = 'Invalid Renewal Date, Please Try Again';
    }

    /*if (moment(values.renewaldate).format('MM/DD/YYYY') > moment().add(3, 'months').format('MM/DD/YYYY') || moment(values.renewaldate).format('MM/DD/YYYY') < moment().add(3, 'months').format('MM/DD/YYYY')) {
        errors.renewaldate = "Notary renewal date must be within 90 days of expiration, also check that your date is a valid date."
    } */

    return errors;
}

const OrderFormRenewalFirstPage = (props) => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <div className="form-spacer" />
            <FormGroup>
                <Grid>

                    <Row>
                        <Col sm={2} md={2} lg={2}>
                             <label>Renewal Date</label>
                        </Col>
                        <Col sm={10} md={10} lg={10}>
                            <Field name="renewaldate" component={renderRenewal} defaultValue={moment()}/>
                        </Col>
                    </Row>
                </Grid>
                <div className="form-spacer" />
                <p><b>Please note:</b>  <i>Renewal orders can only be processed 90 days or less prior their expiration date.</i></p>
            </FormGroup>

            <div>
                <button type="submit" className="btn btn-primary">Next</button>
            </div>

        </Form>
    )
};

export default reduxForm({
    form: 'orderwizard',
    validate,
    destroyOnUnmount: false
})(OrderFormRenewalFirstPage)