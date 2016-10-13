/**
 * Created by gregorydrake on 6/24/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkout } from '../../../events/actions/checkout';
import { deleteFromCart } from '../../../events/actions/add_to_cart';
import {getCartsItemContents, getCartsTotal, getCartsTotalQuantity, getCartsTax, getCartsTotalShipping} from '../../../selector/selector_slices/cart_selector';
import Cart from '../Cart';


class CartContainment extends Component {

    render() {
        const {supplies, total, totalQuantity, totalTax, totalShipping} = this.props;
            return (
                <div>
                    <Cart
                        products={supplies}
                        total={total}
                        totalTax={totalTax}
                        totalQuantity={totalQuantity}
                        totalShipping={totalShipping}
                        onCheckoutClicked={this.props.checkout}
                        removeFromCart={this.props.deleteFromCart}
                    />
                </div>
            )
        }

}

function mapStateToProps(state) {
    return {
        supplies: getCartsItemContents(state),
        total: getCartsTotal(state),
        totalTax: getCartsTax(state),
        totalQuantity: getCartsTotalQuantity(state),
        totalShipping: getCartsTotalShipping(state),
    }
}



var CartContainer = connect(mapStateToProps, { checkout, deleteFromCart })(CartContainment);
export default CartContainer;