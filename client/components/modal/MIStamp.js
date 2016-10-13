/**
 * Created by gregorydrake on 8/14/16.
 */
//MI stands for modal insert
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import { Field, formValueSelector } from 'redux-form';
import {destroy} from 'redux-form/lib/actions';
import renderInput from '../RenderField';

export function ModalBodyConstructorStamp(props) {

    class MIStamp extends Component {


        render() {
            var {hasExistingNotaryInfo} = this.props;
            return (
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your Stamp</h4>
                        </Col>
                    </Row>
                    <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name="hasExistingNotaryInfo" type="checkbox" component="input"/>
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>Place Your Existing Notary Information on the Stamp?</label>
                            </Col>
                    </Row>
                    {hasExistingNotaryInfo && hasExistingNotaryInfo == true &&
                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name="notarynumber" type="text" component={renderInput}
                                           placeholder="Notary Number"/>
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name="notaryexpirationdate" type="text" component={renderInput}
                                           placeholder="Expiration Date"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} md={8} lg={8}>
                                <div>
                                    <label>Name on Stamp</label>
                                    <Field name="notaryname" type="text" component={renderInput}
                                           placeholder="Name on Stamp"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    }
                    <div className="form-spacer">
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                                <Field name="notregistered" type="checkbox" component="input"/>
                        </Col>
                        <Col xs={10} md={11} lg={11}>
                                <label>I am registering to become a Notary today through JP Everhart</label>
                        </Col>
                    </Row>
                    </div>
                </Grid>
            );
        }
    }

    const selector = formValueSelector(`${props}`);

    const ModalWrapper = connect(state => {
        const hasExistingNotaryInfo = selector(state, 'hasExistingNotaryInfo');
        return {
            hasExistingNotaryInfo,
        }
    })(MIStamp);

    return (<ModalWrapper/>);

}

/*<Row>
 <Col xs={1} md={1} lg={1}>
 <Field name="donotremember" type="checkbox" component="input"/>
 </Col>
 <Col xs={10} md={11} lg={11}>
 <label>I am a Notary Public, but do not have my information available</label>
 </Col>
 </Row> */