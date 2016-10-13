/**
 * Created by gregorydrake on 7/21/16.
 */
/**
 * Created by gregorydrake on 6/22/16.
 */

import React, { Component, PropTypes } from 'react'
import Product from '../product'
import modalSwitch from './helper/modalSwitch';
import imageSwitch from './helper/itemImageSwitch';

export default class SelectedItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.closeModal = this.closeModal.bind(this);
        this.modalSwitch = modalSwitch.bind(this);
        this.imageSwitch = imageSwitch.bind(this);
    }

    closeModal() {
        this.setState({modal: false})
    }

    render() {
        const { product, onClickAction, category } = this.props;
        return (
            <div className="list-group-item">
                <Product
                name={product.name}
                price={product.price}
                image={this.imageSwitch(product)}
            />

                <p>
                </p>

                {product.addInfo == "false" ? <button className="btn btn-info"
                                                    onClick={()=>onClickAction({productId: product._id})}>Add to Cart</button>
                    : <button className="btn btn-info" onClick={()=>this.setState({modal: true})}>Add to Cart</button>
                }

                {this.state.modal == true ?
                <div className="right">{this.modalSwitch(category, product)}</div> : <div></div>}
            </div>
        )
    }
}

//{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
// disabled={product.inventory > 0 ? '' : 'disabled'}