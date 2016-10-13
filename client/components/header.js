/**
 * Created by gregorydrake on 7/13/16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import ShoppingCartBadge from './navigation/shoppingCartBadge';
import { connect } from 'react-redux';
import {destroy} from 'redux-form/lib/actions';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import pageReset from '../events/actions/pageReset';
import {getCartsTotalQuantity} from '../selector/selector_slices/cart_selector';

class Header extends Component {
    renderLinks() {
        if (this.props.signedIn) {
            var accountsArray = [];

        //Definitely ensure the user's account section is displayed, if user is signed in
        const userAccountLink = <NavItem eventKey={4} key={4}>
                <LinkContainer to="/userpanel"><div>Account</div></LinkContainer>
                                </NavItem>;
        accountsArray.push(userAccountLink);

        //If the user is also an admin, allow them to see the the admin panel in the navbar
        if (this.props.administrator) {
            const adminAccountLink = <NavItem eventKey={3} key={3}>
                <LinkContainer to="/adminpanel"><div>Admin</div></LinkContainer>
            </NavItem>;
            accountsArray.push(adminAccountLink);
        }

        return accountsArray;

        } else {
            return [
                <NavItem eventKey={1} key={1}>
                        <LinkContainer to="/signup"><NavItem>Sign Up</NavItem></LinkContainer>
                </NavItem>,
                <NavItem eventKey={2} key={2}>
                    <LinkContainer to="/signin"><div>Sign In</div></LinkContainer>
                </NavItem>
                    ]
        }
    }

    render() {
        var {totalQuantity} = this.props;
        return (
            <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand className="logo-on">
                        <LinkContainer to="/" onClick={() => { this.props.pageReset(); this.props.destroy('orderwizard'); this.props.destroy('packageOrderForm'); this.props.destroy('orderaddsearch'); }}><Image src="/images/JPE_logo.png" responsive /></LinkContainer>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <div className="containnav">
                    <Navbar.Collapse>

                        <Nav pullLeft>
                            {this.renderLinks()}
                        </Nav>
                        <Nav pullRight>
                            <NavItem href="mailto:notary@iiubonds.com">Email</NavItem>
                            <Navbar.Text>800-933-7444</Navbar.Text>
                            <NavItem>
                                <LinkContainer to="/cart"><div><ShoppingCartBadge totalQuantity={totalQuantity} /></div></LinkContainer>
                            </NavItem>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        signedIn: state.signedIn.signedIn,
        administrator: state.administrator,
        totalQuantity: getCartsTotalQuantity(state)
    }
}

export default connect(mapStateToProps, {pageReset, destroy})(Header);