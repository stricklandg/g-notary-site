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

export function ModalBodyConstructor(props) {

    class MIEO extends Component {

        render() {

            return (
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your EO</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name="hasExistingNotaryInfo" type="checkbox" component="input" />
                        </Col>
                        <Col xs={10} md={11} lg ={11}>
                            <label>Select Your Bond Policy</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                                <Field name="donotremember" type="checkbox" component="input" />
                        </Col>
                        <Col xs={10} md={11} lg={11}>
                                <label>Do Not Have a Bond Policy Yet?</label>
                        </Col>
                    </Row>
                    {this.props.hasExistingNotaryInfo && this.props.hasExistingNotaryInfo == true &&
                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name="notarynumber" type="text" component={renderInput} placeholder="Notary Number" />
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name="notaryexpirationdate" type="text" component={renderInput} placeholder="Expiration Date" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    }
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
    })(MIEO);

    return (<ModalWrapper/>);

}