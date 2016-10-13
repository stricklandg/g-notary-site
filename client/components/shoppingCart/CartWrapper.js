/**
 * Created by gregorydrake on 8/7/16.
 */
import React, {Component} from 'react';

class CartWrapper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}


export default CartWrapper;