/**
 * Created by gregorydrake on 7/15/16.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const renderButtons = props => {
    const { input: {onChange} } = props;
            return (
            <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={6} lg={6}>
                         <div className="center-block">
                            <button className="button-offset" onClick={() => onChange(1)} style={{background:"transparent", outline: "none", border: "none"}}><img className="image-offset" src="../images/renewalnotary.png" /></button>
                            {props.touched && props.error && <span>{props.error}</span>}
                        </div>

                    </Col>

                    <Col sm={6} md={6} lg={6}>
                            <div className="center-block">
                            <button className="button-offset" onClick={() => onChange(0)} style={{background:"transparent", outline: "none", border: "none"}}><img className="image-offset" src="../images/newnotary.png" /></button>
                            {props.touched && props.error && <span>{props.error}</span>}
                            </div>
                    </Col>
                    </Row>
            </Grid>
            )
};

export default renderButtons;
