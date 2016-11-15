/**
 * Created by gregorydrake on 9/6/16.
 */
import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import {Row, Col, ListGroup, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router';
import signOutUser from '../../../events/actions/sign_out_user';
import sosBatch from '../../../events/actions/sos_batch';
import datesForReports from '../../../events/actions/dates_for_reports';
import produceReport from './helpers/reportHelper';
import DatesSelector from './containers/DateRangeContainer';

class AdminOrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayTimeSelector: false,
        };
        this.displayTimeSelector = this.displayTimeSelectors.bind(this);
    }

    displayTimeSelectors(boolean) {
        if (boolean == true) {
            this.setState({displayTimeSelector: false})
        } else {
            this.setState({displayTimeSelector: true})
        }
    }

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
                    <Row>
                        <Col xs={2} md={2} lg={2}>
                            <span style={{float:'left'}}><h5>Orders</h5></span>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                        </Col>
                        <Col xs={2} md={2} lg={2}>
                            <Button className="btn-default" onClick={() => Meteor.call("deleteFutureAddTempFuture")}>Do Not Push ME EVER!</Button>
                        </Col>
                        <Col xs={2} md={2} lg={2}>
                            <Button className="btn-default" onClick={() => {this.displayTimeSelectors(this.state.displayTimeSelector)}} style={{float: 'right'}}>Sort by Date</Button>
                        </Col>
                        <Col xs={2} md={2} lg={2}>
                            <Button className="btn-default" onClick={() => produceReport(orders)}>Produce Report</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} md={5} lg={5}>
                        </Col>
                        <Col xs={7} md={7} lg={7}>
                            {this.state.displayTimeSelector == true ? <div className="form-spacer"><DatesSelector handleDates={this.props.datesForReports} /></div>: <div></div> }
                        </Col>

                    </Row>
                </div>
                <Col xs={12} lg={12}>
                    <ListGroup>
                                    {_.isEmpty(orders) || orders == undefined || orders.payload == undefined ? <div>Loading Content</div> :
                                        orders.payload.map(value => {
                                            return (
                                                    <Link className="list-group-item" key={value._id} to={`/adminpanel/${value.orderNumber.orderNumber}`}>
                                                      <div style={{"height": "22px"}}>
                                                        <Col sm={6} md={6} lg={6}>
                                                        <b>Order Number: </b>
                                                        {value.orderNumber.orderNumber}
                                                        </Col>

                                                        <Col sm={6} md={6} lg={6}>
                                                        <b> Customer Name: </b>
                                                        {value.name}
                                                        </Col>
                                                      </div>
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



