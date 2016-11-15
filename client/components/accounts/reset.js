import React, {Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import {FormGroup, Col, Row, Form, Button, FormControl, Alert} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {resetPassChange} from '../../events/actions/reset_occured';
import {Meteor} from 'meteor/meteor';

const renderInput = ({ input, label, type, className, placeholder, meta: { touched, error } }) =>
    <div>
        <FormControl {...input} type={type} className={className} placeholder={placeholder}/>
        {touched && error && <div className="form-spacer"><Alert bsStyle="danger">{error}</Alert></div>}
    </div>;

const submitAction = (values, dispatch) => {
    Meteor.call("resetAccountPassword", values.email);
    browserHistory.push('/resetinprogress')
};


class Reset extends Component {
    componentWillMount() {
        this.props.resetPassChange();
    }
    render() {

        const { handleSubmit } = this.props;
        //Below {...username} breaks down many of the elements that are also on the username object
        //and adds all those as props
        return (

            <Form onSubmit={handleSubmit(values => {return values})}>

                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={4} md={4} lg={3}>
                        <div className="form-spacer">
                            <h2>Reset Password</h2>
                        </div>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8}>
                    </Col>
                </Row>


                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={4} md={4} lg={3}>
                        <FormGroup>
                            <label>Email for Account Password Needing to Be Reset</label>
                            <Field name="email" className="form-control" component={renderInput} type="text" />
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

            </Form>
        );
    }
}

ResetFormActual = reduxForm({
    form: 'SignInForm',
    onSubmitSuccess: submitAction
})(Reset);

var ResetForm = connect(null, {resetPassChange})(ResetFormActual);

export default ResetForm;