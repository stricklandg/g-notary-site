/**
 * Created by gregorydrake on 7/14/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountHeader from './account_header';

import signOutUser from '../../events/actions/sign_out_user';
import makeAdminUser from '../../events/actions/make_admin_user';
import {Link} from 'react-router';

//Account is an authorized route, meaning it cannot be accessed unless the user is logged in.

class Account extends Component {
    render() {
        let {signOutUser, makeAdminUser} = this.props;
        return(
        <div>

            <AccountHeader />

            <div className="container">

                <div className="row">
                    <div className=".col-xs-18">
                        <span style={{float:'left'}}><h5>Existing Bonds</h5></span>
                    </div>
                </div>

                <div className="row">
                    <div className=".col-xs-18">
                        <ul className="list-group">
                            <li className="list-group-item"><Link to='/on22345'>Bond #23415</Link></li>
                            <li className="list-group-item">Bond #15930</li>
                            <li className="list-group-item">Bond #16920</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="container">

                <div className="row">
                    <div className=".col-xs-18">
                        <span style={{float:'left'}}><h5>Orders</h5></span>
                    </div>
                </div>

                <div className="row">
                    <div className=".col-xs-18">
                        <ul className="list-group">
                            <li className="list-group-item">Order #23415</li>
                            <li className="list-group-item">Order #15930</li>
                            <li className="list-group-item">Order #16920</li>
                        </ul>
                    </div>
                </div>

            </div>
            <button className="btn-default" onClick={()=>signOutUser()}>Sign-Out</button>
            <button className="btn-default" onClick={()=>makeAdminUser('universal')}>Make Admin User</button>
        </div>
        )
    }
}

var AccountsContainer = connect(null, {signOutUser, makeAdminUser})(Account);
export default AccountsContainer;