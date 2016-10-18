/**
 * Created by gregorydrake on 6/15/16.
 */
import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {FormGroup, Col, Row, Form, Button, FormControl, Alert, Clearfix} from 'react-bootstrap';
import registerUser from '../../events/actions/register_user';
import asyncValidate from '../../events/events/asyncValidate';
import _ from 'lodash';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length < 5) {
        errors.username = 'Must be 5 characters or more'
    } else if (values.username.search(/(.*[a-z]){2}/i) < 0) {
        errors.username = 'Must include at least 1 alphabetical character'
    }


    var email_pattern = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;

    if (!values.email) {
        errors.email = 'Required'
    } else if (email_pattern.test(values.email) == false) {
        errors.email = 'Email is invalid'
    }

    if(!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 5) {
        errors.password = 'Must be 5 characters or more'
    } else if (values.password.search(/[0-9]/) < 0) {
        errors.password = 'Your password must contain at least one number'
    }

    if(!values.repeatPassword) {
        errors.repeatPassword = 'Please repeat password from above'
    } else if (values.password !== values.repeatPassword) {
        errors.repeatPassword = 'Passwords do not match'
    }
    return errors
};

const renderInput = ({ input, label, type, className, placeholder, meta: { touched, error } }) =>
    <div>
        <FormControl {...input} type={type} className={className} placeholder={placeholder}/>
        {touched && error && <div className="form-spacer"><Alert bsStyle="danger">{error}</Alert></div>}
    </div>;

const dispatchSubmit = (actionCreator, dispatch) => values => {
    return new Promise((resolve, reject) => {
        dispatch(actionCreator(values, resolve, reject));
    })
};


class SignUp extends Component {

    render() {

        const { handleSubmit, dispatch, error } = this.props;
        //Below {...username} breaks down many of the elements that are also on the username object
        //and adds all those as props
        return (
            <div className="jumbotron-body-wrapper">

                <Form onSubmit={handleSubmit(values => {
                    let promise = dispatchSubmit(registerUser, dispatch)(values);
                   return promise.then((value) => {}, error => {
                            throw new SubmissionError({email: `${error.payload.error}`})
                    })
                })
                }>

                    <Row>
                        <Col xs={1} />
                        <Col xs={10} sm={4} md={4} lg={3}>
                            <div className="form-spacer">
                            <h2>Sign up</h2>
                            </div>
                        </Col>
                        <Col xs={1} sm={7} md={7} lg={8} />
                    </Row>

                    <Row>
                        <Col xs={1} />
                        <Col xs={10} sm={4} md={4} lg={3}>
                    <FormGroup>
                        <label>Username</label>
                        <Field name="username" className="form-control" component={renderInput} type="text" placeholder="Username" />
                    </FormGroup>
                        </Col>
                        <Col xs={1} sm={7} md={7} lg={8} />
                    </Row>


                    <Row>
                        <Col xs={1} />
                        <Col xs={10} sm={4} md={4} lg={3}>
                    <FormGroup>
                        <label>Email</label>
                        <Field name="email" className="form-control" component={renderInput} type="email" placeholder="Email Address"/>
                    </FormGroup>
                        </Col>
                        <Col xs={1} sm={7} md={7} lg={8} />
                    </Row>

                    <Row>
                        <Col xs={1} />
                        <Col xs={10} sm={4} md={4} lg={3}>

                    <FormGroup>
                        <label>Password</label>
                        <Field name="password" className="form-control" component={renderInput} type="password" placeholder="Password"/>
                        <div className="form-spacer" />
                        <label>Repeat Password</label>
                        <Field name="repeatPassword" className="form-control" component={renderInput} type="password" placeholder="Repeat Password"/>
                    </FormGroup>
                        </Col>
                        <Col xs={1} sm={7} md={7} lg={8} />
                    </Row>

                    <Row>
                        <Col xs={1} />
                        <Col xs={10} sm={4} md={4} lg={3}>
                    {error && <strong>{error}</strong>}
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                        </Col>
                        <Col xs={1} sm={7} md={7} lg={8} />
                    </Row>

                </Form>

            </div>

        );
    }
}

const SignUpForm = reduxForm({
    form: 'LogInForm',
    validate,
    asyncValidate
})(SignUp);

const ConnectedSignUpForm = connect(null, null)(SignUpForm);

export default ConnectedSignUpForm;