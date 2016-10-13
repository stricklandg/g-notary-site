/**
 * Created by gregorydrake on 9/30/16.
 */
import React, {Component} from 'react';

class ccAddOrder extends Component {
    render() {
        return (
        <Col xs={12} sm={12} md={4} lg={4}>
            <h5>Payment Method</h5>
            <div className="panel-body">
                <FormGroup>
                    <Col sm={12} md={12}>
                        <Field name="ccnumber" className="form-control" type="text" component={renderInput} placeholder="Card Number"/>
                        <div className="form-spacer" />
                    </Col>
                    <Col sm={6} md={6}>
                        <div className="form-spacer">
                            <Field name="exdate" className="form-control" type="text" component={renderInput} placeholder="MM/YY"/>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <div className="form-spacer">
                            <Field name="CVC" className="form-control" type="text" component={renderInput} placeholder="CVC"/>
                        </div>
                    </Col>

                </FormGroup>
            </div>
        </Col>
        )
    }
}