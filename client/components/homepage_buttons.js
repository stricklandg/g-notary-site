/**
 * Created by gregorydrake on 9/21/16.
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';

import {Grid, Row, Col, Button} from 'react-bootstrap';

const renderButtons = props => {
    const { input: {onChange} } = props;
    return (
        <Grid>
            <Row className="show-grid">
                <Col sm={4} md={4} lg={4}>
                    <div className="center-block">
                        <Button onClick={() => onChange(1)}>Renew Bond</Button>
                        {props.touched && props.error && <span>{props.error}</span>}
                    </div>

                </Col>

                <Col sm={4} md={4} lg={4}>
                    <div className="center-block">
                        <Button onClick={() => onChange(0)}>New Bond</Button>
                        {props.touched && props.error && <span>{props.error}</span>}
                    </div>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <div className="center-block">
                        <Button onClick={() => onChange(0)}>Supplies</Button>
                        {props.touched && props.error && <span>{props.error}</span>}
                    </div>
                </Col>

            </Row>
        </Grid>
    )
};

const OrderFormZeroPage = (props) => {
    const { handleSubmit, value } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="isRenewal" id="isRenewal" type="input" component={renderButtons}/>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'orderwizard',
    destroyOnUnmount: false
})(OrderFormZeroPage)