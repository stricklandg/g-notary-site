/**
 * Created by gregorydrake on 9/6/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSelectedOrderContents} from '../../../../selector/selector_slices/selected_admin_order_container_selector';
import AdminOrderSelectedViewContainer from '../adminOrderSelectedView';
import _ from 'lodash';

import TicketShow from '../ticket_show';

import TicketNew from '../ticket_new';
//params are accessible on this components props
class SelectedStoreItem extends Component {

    render() {
        let { selectedOrderItem, params } = this.props;
        return (
            <div>
                <TicketShow {...this.props.params}/>
                {!_.isEmpty(selectedOrderItem) ? <AdminOrderSelectedViewContainer order={selectedOrderItem}/> : <div> Select an item </div>}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        selectedOrderItem: getSelectedOrderContents(state, ownProps)
    }
}

const SelectedOrderContainer = connect(mapStateToProps, null)(SelectedStoreItem);

export default SelectedOrderContainer;
