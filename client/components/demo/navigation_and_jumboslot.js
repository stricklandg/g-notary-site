/**
 * Created by gregorydrake on 9/1/16.
 */
import React, {Component} from 'react';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown, Col, Row} from 'react-bootstrap';
import Jumbo from './jumbotron_demo';
import TopJumbo from './Top Jumbo';

class Navigation extends Component {
    render() {
        return (
            <div className="hold-me">
            <Navbar bsStyle="default">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">LOGO ICON HERE</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullLeft>
                    <NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
                    <NavItem eventKey={1.1} href="#">About</NavItem>
                    <NavItem eventKey={1.2} href="#">Contact Us</NavItem>
                    <NavItem eventKey={1.3} href="#">Account</NavItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={2} title="Bonds" id="basic-nav-dropdown">
                    <NavItem eventKey={2.2} href="#">Notary</NavItem>
                    <NavItem eventKey={2.2} href="#">MVD</NavItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            </div>
        )
    }

}

class Bundler extends Component {
    render() {
        return (
            <div>
            <Navigation/>
                <Row>
                    <Col lg={12}>
                        <TopJumbo title="JP Everhard is Now ValueSure"/>
                    </Col>
                </Row>
            <Row>
                <Col lg={6}>
                    <Jumbo title="Notary Bonds"/>
                </Col>
                <Col lg={6}>
                    <Jumbo title="MVD"/>
                </Col>
            </Row>
            </div>
        )
    }
}

export default Bundler;