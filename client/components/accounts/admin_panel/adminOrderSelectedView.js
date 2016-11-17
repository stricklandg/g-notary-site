/**
 * Created by gregorydrake on 9/6/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Label, Col, Row } from 'react-bootstrap';
import extraInfoSwitch  from './helpers/extraInfoSwitcher';
import findBondInfo from './helpers/findBondInfo';
var moment = require('moment');
import AccountHeader from '../account_header';
import _ from 'lodash';
import AddNumWrapper from './helpers/addBondNumberWrapper';
import {Meteor} from 'meteor/meteor';
var console = window.console || { log: function() {} };
//Account is an authorized route, meaning it cannot be accessed unless the user is logged in.

class AdminOrderSelectedView extends Component {

    constructor(props, context) {
        super(props, context);


        this.handleClick = this.handleClick.bind(this);


        this.state = { show: false };
    }

    handleClick(e) {
        this.setState({ target: e.target, show: !this.state.show });
    }

    render() {
        let date = this.props.order.time.ourtime;
        let {order} = this.props;


        return(
            <div>

                <div className="container">

                    <div className="row">
                        <div className="col-xs-12">
                            <p>


                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <p>
                                <span style={{float:'left'}}>
                                    <p>Order Status: <button type="button" className="label btn btn-info">Pending SOS Approval</button></p>

                    </span>
                                <span style={{float:'right'}}>
                                    <button type="button" className="label btn btn-warning pull-right">Edit</button>

                    </span>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="progress">
                                <div className="progress-bar progress-bar-info progress-barstriped" role="progressbar" aria-value-now="60"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className=".col-xs-12">
                            <span style={{float:'left'}}><h5>Order number: {order.orderNumber.orderNumber}</h5>

                            </span>
                            <span style={{float:'right'}}><h5>Date Ordered: {order.time.ourtime.toString()}</h5>
                            </span>

                        </div>
                    </div>


                    <div className="row">
                            <Panel>
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                        <h5>
                                            Shipping Address
                                        </h5>
                                        <div className="panel-body">
                                            <p>{order.address.name}</p>
                                            <p>{order.address.street}</p>
                                            {_.has(order, "address.street2") ? <p>{order.address.street2}</p> : <div></div>}
                                            <p>{order.address.city}, {order.address.state} {order.address.zip}</p>
                                        </div>
                                </div>
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                    <h5>Payment Method</h5>
                                    <div className="panel-body">
                                        **** **** **** ****
                                    </div>
                                </div>
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                    <h5>Order Summary</h5>
                                    <div className="panel-body">
                                       <p>Item(s) Subtotal: &#36;{parseFloat(order.total.subTotal)}</p>
                                        <p>Shipping: &#36;{parseFloat(order.total.cartShipping).toFixed(2)}</p>
                                        <p>Total before tax: &#36;{(parseFloat(order.total.cartShipping) + parseFloat(order.total.subTotal)).toFixed(2)}</p>
                                        {moment(order.time.ourtime) < moment("20160915 10:24:00", "YYYYMMDD, h:mm:ss a") ?  <p>Tax Requiring Refund: &#36;{parseFloat(order.total.taxTotal)}</p> : <p>Tax For Supplier: &#36;{parseFloat(order.total.taxTotal)}</p>}
                                        <p>Grand Total: &#36;{parseFloat(order.total.cartTotal)}</p>
                                    </div>
                                </div>
                            </Panel>
                    </div>

                    <div className="row">
                        <Panel>
                            <div className="col-xs-10 col-md-10 col-lg-10">
                                <h5>
                                    Items Ordered
                                </h5>
                                <div className="panel-body">
                                    <ul>
                                        {order.products.map(value => value.map((value, index) => {
                                            const bond = findBondInfo(value);
                                            return <Panel key={index} header={<Row>
                                            <Col xs={8} md={8} lg={8}><h4>{value.name}</h4></Col>
                                            <Col xs={4} md={4} lg={4}><h4><Label>{value.price}</Label></h4></Col>
                                            {_.isObject(bond) ? <Col xs={12} md={12} lg={12}>
                                                <AddNumWrapper bondId={bond} orderNum={order.orderNumber.orderNumber} index={index}/>
                                            </Col> : <div></div>}
                                        </Row>}>
                                            <Row>
                                                <Col xs={8}>
                                                    <b>Quantity: </b>{value.quantity}
                                            <p className="text-indent"><b><i>Details :</i></b></p>
                                            {_.toPairs(extraInfoSwitch(value)).map((value, index) => {
                                                    if (_.isObject(value[1])) {
                                                        var valueForReturn = [];
                                                        _.forIn(value[1], function(value, key) {
                                                            valueForReturn.push([key, value]);
                                                        });

                                                   return valueForReturn.map(anArray => {
                                                       return ( <p className="text-indent-2" key={anArray[0]}>{anArray[0]} - {anArray[1]}</p>)
                                                   })

                                                    } else {

                                                        return (<p className="text-indent-2" key={index}>{value[0]} - {value[1]}</p>)

                                                    }

                                            })
                                            }
                                                </Col>
                                            </Row>
                                        </Panel> }))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-2 col-md-2 col-lg-2">
                                <h5></h5>
                                <div className="panel-body">
                                </div>
                            </div>
                        </Panel>
                    </div>

                </div>
            </div>
        )
    }
}

var AdminOrderSelectedViewContainer = connect(null, null)(AdminOrderSelectedView);
export default AdminOrderSelectedViewContainer;

/*
 {_.isObject(bond) ? <Col xs={2} md={2} lg={2}>
 <ButtonToolbar>
 <Button bsStyle="info" onClick={event => this.handleClick(event)}>Add Bond #</Button>

 <Overlay show={this.state.show}
 target={this.state.target}
 placement="bottom"
 container={this}
 containerPadding={20}>
 <Popover id="popover-bottom" title="Add Bond Number">
 <ConnectedAddBondNumForm bondId={value}/>
 </Popover>
 </Overlay>
 </ButtonToolbar>
 </Col> : <div></div>}
 */
