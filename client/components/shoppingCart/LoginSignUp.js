/**
 * Created by gregorydrake on 9/6/16.
 */
import {LinkContainer} from 'react-router-bootstrap';
import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

class LoginSignUp extends Component {
    render() {
        return (
            <div>
                <h4>Please log-in to your Everhart account before checking out</h4>
            <div className="btn-group btn-group-justified" role="group">
                <LinkContainer to="/cart/signup/"><div className="btn-group" role="group" key={"signup"}><button className="btn btn-default">Sign-Up</button></div></LinkContainer>

                <LinkContainer to="/cart/signin"><div  className="btn-group" role="group" key={"login"}><button className="btn btn-default">Sign-In</button></div></LinkContainer>

            </div>
            </div>
        )
    }
}

export default LoginSignUp;
