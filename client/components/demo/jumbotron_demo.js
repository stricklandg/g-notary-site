/**
 * Created by gregorydrake on 9/1/16.
 */
import React, {Component} from 'react';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';

class Jumbo extends Component {

    render() {
        var {title} = this.props;
        return (
        <Button className="clear-center-button">
            <Jumbotron>

                    <Grid>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <h3>{title}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Morbi eu ornare nisl. Cras auctor, ligula in eleifend pulvinar,
                                    erat enim imperdiet nulla, nec euismod mauris magna in urna.
                                    Suspendisse scelerisqu...</p></Col>
                        </Row>
                    </Grid>
            </Jumbotron>
        </Button>
        );
    }
}

export default Jumbo