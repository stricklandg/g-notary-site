/**
 * Created by gregorydrake on 9/6/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Label, Col, Row } from 'react-bootstrap';
import extraInfoSwitch  from './helpers/extraInfoSwitcher';
import AccountHeader from '../account_header';
import _ from 'lodash';

//Account is an authorized route, meaning it cannot be accessed unless the user is logged in.

function quantityById () {

}

class UserOrderSelectedView extends Component {
    render() {
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

                                        </h5>
                                        <div className="panel-body">

                                        </div>
                                </div>
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                    <h5></h5>
                                    <div className="panel-body">
                                    </div>
                                </div>
                                <div className="col-xs-4 col-md-4 col-lg-4">
                                    <h5></h5>
                                    <div className="panel-body">
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
                                        {order.products.map(value => value.map(value => { return <div>
                                            <Col xs={8} md={8} lg={8}><h4>{value.name}</h4><b>Quantity: </b>{value.quantity}</Col>
                                            <Col xs={4} md={4} lg={4}><h4><Label>{value.price}</Label></h4></Col>
                                            <Row>
                                                <Col xs={8}>
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
                                        </div> }))}
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

var UserOrderSelectedViewContainer = connect(null, null)(UserOrderSelectedView);
export default UserOrderSelectedViewContainer;