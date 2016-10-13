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
import _ from 'lodash';

import AccountHeader from '../account_header';

import signOutUser from '../../../events/actions/sign_out_user';
import makeAdminUser from '../../../events/actions/make_admin_user';

//Account is an authorized route, meaning it cannot be accessed unless the user is logged in.

class UserPanel extends Component {
    componentWillMount() {
        this.props.addObserveeToSaga([Orders])
    }

    componentWillUnmount() {
        this.props.stopDBTracker();
    }

    render() {
        let {orders} = this.props;
        return(
            <div>

                <h4>User Panel</h4>

                {this.props.children}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.ordersToView
    }
}

let mapStateSubscriptionsToProps = (props) => {
    return {
        ['orders']: []
    }
};

var UserContainer = connect(mapStateToProps, {addObserveeToSaga, stopDBTracker})(subscribe(mapStateSubscriptionsToProps)(UserPanel));
export default UserContainer;