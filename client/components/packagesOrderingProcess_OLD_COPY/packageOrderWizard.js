/**
 * Created by gregorydrake on 7/16/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import renderButtons from './renderFieldForPackagesButtons';
import { browserHistory } from 'react-router';

class packageOrderPage extends Component {

    render() {
        const { handleSubmit, packages, previousPage, onSubmit, reveal, addToCart, tempBondId, cart, removePackageOrBond, orderForm } = this.props;

        return (
        <form onSubmit={handleSubmit(
            (value) => {
                addToCart(value.packageChosen, cart, tempBondId, orderForm, reveal);
                onSubmit();
                browserHistory.push('/shopform/supplies');
            }
        )}>
            <div className="form-group">
                <label>Packages Offered</label>
                <Field name="packageChosen" id="packageChosen" orderDetails={orderForm} type="input" arrayForButtons={packages} component={renderButtons}/>
                <button type="button" className="btn btn-secondary" onClick={() => {previousPage(); removePackageOrBond(cart, tempBondId)} }>Previous</button>
            </div>

        </form>
        )
    }
}

export var packageOrderForm = reduxForm({
    form: 'orderwizard',
    destroyOnUnmount: false
})(packageOrderPage);