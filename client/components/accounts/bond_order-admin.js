/**
 * Created by gregorydrake on 8/5/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountHeader from './account_header';

import signOutUser from '../../events/actions/sign_out_user';
import makeAdminUser from '../../events/actions/make_admin_user';

//Account is an authorized route, meaning it cannot be accessed unless the user is logged in.

class OrderDetailsAdmin extends Component {
    render() {
        let {signOutUser, makeAdminUser} = this.props;
        return(
            <div>

                <div className="container">

                    <div className="row">
                        <div className="col-xs-18">
                            <p>


                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-18">
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
                    <div className="col-xs-18">
                    <div className="progress">
                        <div className="progress-bar progress-bar-info progress-barstriped" role="progressbar" aria-value-now="60"
                        aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
                            <span className="sr-only">60% Complete</span>
                        </div>
                    </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className=".col-xs-18">
                            <span style={{float:'left'}}><h5>Bond #2315</h5>
                            </span>
                            <span style={{float:'right'}}><h5>Date Ordered: 08/16/2016</h5>
                            </span>

                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xs-6 col-md-3 col-lg-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">Order Number:</div>
                                <div className="panel-body">
                                    NB000001-A
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-6 col-md-3 col-lg-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">Order Info:</div>
                                <div className="panel-body">
                                    <ul><li><span><h5>Package Type: </h5>E</span></li>
                                    <li><p><h5>Additional Supplies: </h5>Stamp<p>Seal</p></p></li></ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-6 col-md-3 col-lg-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">Name of Customer</div>
                                <div className="panel-body">
                                    Greg Drake
                                </div>
                            </div>
                        </div>


                        <div className="col-xs-6 col-md-3 col-lg-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">Contact Info:</div>
                                <div className="panel-body">
                                    <ul><li><h5>Email: </h5><p className="blue underlineAnnotation">gregory.drake@me.com</p></li></ul>
                                    <ul><li><h5>Phone: </h5><p>512-923-6236</p></li></ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-6 col-md-3 col-lg-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">Address on Bond</div>
                                <div className="panel-body">
                                    <ul><li><span><h5>Street: </h5>2424 Byrd Ranch Rd.</span></li></ul>
                                    <ul><li><p><h5>City: </h5>Johnson City</p></li></ul>
                                    <ul><li><p><h5>State: </h5>TX  </p><p><h5>Zip: </h5>78636</p></li></ul>
                                </div>
                            </div>
                        </div>
                </div>

                    <div className="row">
                        <div className="col-xs-18">
                            <div className="panel panel-primary">
                                <div className="panel-heading"><h5>Log</h5></div>
                                <table className="table">
                                    <tr>
                                    <th>#</th>
                                    <th>Event Type</th>
                                    <th>Trigger</th>
                                    <th>Description</th>
                                </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Note</td>
                                        <td>Agent - Nicole</td>
                                        <tds>Customer called</tds>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Auto-Order</td>
                                        <td>Sent to SOS</td>
                                        <td>Order has been sent to SOS</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Auto-Order</td>
                                        <td>Pending SOS Review</td>
                                        <td>Order is awaiting SOS approval</td>
                                    </tr>
                                </table>


                            </div>



                        </div>
                    </div>

            </div>
            </div>
        )
    }
}

var OrderDetailsAdminContainer = connect(null, {signOutUser, makeAdminUser})(OrderDetailsAdmin);
export default OrderDetailsAdminContainer;