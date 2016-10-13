/**
 * Created by gregorydrake on 9/6/16.
 */
import React, {Component} from 'react';
import {Row, Col, ListGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import _ from 'lodash';
import OverallStats from './overallStats';
import {Link} from 'react-router';
import signOutUser from '../../../events/actions/sign_out_user';
import makeAdminUser from '../../../events/actions/make_admin_user';

class UserOrderList extends Component {
    render() {
       var {orders, signOutUser, makeAdminUser} = this.props;
        return (
            <div>
                <div className="container">
                </div>
                <Col xs={12} lg={12}>
                    <ListGroup>
                                    {_.isEmpty(orders) || orders == undefined || orders.payload == undefined ? <div>Loading Content</div> :
                                        orders.payload.map(value => {
                                            return (
                                                    <Link className="list-group-item" key={value._id} to={`/userpanel/${value.orderNumber.orderNumber}`}>
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

var UserOrderListContainer = connect(mapStateToProps, {signOutUser, makeAdminUser})(UserOrderList);

export default UserOrderListContainer;



