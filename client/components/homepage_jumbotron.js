/**
 * Created by gregorydrake on 7/15/16.
 */
import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {connect} from 'react-redux'
import pageReset from '../events/actions/pageReset';
import selectNotaryType from '../events/actions/select_notary_type';
import {destroy} from 'redux-form/lib/actions';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import {bootstrapUtils} from 'react-bootstrap/lib/utils';
import {browserHistory} from 'react-router'

bootstrapUtils.addStyle(Button, 'custom');

let customizeButtonCSS = `.btn-custom {
        width: 100%;
        min-width: 220px;
        min-height: 168px;
        margin-top: 25px;
        margin-bottom: 20px;
        box-shadow: -13px 18px 18px 4px rgba(0, 0, 0, 0.3);
        background-color: #ffffff;
        color: #000000;
        font: normal 30px/38px 'Arial';
        border-color: #0053A0;
        border-width: 3px;
        border-radius: 18px;
        white-space: pre-line;
        }`;

class mainScreen extends Component {

    componentWillMount() {
        this.props.pageReset(); this.props.destroy('orderwizard'); this.props.destroy('packageOrderForm');
    }

    render() {
        let { selectNotaryType } = this.props;
    return (
        <Jumbotron>
            <div className="jumbotron-body-wrapper">
                <Grid>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className="center-block">
                            <div className="banner"><p>For over 30 years, J.P. Everhart & Company has been providing bonding services to Texans.
                            </p>
                            </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div className="center-block">
                                <h2 className="jumbotron-header">Become a new Texas Notary with Packages starting at $104.99</h2>
                                    <p>
                                    Click any option below to get started:
                                    </p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                            <Col sm={4} md={4} lg={4}>
                                <div className="center-block">
                                    <style type="text/css">{customizeButtonCSS}</style>
                                    <Button bsStyle="custom" onClick={()=> {selectNotaryType(1); browserHistory.push('/order/notary/')}}>Renew Notary Public</Button>
                                </div>

                            </Col>

                            <Col sm={4} md={4} lg={4}>
                                <div className="center-block">
                                    <style type="text/css">{customizeButtonCSS}</style>
                                    <Button bsStyle="custom" onClick={()=> {selectNotaryType(0); browserHistory.push('/order/notary/')}}>New Notary Public</Button>
                                </div>
                            </Col>

                            <Col sm={4} md={4} lg={4}>
                                <div className="center-block">
                                    <style type="text/css">{customizeButtonCSS}</style>
                                    <Button bsStyle="custom" onClick={()=> browserHistory.push('/shop/supplies/')}>Notary Supplies</Button>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <div className="jumbotron-lower-text">
                            <h3>Fast, streamlined, online application. Click one of the buttons above to apply for your Texas Notary Renewal or to become a new Texas Notary Public.</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <div className="jumbotron-footer-text">
                                <p><i>Texas Notary Bonds and Errors and Omissions insurance policies provided by this agency, Insurors Indemnity General Agency, dba J.P. Everhart & Company are underwritten by Insurors Indemnity Company (A.M. Best A- Excellent rating).</i></p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </Jumbotron>
    );
    }
}

var mainJumbo = connect(null, {pageReset, destroy, selectNotaryType})(mainScreen);

export default mainJumbo;
