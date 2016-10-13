/**
 * Created by gregorydrake on 6/22/16.
 */

import React, { Component, PropTypes } from 'react'
import imageSwitch from './shop/helper/itemImageSwitch';
import Product from './product'

export default class ProductItem extends Component {
    render() {
        const { product } = this.props;
        return (
                <Product
                    name={product.name}
                    price={product.price}
                />
        )
    }
}