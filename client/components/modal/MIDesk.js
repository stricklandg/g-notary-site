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

export function ModalBodyConstructorDeskSign(props) {

    class MIStamp extends Component {


        render() {
            var {hasExistingNotaryInfo} = this.props;
            return (
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your Sign</h4>
                        </Col>
                    </Row>
                    <Row>
                            <Col xs={12} md={12} lg={12}>
                                <label>What name should be displayed on your desk sign?</label>
                            </Col>
                    </Row>
                    <Row>
                            <Col xs={8} md={8} lg={8}>
                                    <Field name="notaryname" type="text" component={renderInput}
                                           placeholder="Notary's Name"/>
                            </Col>
                    </Row>
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