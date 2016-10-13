/**
 * Created by gregorydrake on 7/18/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class ShoppingCartBadge extends Component {
    render() {
        const { totalQuantity } = this.props;
        return (
            <p>Shopping Cart <span className="badge">{totalQuantity}</span></p>
        )
    }
}


export default connect(null, null)(ShoppingCartBadge);