/**
 * Created by gregorydrake on 9/6/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSelectedOrderContents} from '../../../../selector/selector_slices/selected_admin_order_container_selector';
import UserOrderSelectedViewContainer from '../userOrderSelectedView';
import _ from 'lodash';

//params are accessible on this components props
class SelectedStoreItem extends Component {

    render() {
        let { selectedOrderItem, params } = this.props;
        return (
            <div>
                {!_.isEmpty(selectedOrderItem) ? <UserOrderSelectedViewContainer order={selectedOrderItem}/> : <div> Select an item </div>}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        selectedOrderItem: getSelectedOrderContents(state, ownProps)
    }
}

const UserSelectedOrderContainer = connect(mapStateToProps, null)(SelectedStoreItem);

export default UserSelectedOrderContainer;