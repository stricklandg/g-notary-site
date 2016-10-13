/**
 * Created by gregorydrake on 7/20/16.
 */
import React, { Component } from 'react';
import NavigationForStore from './navigationForStore';

class Shop extends Component {
    render() {
        return (
            <div>
            <h3>Shop</h3>
            <NavigationForStore />
                {this.props.children}
            </div>
        )
    }
}

export default Shop;