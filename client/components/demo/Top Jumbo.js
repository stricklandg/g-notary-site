
/**
 * Created by gregorydrake on 9/1/16.
 */
import React, {Component} from 'react';
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap';

class TopJumbo extends Component {

    render() {
        var {title} = this.props;
        return (
                <div className="height-override">
                <Jumbotron>

                    <Grid>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <h3>{title}</h3>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
                </div>

        );
    }
}

export default TopJumbo