/**
 * Created by gregorydrake on 8/11/16.
 */
import React, { Component } from 'react';
import { destoryForm } from 'redux-form';
import {Grid, Row, Col} from 'react-bootstrap';

//Still need to destroy form somehow
class ReviewOrder extends Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12}>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={12}>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ReviewOrder;