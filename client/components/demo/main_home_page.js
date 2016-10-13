/**
 * Created by gregorydrake on 9/1/16.
 */
import React, {Component} from 'react';

import {Grid, Row, Col} from 'react-bootstrap';


class HomePage extends Component {
    render() {
        return (
                <Grid>
                    <Row>
                        <Col lg={1} />
                        <Col lg={10}><span className="center-block">{this.props.children}</span></Col>
                        <Col lg={1}/>
                    </Row>
                </Grid>
        )
    }
}

export default HomePage;