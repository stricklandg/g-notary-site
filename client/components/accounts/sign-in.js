/**
 * Created by gregorydrake on 7/12/16.
 */
import React, {Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import signInUser from '../../events/actions/sign_in_user';
import {FormGroup, Col, Row, Form, Button, FormControl, Alert} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const renderInput = ({ input, label, type, className, placeholder, meta: { touched, error } }) =>
    <div>
        <FormControl {...input} type={type} className={className} placeholder={placeholder}/>
        {touched && error && <div className="form-spacer"><Alert bsStyle="danger">{error}</Alert></div>}
    </div>;

const submitAction = (values, dispatch) => {
    dispatch(signInUser(values));
};


class SignIn extends Component {
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
                <h2>Sign In</h2>
                        </div>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8}>
                    </Col>
                </Row>


                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={5} md={5} lg={5}>
                <FormGroup>
                    <label>Username</label>
                    <Field name="username" className="form-control" component={renderInput} type="text" />
                </FormGroup>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8} />
                </Row>

                <Row>
                    <Col xs={1} />
                    <Col xs={10} sm={5} md={5} lg={5}>
                <FormGroup className="form-group">
                    <label>Password</label>
                    <Field name="password" className="form-control" component={renderInput} type="password" />
                </FormGroup>
                    </Col>
                    <Col xs={1} sm={7} md={7} lg={8} />
                </Row>

                <Row>
                    <Col xs={1} />
                    <Col xs={5} sm={3} md={2} lg={3}>
                <Button type="submit" className="btn btn-primary">Submit</Button>
                    </Col>
                    <Col xs={5} sm={5} md={5} lg={4}>
                        <LinkContainer to="passreset">
                            <Button className="btn btn-primary">Forgot Password?</Button>
                        </LinkContainer>
                    </Col>
                </Row>

            </Form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm',
    onSubmitSuccess: submitAction
})(SignIn);

export default SignInForm;