/**
 * Created by gregorydrake on 7/14/16.
 */
import React from 'react';

const AccountHeader = ({props}) => {
    return (
        <div className="container">
            <div className="row">
                <div className=".col-xs-18">
                    <span className="pull-left"><h3 >Your Account</h3></span>
                    <span className="pull-right">
                            <h5>Member since: {'2016'}</h5>
                            <button type="button" className="label btn btn-primary pull-right">Profile Settings</button>
                        </span>
                </div>
            </div>

            <div className="row">
                <div className=".col-xs-18" />
            </div>
        </div>
    )
};

export default AccountHeader;