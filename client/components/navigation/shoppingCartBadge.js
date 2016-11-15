/**
 * Created by gregorydrake on 7/18/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class ShoppingCartBadge extends Component {
    render() {
        const { totalQuantity } = this.props;
        return (
            <h4>MY CART <span className="badge">{totalQuantity}</span></h4>
        )
    }
}


export default connect(null, null)(ShoppingCartBadge);