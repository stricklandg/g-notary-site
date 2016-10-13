/**
 * Created by gregorydrake on 6/22/16.
 */
import React, { Component } from 'react'
import {Row, Col, Grid} from 'react-bootstrap';

export default class Product extends Component {
    render() {
        const { price, quantity, name, image } = this.props;
        return <Grid>
            <Row>
                <Col xs={12} md={12} lg={12}>
            <h4>{name}</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12}>
            <p>{quantity}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12}>
            {image}
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12}>
                <h4>$ {price}</h4>
                </Col>
            </Row>
        </Grid>
    }
}