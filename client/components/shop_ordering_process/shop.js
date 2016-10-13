/**
 * Created by gregorydrake on 7/20/16.
 */
import React, { Component } from 'react';
import NavigationStoreForm from './navigationForStore';
import {connect} from 'react-redux';
import pageForward from '../../events/actions/pageForward';
import {browserHistory} from 'react-router';
import pageBack from '../../events/actions/pageBack';

class ShopForOrderForm extends Component {

    render() {
    var { pageForward, pageBack } = this.props;
        return (
            <div>
            <h3>Purchase Additional Supplies</h3>
            <NavigationStoreForm />
                {this.props.children}
            <div>
                <button type="button" className="btn btn-secondary" onClick={() => {pageBack(); browserHistory.push('/order/notary/')}}>Previous</button>
                <button type="button" className="btn btn-secondary" onClick={() => {pageForward(); browserHistory.push('/cart')}}>Check-out</button>
            </div>
            </div>
        )
    }
}

export default connect(null, {pageForward, pageBack})(ShopForOrderForm);