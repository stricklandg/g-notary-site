/**
 * Created by gregorydrake on 7/20/16.
 */
import React, { Component } from 'react';
import NavigationStoreForm from './navigationForStore';
import {connect} from 'react-redux';
import pageForward from '../../events/actions/pageForward';
import {browserHistory} from 'react-router';
import pageBack from '../../events/actions/pageBack';
var Spinner = require('react-spinkit');
var console = window.console || { log: function() {} };
class ShopForOrderForm extends Component {

    render() {
    var { pageForward, pageBack, loader } = this.props;
        return (
            <div>
                {loader == false ? <div><h2>Processing Appliction, Please Wait For the Application to Be Added To Cart</h2><Spinner spinnerName="circle"/></div> : <div>
                <h3>Purchase Additional Supplies</h3>
                <NavigationStoreForm />
                {this.props.children}
                <div>
                    <button type="button" className="btn btn-secondary" onClick={() => {pageForward(); browserHistory.push('/cart')}}>Check-out</button>
                </div>
            </div>}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        loader: state.loadingTrigger.loader
    }
}

export default connect(mapStateToProps, {pageForward, pageBack})(ShopForOrderForm);