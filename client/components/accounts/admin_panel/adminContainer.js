/**
 * Created by gregorydrake on 7/30/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import subscribe from 'react-meteor-subscribe';
import addObserveeToSaga from '../../../events/actions/add_observee_to_saga';
import stopDBTracker from '../../../events/actions/stop_db_tracker';
import Orders from '../../../../lib/collections/orders';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';
import OverallStats from './overallStats';
import AdminOrderListContainer from './adminOrderList';
import _ from 'lodash';

import AccountHeader from '../account_header';

import signOutUser from '../../../events/actions/sign_out_user';
import makeAdminUser from '../../../events/actions/make_admin_user';

//Account is an authorized route, meaning it cannot be accessed unless the user is logged in.

class AdminPanel extends Component {
    componentWillMount() {
        this.props.addObserveeToSaga([Orders]);
    }

    componentWillUnmount() {
        this.props.stopDBTracker();
    }

    render() {
        let {signOutUser, makeAdminUser, orders} = this.props;
        return(
            <div>

                <h4>Admin Panel</h4>

                {this.props.children}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.ordersToView,
        limit: state.adminPageSorters.limit,
        dateSort: state.adminPageSorters.dateSort
    }
}

let mapStateSubscriptionsToProps = (props) => {
    params = {'time.ourtime': {$gte: new Date(props.dateSort.dateStart), $lte: new Date(props.dateSort.dateEnd)}};
    return {
        'orders': [params]
    }
};

var AdminContainer = connect(mapStateToProps, {signOutUser, makeAdminUser, addObserveeToSaga, stopDBTracker})(subscribe(mapStateSubscriptionsToProps)(AdminPanel));
export default AdminContainer;