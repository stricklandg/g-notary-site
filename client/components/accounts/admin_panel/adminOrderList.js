/**
 * Created by gregorydrake on 9/6/16.
 */
import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import {Row, Col, ListGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import _ from 'lodash';
import OverallStats from './overallStats';
import {Link} from 'react-router';
import signOutUser from '../../../events/actions/sign_out_user';
import sosBatch from '../../../events/actions/sos_batch';
import datesForReports from '../../../events/actions/dates_for_reports';

class AdminOrderList extends Component {
    //<div><button onClick={() => {sosBatch()}}>SOS batch</button></div>
    render() {
       var {orders, signOutUser, sosBatch} = this.props;
        return (
            <div>
                <div className="container">
                    <Col xs={10} lg={10}>
                        <div><button onClick={() => {sosBatch()}}>SOS batch</button></div>
                    </Col>
                    <Col xs={2} lg={2} col-lg-offset={2}>
                    </Col>
                </div>
                <div className="container">
                    <OverallStats handleDates={this.props.datesForReports}/>
                </div>
                <Col xs={12} lg={12}>
                    <ListGroup>
                                    {_.isEmpty(orders) || orders == undefined || orders.payload == undefined ? <div>Loading Content</div> :
                                        orders.payload.map(value => {
                                            return (
                                                    <Link className="list-group-item" key={value._id} to={`/adminpanel/${value.orderNumber.orderNumber}`}>
                                                    <b>Order Number: </b>
                                                    {value.orderNumber.orderNumber}
                                                    </Link>
                                                    )
                                                })
                                    }
                    </ListGroup>
                    <button className="btn-default" onClick={()=>signOutUser()}>Sign-Out</button>
                </Col>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.ordersToView
    }
}

var AdminOrderListContainer = connect(mapStateToProps, {signOutUser, sosBatch, datesForReports})(AdminOrderList);

export default AdminOrderListContainer;



