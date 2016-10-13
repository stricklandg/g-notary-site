/**
 * Created by gregorydrake on 6/24/16.
 */
import React from 'react';
import Payment from 'payment';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, ControlLabel, Button, Alert, Form } from 'react-bootstrap';
import creditCardProcessing from '../../events/actions/credit_card_processing';
import {authorizeProcessing} from '../../events/actions/credit_card_processing';
import { reduxForm, formValueSelector, Field } from 'redux-form';
import {getCartsItemContents, getCartsTotal, getCartsTotalShipping, getCartsTax} from '../../selector/selector_slices/cart_selector';
import ShipToForm from './shipTo';
import renderInput from '../RenderField';
var moment = require('moment-timezone');
import _ from 'lodash';
import { browserHistory } from 'react-router';


class CreditCardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: null,
            exp_month: null,
            exp_year: null,
            cvc: null,
            token: null,
            submitValue: false,
            noAddressField: false,
        };
        this.setCardType = this.setCardType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitCheck = this.handleSubmitCheck.bind(this);
        this.resetCard = this.resetCard.bind(this);
        this.renderShippingForm = this.renderShippingForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.renderCheckForm = this.renderCheckForm.bind(this);
    }

    componentDidMount() {
        const { number, expiration, cvc } = this.refs;
        Payment.formatCardNumber(number);
        Payment.formatCardExpiry(expiration);
        Payment.formatCardCVC(cvc);
    }

    handleSubmit(event) {
        event.preventDefault();

        const{addressForm} = this.props;

        if (addressForm.values) {
            let addressArray = _.keys(addressForm.values);
            if(addressArray.length >= 6) {
                this.setState({noAddressField: false});
                //If the card isn't execepted and they have to retype...clear the state set from below and get ready to set it
                //with the new ref values
                this.resetCard();

                const {refs} = this;
                const number = refs.number.value;
                const expiration = refs.expiration.value.split('/');
                var exp_month = parseInt(expiration[0], 10);
                if (exp_month < 10) {
                    exp_month = exp_month + "";
                    exp_month = "0" + exp_month;
                }
                const exp_year = parseInt(expiration[1], 10);
                const cvc = refs.cvc.value;
                const card = {number, exp_month, exp_year, cvc};

                //This is the only place where we ever set state and we aren't setting a card value...we are passing
                //ES6 syntax in saying the object card is pointing too contains properties and those property names
                //match property names on state so set them one for one.
                var usertime = new Date(moment.tz(`${moment.tz.guess()}`).toISOString());
                var ourtime = new Date(moment.tz("America/Chicago").toISOString());

                var dateOfOrder = {usertime, ourtime};

                this.setState(card);

                var cartSubTotal = this.props.cartTotal;
                var cartShipping = this.props.cartShipping;
                var taxTotal = this.props.cartTax;

                var cartTotalValue = ((parseFloat(cartSubTotal) + parseFloat(cartShipping)).toFixed(2));

                var cartTotals = {subTotal: cartSubTotal, taxTotal: taxTotal, cartTotal: cartTotalValue,  cartShipping: cartShipping};

                var addedIds = this.props.checkoutItems.cart.addedIds;
                var quantityById = this.props.checkoutItems.cart.quantityById;
                var products = this.props.checkoutItems.products;

                var cartItems = {addedIds, quantityById, products};

                var onSuccessReturnValues = {order: cartItems, orderTime: dateOfOrder, cartTotals};

                this.props.authorizeProcessing(card, cartTotalValue, onSuccessReturnValues, addressForm);
                } else {
                this.setState({noAddressField: true})
                }
            } else {
            this.setState({noAddressField: true})
        }

    }

    handleSubmitCheck(event) {
        event.preventDefault();

        const{addressForm} = this.props;

        if (addressForm.values) {
            let addressArray = _.keys(addressForm.values);
            if(addressArray.length >= 6) {
                this.setState({noAddressField: false});
                //If the card isn't execepted and they have to retype...clear the state set from below and get ready to set it
                //with the new ref values

                const number = this.props.checkNumber;

                const check = {number:number, isCheck: "true"};

                //This is the only place where we ever set state and we aren't setting a card value...we are passing
                //ES6 syntax in saying the object card is pointing too contains properties and those property names
                //match property names on state so set them one for one.
                var usertime = new Date(moment.tz(`${moment.tz.guess()}`).toISOString());
                var ourtime = new Date(moment.tz("America/Chicago").toISOString());

                var dateOfOrder = {usertime, ourtime};

                var cartSubTotal = this.props.cartTotal;
                var cartShipping = this.props.cartShipping;
                var taxTotal = this.props.cartTax;

                var cartTotalValue = ((parseFloat(cartSubTotal) + parseFloat(cartShipping)).toFixed(2));

                var cartTotals = {subTotal: cartSubTotal, taxTotal: taxTotal, cartTotal: cartTotalValue,  cartShipping: cartShipping};

                var addedIds = this.props.checkoutItems.cart.addedIds;
                var quantityById = this.props.checkoutItems.cart.quantityById;
                var products = this.props.checkoutItems.products;

                var cartItems = {addedIds, quantityById, products};

                var onSuccessReturnValues = {order: cartItems, orderTime: dateOfOrder, cartTotals};

                this.props.authorizeProcessing(check, cartTotalValue, onSuccessReturnValues, addressForm);
            } else {
                this.setState({noAddressField: true})
            }
        } else {
            this.setState({noAddressField: true})
        }

    }


    submitForm() {
        this.setState({submitValue: true})
    }

    resetCard() {
        this.setState({ number: null, exp_month: null, exp_year: null, cvc: null, token: null });
    }

    setCardType(event) {
        const type = Payment.fns.cardType(event.target.value);
        const cards = document.querySelectorAll('[data-brand]');

        [].forEach.call(cards, (element) => {
            if (element.getAttribute('data-brand') === type) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    renderCardList() {
        return (<ul className="credit-card-list clearfix">
            <li><i data-brand="visa" className="fa fa-cc-visa"></i></li>
            <li><i data-brand="amex" className="fa fa-cc-amex"></i></li>
            <li><i data-brand="mastercard" className="fa fa-cc-mastercard"></i></li>
            <li><i data-brand="jcb" className="fa fa-cc-jcb"></i></li>
            <li><i data-brand="discover" className="fa fa-cc-discover"></i></li>
            <li><i data-brand="dinersclub" className="fa fa-cc-diners-club"></i></li>
        </ul>);
    }

    renderCardForm() {
        return (<form className="CardForm" onSubmit={ this.handleSubmit }>
            <Row>
                <Col xs={ 12 }>
                    <FormGroup>
                        <ControlLabel>Card Number</ControlLabel>
                        <input
                            onKeyUp={ this.setCardType }
                            className="form-control"
                            type="text"
                            ref="number"
                            placeholder="Card Number"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={ 6 } sm={ 5 }>
                    <FormGroup>
                        <ControlLabel>Expiration</ControlLabel>
                        <input
                            className="form-control text-center"
                            type="text"
                            ref="expiration"
                            placeholder="MM/YYYY"
                        />
                    </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 4 } smOffset={ 3 }>
                    <FormGroup>
                        <ControlLabel>CVC</ControlLabel>
                        <input
                            className="form-control text-center"
                            type="text"
                            ref="cvc"
                            placeholder="CVC"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Button type="submit" bsStyle="success" block>Pay</Button>
        </form>);
    }

    renderCheckForm() {
        return (
            <Form onSubmit={ this.handleSubmitCheck }>

            <Row>
                <Col sm={12} md={12}>
                <FormGroup>


                    <ControlLabel>Check Info</ControlLabel>
                    <Col sm={12} md={12}>
                        <div className="form-spacer">
                            <Field name="checknumber" className="form-control" type="text" component={renderInput} placeholder="Check Number"/>
                        </div>
                    </Col>

                </FormGroup>
                </Col>

            </Row>
            <Button type="submit" bsStyle="success" block>Pay</Button>
            </Form>
    );

    }

    renderShippingForm() {
       return ( <ShipToForm /> )
    }

    render() {
        const {ccError, checkoutItems, administrator} = this.props;
        const {noAddressField} = this.state;
        return (<div className="CreditCard">
            {_.isEmpty(checkoutItems) ? browserHistory.push("/cart") : ''}
            {this.renderShippingForm()}
            <div className="form-spacer"></div>
            {administrator == true ? <div>
                {this.renderCardList()}
                {this.renderCardForm()}
                {this.renderCheckForm()}
            </div> : <div>
                {this.renderCardList()}
                {this.renderCardForm()}
            </div>}
            {ccError.error == true ? (<Alert bsStyle="warning">
                <h5>An error occurred with your credit card payment, please retype your information and try again</h5>
            </Alert>) : <div></div>}
            {noAddressField == true ? (<Alert bsStyle="warning">
                <h5>Please type in a your name, phone number and shipping address before pressing pay</h5>
            </Alert>) : <div></div>}
        </div>);
    }
}

CreditCardForm.propTypes = {};

const CreditCardFormWizard = reduxForm({
    form: 'ccwizard',
})(CreditCardForm);

const selector = formValueSelector('ccwizard');

function mapStateToProps(state) {
    return {
        cartInfo: state.cart,
        cartTotal: getCartsTotal(state),
        cartTax: getCartsTax(state),
        cartShipping: getCartsTotalShipping(state),
        ccError: state.ccError,
        addressForm: state.form.shippingInfo,
        checkoutItems: state.checkoutItems,
        administrator: state.administrator,
        checkNumber: selector(state, 'checknumber')
    }
}

var CreditCard = connect(mapStateToProps, {creditCardProcessing, authorizeProcessing})(CreditCardFormWizard);
export default CreditCard;