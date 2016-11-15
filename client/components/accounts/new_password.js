/**
 * Created by gregorydrake on 11/11/16.
 */
import React, {Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import passwordChanged from '../../events/actions/reset_occured';
import {FormGroup, Col, Row, Form, Button, FormControl, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Accounts.onResetPasswordLink(function(token, done) {
    Session.set("token", token);
    actionToBeDone = done();
});

const validate = values => {
    const errors = {};
    if(!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 5) {
        errors.password = 'Must be 5 characters or more'
    } else if (values.password.search(/[0-9]/) < 0) {
        errors.password = 'Your password must contain at least one number'
    }

    if(!values.repeatpass) {
        errors.repeatpass = 'Please repeat password from above'
    } else if (values.password !== values.repeatpass) {
        errors.repeatpass = 'Passwords do not match'
    }
    return errors
};



const renderInput = ({ input, label, type, className, placeholder, meta: { touched, error } }) =>
    <div>
        <FormControl {...input} type={type} className={className} placeholder={placeholder}/>
        {touched && error && <div className="form-spacer"><Alert bsStyle="danger">{error}</Alert></div>}
    </div>;

    const submitAction = (values, dispatch) => {
        Accounts.resetPassword(values.token, values.values.repeatpass);
        dispatch(passwordChanged())
};


class NewPassword extends Component {
    render() {

        const { handleSubmit, token, resetSuccess } = this.props;
        //Below {...username} breaks down many of the elements that are also on the username object
        //and adds all those as props
        return (

            <Form onSubmit={handleSubmit((values) => {return {values, token}})}>

                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={4} md={4} lg={3}>
                        <div className="form-spacer" />
                            <h2>Reset Password</h2>
                            <div className="form-spacer"/>
                            <h5>Type in your new password in the fields below:</h5>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8}>
                    </Col>
                </Row>


                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={4} md={4} lg={3}>
                        <FormGroup>
                            <label>New Password</label>
                            <Field name="password" className="form-control" component={renderInput} type="password" />
                        </FormGroup>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8} />
                </Row>

                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={4} md={4} lg={3}>
                        <FormGroup>
                            <label>Repeat New Password</label>
                            <Field name="repeatpass" className="form-control" component={renderInput} type="password" />
                        </FormGroup>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8} />
                </Row>

                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={4} md={4} lg={3}>
                        <Button type="submit" className="btn btn-primary">Submit</Button>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8} />
                </Row>
                <div className="form-spacer" />
                <div className="form-spacer" />

                {resetSuccess == true ?
                    <Row>
                        <Col xs={10} sm={6} md={6} lg={6}>
                            <Alert bsStyle="success">Congratulation you have reset your password!  Please log-in with your new password.</Alert>
                        </Col>
                    </Row> :
                    <div></div>
                }

            </Form>
        );
    }
}

NewPasswordFormActual = reduxForm({
    form: 'SignInForm',
    validate,
    onSubmitSuccess: submitAction
})(NewPassword);

function mapStateToProps(state, ownProps) {
    return {
        token: ownProps.params.id,
        resetSuccess: state.passwordReset.value
    }
}

export default NewPasswordForm = connect(mapStateToProps, null)(NewPasswordFormActual);