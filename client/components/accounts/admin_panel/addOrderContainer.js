/**
 * Created by gregorydrake on 10/3/16.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddOrderBodyContainer from './addOrderBody';
import AddOrderFormContainer from './addOrder';

class AddOrderContainer extends Component {
    render() {
        return (
            <div>
                <div>

                </div>
                <AddOrderFormContainer/>
                <AddOrderBodyContainer/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.ordersToView
    }
}

connectAddOrderContainer = connect(null, {})(AddOrderContainer)

export default connectAddOrderContainer;