/**
 * Created by gregorydrake on 7/15/16.
 */
import React, {Component} from 'react'

import {connect} from 'react-redux'
import pageReset from '../events/actions/pageReset';
import selectNotaryType from '../events/actions/select_notary_type';
import {destroy} from 'redux-form/lib/actions';
import {Row, Col, Carousel} from 'react-bootstrap';
import HPLowerButtons from './homepage_lower_buttons';

class mainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null
        };

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        this.setState({width: width, height: height});
}

    componentWillMount() {
        this.updateDimensions();
        this.props.pageReset(); this.props.destroy('orderwizard'); this.props.destroy('packageOrderForm');
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        let { selectNotaryType } = this.props;
    return (
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <div className="move-up">
                    <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                        <Carousel.Item>
                            <img width="100%" alt="900x500"  src="images/placeholder-main-bg.jpg"/>
                            <Carousel.Caption>
                                <h3>FAST, EASY, WAY TO BECOME A NOTARY</h3>
                                <p>From beginning to end, ValueSure guides you through the notary appointment process.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                                </div>
                            </Col>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <div>
                                    <div className="banner"><p>WELCOME PLACEHOLDER</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                            <Col>
                                <HPLowerButtons selectNotaryType={selectNotaryType}/>
                            </Col>
                        </Row>
    );
    }
}

var mainJumbo = connect(null, {pageReset, destroy, selectNotaryType})(mainScreen);

export default mainJumbo;


