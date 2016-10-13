/**
 * Created by gregorydrake on 7/15/16.
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderInput from '../RenderField';
import {Form, Col, FormGroup, Clearfix} from 'react-bootstrap';
import normalizePhone from './validators/normalizePhone';
import normalizeSocial from './validators/normalizeSocialSecurity';
import renderBirthday from '../BirthdayField';
var moment = require('moment');

function dateStringValidator(dateValue, errors) {
    var formDate = new Date(dateValue);
    var dateFromToday = moment().subtract(18, 'years').format('MM/DD/YYYY');
    var compareDate = new Date(dateFromToday);
    if (formDate > compareDate) {
        errors.birthday = 'Date is Invalid';
    }
    }


const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.search(/(.*[a-z]){2}/i) < 0) {
        errors.firstName = 'Must include at least 2 alphabetical character'
    }

    if (values.middleName) {
        if (values.middleName.search(/(.*[a-z]){1}/i) < 0) {
            errors.middleName = 'Must include at least 1 alphabetical character'
        }
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.search(/(.*[a-z]){2}/i) < 0) {
        errors.lastName = 'Must include at least 2 alphabetical character'
    }

    //Need to have this format as they type
    if (!values.socialsecurity) {
        errors.socialsecurity = 'Required';
    } else if (values.socialsecurity.length < 11) {
        errors.socialsecurity = 'Number is too short';
    }

    if (!values.birthday) {
        errors.birthday = 'Required';
    }

    if (values.birthday == "Invalid date") {
        errors.birthday = 'Invalid Birthday, Please Try Again';
    }

    dateStringValidator(values.birthday, errors);

    //Format as they type
    if (!values.telephone) {
        errors.telephone = 'Required';
    } else if (values.telephone.length < 12) {
        errors.telephone = 'Number is too short';
    }

    return errors
};

const OrderFormFirstPage = (props) => {
    const { handleSubmit } = props;
    var initialValueBirthday = moment(moment().subtract(18, 'years').format('MM/DD/YYYY'));

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <div className="form-spacer">
                <Col sm={2} md={2}>
                    <label>Name</label>
                </Col>
                </div>
                <Col sm={10} md={10}>
                    <div className="form-spacer">
                <Field name="firstName" className="form-control" type="text" component={renderInput} placeholder="First Name"/>
                    </div>
                    <div className="form-spacer">
                <Field name="middleName" className="form-control" type="text" component={renderInput} placeholder="Middle Name"/>
                    </div>
                    <div className="form-spacer">
                <Field name="lastName" className="form-control" type="text" component={renderInput} placeholder="Last Name"/>
                    </div>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col sm={2} md={2}>
                    <div className="form-spacer">
                <label>Social Security Number</label>
                    </div>
                </Col>

                <Col sm={10} md={10}>
                    <div className="form-spacer">
                <Field name="socialsecurity" className="form-control" type="text" component={renderInput} placeholder="xxx-xx-xxxx" normalize={normalizeSocial}/>
                    </div>
                </Col>
            </FormGroup>

            <FormGroup>
               <Clearfix visibleMdBlock />
                <Clearfix visibleSmBlock/>
                <Col sm={2} md={2} lg={2}>
                    <div className="form-spacer">
                    <label>Birth Date</label>
                    </div>
                </Col>
                <Col sm={10} md={10} lg={10}>
                    <div className="form-spacer">
                <Field name="birthday" component={renderBirthday} defaultValue={initialValueBirthday}/>
                    </div>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col sm={2} md={2}>
                    <div className="form-spacer">
                    <label>Telephone</label>
                    </div>
                </Col>
                <Col sm={10} md={10}>
                    <div className="form-spacer">
                <Field name="telephone" className="form-control" type="tel" component={renderInput} placeholder="(xxx)-xxx-xxxx" normalize={normalizePhone}/>
                    </div>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={2} md={2} lg={2}>
                <button type="submit" className="btn btn-primary">Next</button>
                </Col>
            </FormGroup>

        </Form>


    )
};

export default reduxForm({
    form: 'orderwizard',
    validate,
    destroyOnUnmount: false
})(OrderFormFirstPage)

/* <div className="form-group">
 <label>Birth Date</label>
 {altFieldComponents(renderInput)}
 </div> */
