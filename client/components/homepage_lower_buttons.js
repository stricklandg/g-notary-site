/**
 * Created by gregorydrake on 11/14/16.
 */

import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router'
import {bootstrapUtils} from 'react-bootstrap/lib/utils';


bootstrapUtils.addStyle(Button, 'custom');

let customizeButtonCSS = `.btn-custom {
        width: 100%;
        min-width: 100px;
        min-height: 80px;
        margin-top: 25px;
        margin-bottom: 20px;
        background-color: #ffffff;
        color: #000000;
        font: normal 16px/20px 'Arial';
        border-color: #262529;
        border-width: 1px;
        border-radius: 9px;
        white-space: pre-line;
        }`;


class HPLowerButtons extends Component {

    constructor(props) {
        super(props);

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        this.setState({width: width, height: height});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        var {selectNotaryType} = this.props;
        var { width, height} = this.state;

        return (
        <div>
            {width > 767 ? <Grid>
                <Row>
                    <Col sm={4} md={4} lg={3}>
                        <div>
                            <style type="text/css">{customizeButtonCSS}</style>
                            <Button bsStyle="custom" onClick={()=> {selectNotaryType(1); browserHistory.push('/order/notary/')}}>RENEW NOTARY</Button>
                        </div>
                    </Col>

                    <Col sm={4} md={4} lg={6}>
                        <div className="stretch-div">
                            <p className="hold-p">TWO DIFFERENT WAYS TO BECOME A NOTARY PUBLIC</p>
                        </div>
                    </Col>

                    <Col sm={4} md={4} lg={3}>
                        <div>
                            <style type="text/css">{customizeButtonCSS}</style>
                            <Button bsStyle="custom" onClick={()=> {selectNotaryType(0); browserHistory.push('/order/notary/')}}>NEW NOTARY</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div>
                            <h3>Fast, streamlined, online application. Click one of the buttons above to apply for your Texas Notary Renewal or to become a new Texas Notary Public.</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div>
                            <p><i>Texas Notary Bonds and Errors and Omissions insurance policies provided by this agency, Insurors Indemnity General Agency, dba J.P. Everhart & Company are underwritten by Insurors Indemnity Company (A.M. Best A- Excellent rating).</i></p>
                        </div>
                    </Col>
                </Row>
            </Grid> : <Grid>
                <Row>
                    <Col sm={4} md={4} lg={6}>
                        <div className="stretch-div">
                            <p className="hold-p">TWO DIFFERENT WAYS TO BECOME A NOTARY PUBLIC</p>
                        </div>
                    </Col>

                    <Col sm={4} md={4} lg={3}>
                        <div>
                            <style type="text/css">{customizeButtonCSS}</style>
                            <Button bsStyle="custom" onClick={()=> {selectNotaryType(1); browserHistory.push('/order/notary/')}}>RENEW NOTARY</Button>
                        </div>
                    </Col>

                    <Col sm={4} md={4} lg={3}>
                        <div>
                            <style type="text/css">{customizeButtonCSS}</style>
                            <Button bsStyle="custom" onClick={()=> {selectNotaryType(0); browserHistory.push('/order/notary/')}}>NEW NOTARY</Button>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div>
                            <h3>Fast, streamlined, online application. Click one of the buttons above to apply for your Texas Notary Renewal or to become a new Texas Notary Public.</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <div>
                            <p><i>Texas Notary Bonds and Errors and Omissions insurance policies provided by this agency, Insurors Indemnity General Agency, dba J.P. Everhart & Company are underwritten by Insurors Indemnity Company (A.M. Best A- Excellent rating).</i></p>
                        </div>
                    </Col>
                </Row>
            </Grid>}

        </div>
        )
    }
}

export default HPLowerButtons;