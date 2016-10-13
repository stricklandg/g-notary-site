/**
 * Created by gregorydrake on 6/24/16.
 */
import React, { Component } from 'react'
import CartProduct from './CartProduct';
import {browserHistory} from 'react-router';
import {ListGroup, Grid, Button} from 'react-bootstrap';
import extraInfoSwitch from './helper/extraInfoSwitcher';
import _ from 'lodash';



export default class Cart extends Component {

    constructor(props) {
        super(props);

        this.buttonClickability = this.buttonClickability.bind(this);
    }

    componentDidMount (){
        var { products } = this.props;

        this.buttonClickability(products);
    }

    componentWillReceiveProps(){
        var { products } = this.props;

        this.buttonClickability(products);
    }

    buttonClickability(products) {

        if (products.length == 0) {

            if (this.refs.paymentButton == null) {

            } else {

                this.refs.paymentButton.disabled = true;
            }
        } else {
            if (this.refs.paymentButton == null) {

            } else {

                this.refs.paymentButton.disabled = false;
            }
        }

    }

    lookForPackages(products) {
        const noProducts = products.length == 0;
        if (noProducts == false) {
            value = false;
            return products.some(productCategory => {

               if (productCategory == undefined) {

                } else {
                    return productCategory.some(arrayValue => {
                       switch (arrayValue.name) {
                            case "Basic Package":
                               return value = true;
                                break;
                            case "Premium Package":
                               return value = true;
                                break;
                            case "Renewal Package":
                               return value = true;
                                break;
                            case "New Notary Package":
                               return value = true;
                                break;
                            case "Bond Only":
                              return value = true;
                                break;
                            default:
                               return value=false
                        }

                    })
                }

            })
        }
    }

    render() {
        const { products, total, onCheckoutClicked, totalQuantity, removeFromCart, totalTax, totalShipping } = this.props;
        const noProducts = products.length == 0;
        var nodes = noProducts ? <em>Please add some products to cart.</em> : products.map(productCategory => {

            if (productCategory == undefined) {

            } else {
                return productCategory.map(product => {
                const keyValue = `${product.name}_${Math.floor((Math.random() * 10000) + 1)}`;
                if (product.addInfo == "true") {
                    var arrayExtInfo = _.toPairs(extraInfoSwitch(product));
                    return <CartProduct name={product.name}
                                        price={product.price}
                                        quantity={product.quantity}
                                        key={keyValue}
                                        removeFromCart={removeFromCart}
                                        addInfo={arrayExtInfo}
                                        unq_id={product._id}
                    />
                } else {
                    return <CartProduct name={product.name}
                                        price={product.price}
                                        quantity={product.quantity}
                                        key={keyValue}
                                        removeFromCart={removeFromCart}
                                        unq_id={product._id}
                    />
                }

                })
            }

            });

            return (
            <div>
                <h3>Your Cart</h3>
                <Grid>
                <ListGroup componentClass="ul">{nodes}</ListGroup>
                </Grid>
                <p>Total Quantity: {totalQuantity}</p>
                <p>Sub-Total: &#36;{total}</p>
                <p>Total Shipping: &#36;{totalShipping}</p>
                <p>Total: &#36;{(parseFloat(total)+parseFloat(totalShipping)).toFixed(2)}</p>
                <Button ref="paymentButton" onClick={() => {onCheckoutClicked(total, products); browserHistory.push('/cart/payment')}}>
                    Checkout
                </Button>
            </div>
            )
    }
}