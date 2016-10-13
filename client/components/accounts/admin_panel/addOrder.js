/**
 * Created by gregorydrake on 9/29/16.
 */
import React, { Component } from 'react';
import {Grid, Row, Col, Form, FormGroup, Panel, Button} from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import renderSelectedInput from '../../RenderSearchableField';
import {getOrderTotals, getOrderTotalShipping, getOrderTax} from '../../../selector/selector_slices/added_order_selector';
import addOrder from '../../../events/actions/add_order';
import renderInput from '../../RenderField';
var moment = require('moment-timezone');
import _ from 'lodash'


class AddOrder extends Component {

    render() {
        var {creditPayment, total, shipping, tax, eo, packages, supplies} = this.props;
        var ccPayment = null;
        if (!_.has(creditPayment, 'values')) {

        } else {
            if (creditPayment.values.isCredit == "isCredit") {
                ccPayment = "isCredit"
            } else {
                ccPayment = "isNotCredit"
            }
        }
        var addTotal = (parseFloat(total) + parseFloat(shipping)).toFixed(2);
        var totalObject = {subTotal: addTotal, taxTotal: tax, cartTotal: addTotal,  cartShipping: shipping};
        var stateObject = Object.assign({}, eo, packages, supplies);
        return (
            <Grid>
                <Row>
                    <Col xs={12} lg={12}>
                            <span style={{float:'left'}}><h5>Order number: </h5>
                            </span>
                        <span style={{float:'right'}}><h5>Date Ordered: </h5>
                            </span>

                    </Col>
                </Row>


                <Row>
                    <Panel>
                        <Col xs={12} sm={12} md={5} lg={5}>
                            <h5>
                                Shipping Address
                            </h5>
                            <div className="panel-body">

                                <FormGroup>
                                    <Col sm={12} md={12}>
                                        <Field name="name" className="form-control" type="text" component={renderInput} placeholder="Customer's Name"/>
                                        <div className="form-spacer" />
                                    </Col>
                                    <Col sm={12} md={12}>
                                        <Field name="street" className="form-control" type="text" component={renderInput} placeholder="Street"/>
                                        <div className="form-spacer">
                                            <Field name="street2" className="form-control" type="text" component={renderInput} placeholder="Street 2"/>
                                        </div>
                                    </Col>
                                    <Col xs={8} sm={8} md={9} lg={9}>
                                        <div className="form-spacer">
                                            <Field name="city" className="form-control" type="text" component={renderInput} placeholder="City"/>
                                        </div>
                                    </Col>

                                    <Col xs={4} sm={4} md={3} lg={3}>
                                        <div className="form-spacer" />
                                            <Field name="state" className="form-control" type="text" component={renderInput} placeholder="State"/>
                                    </Col>

                                    <Col xs={6} sm={6} md={5} lg={4}>
                                        <div className="form-spacer">
                                            <Field name="zip" className="form-control" type="text" component={renderInput} placeholder="Zip"/>
                                        </div>
                                    </Col>

                                    <Col xs={6} sm={6} md={7} lg={8} />
                                </FormGroup>

                            </div>

                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h5>Payment Method</h5>
                            <div className="panel-body">
                                <FormGroup>
                                    <Col xs={12} md={12} lg={12}>
                                        <div className="checkbox">
                                            <label><Field name="isCredit" type="radio" component="input" value="isCredit"/>
                                                  Credit Card Payment
                                            </label>
                                        </div>

                                        <div className="checkbox">
                                            <label><Field name="isCredit" type="radio" component="input" value="isNotCredit"/>
                                                   Non-Credit Cart Payment
                                            </label>
                                        </div>
                                    </Col>
                                    {ccPayment !== "isCredit" ? <div></div> :
                                    <div>
                                        <Col sm={12} md={12}>
                                            <Field name="ccnumber" className="form-control" type="text" component={renderInput} placeholder="Card Number"/>
                                            <div className="form-spacer" />
                                        </Col>
                                        <Col sm={3} md={3}>
                                            <div className="form-spacer">
                                                <Field name="exdatemonth" className="form-control" type="text" component={renderInput} placeholder="Exp Mon"/>
                                            </div>
                                        </Col>
                                        <Col sm={3} md={3}>
                                            <div className="form-spacer">
                                                <Field name="exdateyear" className="form-control" type="text" component={renderInput} placeholder="Exp Yr"/>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6}>
                                            <div className="form-spacer">
                                                <Field name="CVC" className="form-control" type="text" component={renderInput} placeholder="CVC"/>
                                            </div>
                                        </Col>
                                    </div>}
                                    {ccPayment !== "isNotCredit" ? <div></div> :
                                        <div>
                                            <Col sm={12} md={12}>
                                                <Field name="checknumber" className="form-control" type="text" component={renderInput} placeholder="Check Number"/>
                                                <div className="form-spacer" />
                                            </Col>
                                        </div>}



                                </FormGroup>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}>
                            <h5>Order Summary</h5>
                            <div className="panel-body">
                                <p>Item(s) Subtotal: &#36;{this.props.total}</p>
                                <p>Shipping: &#36;{this.props.shipping}</p>
                                <p>Total before tax: &#36;{(parseFloat(this.props.total) + parseFloat(this.props.shipping)).toFixed(2)}</p>
                                <p>Tax For Supplier: &#36;{this.props.tax}</p>
                                <p>Grand Total: &#36;{(parseFloat(this.props.total) + parseFloat(this.props.shipping)).toFixed(2)}</p>
                            </div>
                        </Col>
                        <Col xs={9} sm={10} md={10} lg={11} />
                        <Col xs={3} sm={2} md={2} lg={1}>
                            <Button bsStyle="success" onClick={() => this.props.addOrder({form: this.props.formSubmit, totals: totalObject, state: stateObject})}>Submit Order</Button>
                        </Col>
                    </Panel>
                </Row>
            </Grid>
        )
    }
}

var AddOrderForm = reduxForm({
    form: 'addorder',
})(AddOrder);

function mapStateToProps(state) {
    return {
        total: getOrderTotals(state),
        shipping: getOrderTotalShipping(state),
        tax: getOrderTax(state),
        creditPayment: state.form.addorder,
        formSubmit: state.form,
        supplies: state.supplies,
        eo: state.eo,
        packages: state.packages
    }
}



export default AddOrderFormContainer = connect(mapStateToProps, {addOrder})(AddOrderForm);