/**
 * Created by gregorydrake on 11/11/16.
 */
import React, {Component} from 'react';
import {Col, Row, Grid, Button, } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ResetInProgress extends Component {
    render() {

        const { handleSubmit } = this.props;
        //Below {...username} breaks down many of the elements that are also on the username object
        //and adds all those as props
        return (

            <Grid>
                <Row>
                    <Col xs={1} />
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="form-spacer">
                            <div className="form-spacer">
                                <h2>Please Check Your Email For A Password Reset Link</h2>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="form-spacer" />
                <div className="form-spacer" />

                <Row>
                        <Col xs={10} sm={4} md={4} lg={3}>
                            <LinkContainer to="/">
                                <Button bsStyle="primary">Back Home</Button>
                            </LinkContainer>
                        </Col>
                    <Col xs={1} sm={7} md={7} lg={8} />
                </Row>
            </Grid>

        );
    }
}

export default ResetInProgress;